// Calendar rendering fix - runs after main script loads
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    const exportContainer = document.getElementById('calendarExport');
    if (exportContainer && typeof addCalendarExportButton === 'function') {
      addCalendarExportButton(exportContainer);
    }
    
    // Render calendar after event sync completes
    if (typeof renderCalendar === 'function') {
      renderCalendar();
    }
  }, 200);
});

// Override renderCalendar IMMEDIATELY before DOMContentLoaded fires
// This ensures the override is in place when init() calls renderCalendar()
const originalRenderCalendar = window.renderCalendar;
window.renderCalendar = function() {
  const container = document.querySelector('#calendarGrid');
  const filters = document.querySelector('#calendarFilters');
  const upcoming = document.querySelector('#upcomingEvents');
  if (!container || !filters) return;
  container.innerHTML = '';
  filters.innerHTML = '';
  if (upcoming) upcoming.innerHTML = '';

  const tagColors = {};
  const palette = ['#ff7a7a','#7acbff','#ffd27a','#9bff7a','#c27aff','#ff9bc2'];
  const allTags = Array.from(new Set([...events.flatMap(e => e.tags), ...resources.flatMap(r => r.tags)]));
  allTags.forEach((t,i)=> tagColors[t]=palette[i%palette.length]);

  const nav = document.createElement('div'); nav.className='calendar-nav';
  const monthLabel = document.createElement('div');
  const prev = document.createElement('button'); prev.textContent='◀';
  const next = document.createElement('button'); next.textContent='▶';
  nav.appendChild(prev); nav.appendChild(monthLabel); nav.appendChild(next);

  const cal = document.createElement('div'); cal.className='calendar';
  const legend = document.createElement('div'); legend.className='calendar-legend';
  allTags.forEach(t=>{
    const li = document.createElement('div'); li.className='legend-item';
    li.innerHTML = `<span class="event-dot" style="background:${tagColors[t]}"></span><span>${t}</span>`;
    legend.appendChild(li);
  });

  const grid = document.createElement('div'); grid.className='calendar-grid';
  let current = new Date();

  function toneEventColor(event) {
    const color = tagColors[event.tags[0]] || '#64748b';
    return {
      background: `${color}22`,
      color,
      borderLeft: `3px solid ${color}`
    };
  }

  function renderMonth(filteredEvents = events) {
    monthLabel.textContent = current.toLocaleString(undefined,{month:'long',year:'numeric'});
    grid.innerHTML='';

    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    weekdays.forEach(d=>{ 
      const h=document.createElement('div'); 
      h.textContent=d; 
      h.style.fontWeight='600'; 
      h.style.textAlign='center'; 
      grid.appendChild(h); 
    });

    const first = new Date(current.getFullYear(), current.getMonth(),1);
    const start = first.getDay();
    const days = new Date(current.getFullYear(), current.getMonth()+1,0).getDate();

    for(let i=0;i<start;i++){ 
      const cell=document.createElement('div'); 
      cell.className='calendar-cell empty'; 
      grid.appendChild(cell); 
    }

    for(let d=1; d<=days; d++){
      const cell = document.createElement('div'); 
      cell.className='calendar-cell';
      const today = new Date();
      const isToday = current.getMonth() === today.getMonth() && current.getFullYear() === today.getFullYear() && d === today.getDate();
      if (isToday) cell.classList.add('today');

      const dayHeader = document.createElement('div'); dayHeader.className='day-header';
      const dateSpan = document.createElement('div'); dateSpan.className='date'; dateSpan.textContent=d;
      dayHeader.appendChild(dateSpan);
      cell.appendChild(dayHeader);

      const eventsContainer = document.createElement('div'); eventsContainer.className='events-container';
      const dateStr = new Date(current.getFullYear(), current.getMonth(), d).toISOString().slice(0,10);
      const dayEvents = filteredEvents.filter(ev => ev.date === dateStr).sort((a,b)=>a.title.localeCompare(b.title));
      const visibleEvents = dayEvents.slice(0, 3);

      visibleEvents.forEach(ev=>{
        const item = document.createElement('div');
        item.className='event-item';
        const dot = document.createElement('span');
        dot.className='event-dot';
        dot.style.background = tagColors[ev.tags[0]] || '#666';
        const title = document.createElement('span');
        title.textContent = ev.title.length > 22 ? `${ev.title.slice(0, 22)}…` : ev.title;
        item.appendChild(dot);
        item.appendChild(title);
        const tone = toneEventColor(ev);
        Object.assign(item.style, tone);
        item.title = `${ev.title}${ev.resourceId ? ' — opens resource' : ''}`;
        item.addEventListener('click', ()=>{ 
          if(ev.resourceId) window.location=`resource.html?id=${encodeURIComponent(ev.resourceId)}`; 
        });
        eventsContainer.appendChild(item);
      });

      if (dayEvents.length > visibleEvents.length) {
        const more = document.createElement('button');
        more.type='button';
        more.className='calendar-more';
        more.textContent=`+${dayEvents.length - visibleEvents.length} More`;
        more.title = dayEvents.slice(visibleEvents.length).map(ev => ev.title).join('\n');
        more.addEventListener('click', (event) => { event.stopPropagation(); });
        eventsContainer.appendChild(more);
      }

      cell.appendChild(eventsContainer);
      cell.title = dayEvents.map(ev => ev.title).join('\n');
      grid.appendChild(cell);
    }
  }

  prev.addEventListener('click', ()=>{ 
    current = new Date(current.getFullYear(), current.getMonth()-1,1); 
    renderMonth(getFilteredEvents()); 
  });
  next.addEventListener('click', ()=>{ 
    current = new Date(current.getFullYear(), current.getMonth()+1,1); 
    renderMonth(getFilteredEvents()); 
  });

  cal.appendChild(nav); 
  cal.appendChild(grid); 
  cal.appendChild(legend);
  container.appendChild(cal);
  renderMonth();
  renderUpcomingEvents();

  const filterBar = document.createElement('div'); 
  filterBar.className='filter-chips';
  const allBtn = document.createElement('button'); 
  allBtn.className='filter active'; 
  allBtn.textContent='All'; 
  allBtn.dataset.filter='all';
  filterBar.appendChild(allBtn);
  
  const clearBtn = document.createElement('button'); 
  clearBtn.className='filter-clear'; 
  clearBtn.textContent='Clear';
  clearBtn.addEventListener('click', () => {
    filterBar.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    allBtn.classList.add('active');
    renderMonth(getFilteredEvents());
    renderUpcomingEvents();
  });
  filterBar.appendChild(clearBtn);

  allBtn.addEventListener('click', ()=>{ 
    filterBar.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); 
    allBtn.classList.add('active'); 
    renderMonth(getFilteredEvents()); 
    renderUpcomingEvents(); 
  });
  
  allTags.forEach(t=>{
    const b=document.createElement('button'); 
    b.className='filter'; 
    b.textContent=t; 
    b.dataset.filter=t;
    b.addEventListener('click', ()=>{
      b.classList.toggle('active');
      const active = Array.from(filterBar.querySelectorAll('.filter')).filter(x=>x.dataset.filter && x.dataset.filter!=='all' && x.classList.contains('active')).map(x=>x.dataset.filter);
      if(active.length) {
        allBtn.classList.remove('active');
      } else {
        allBtn.classList.add('active');
      }
      renderMonth(getFilteredEvents(active));
      renderUpcomingEvents(active);
    });
    filterBar.appendChild(b);
  });
  filters.appendChild(filterBar);

  function getFilteredEvents(activeTags = []) {
    const active = Array.isArray(activeTags) ? activeTags : (activeTags ? [activeTags] : []);
    return active.length ? events.filter(ev => active.every(t => ev.tags.includes(t))) : events;
  }

  function renderUpcomingEvents(activeTags = []) {
    if (!upcoming) return;
    const filtered = getFilteredEvents(activeTags).slice(0, 4);
    upcoming.innerHTML = '';
    const heading = document.createElement('div');
    heading.className = 'upcoming-card';
    heading.innerHTML = '<strong>Upcoming events</strong><p>See what\'s happening next in the community.</p>';
    upcoming.appendChild(heading);
    filtered.forEach(ev => {
      const card = document.createElement('div');
      card.className = 'upcoming-card';
      const title = document.createElement('strong');
      title.textContent = ev.title;
      const date = document.createElement('p');
      date.textContent = new Date(ev.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
      card.appendChild(title);
      card.appendChild(date);
      upcoming.appendChild(card);
    });
  }
};
