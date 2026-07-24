const resources = [
  {
    id: 'katy-responds',
    name: 'Katy Responds',
    tags: ['housing', 'community', 'basic-needs'],
    description: 'Rebuilding homes and restoring hope after disaster with compassionate local support.',
    image: 'assets/Katy-responds.jpg',
    email: 'info@katyresponds.org',
    website: 'https://www.katyresponds.org/',
    funding: 'Donations, grants, sponsorships, partnerships',
    spotlight: true,
    mission: 'Support families in crisis with practical recovery and emotional care.',
    services: ['Housing support', 'Disaster recovery', 'Family stabilization'],
    audience: ['Families', 'Seniors', 'Veterans'],
    address: 'Katy, TX',
    phone: 'N/A',
    hours: 'By appointment',
    languages: ['English', 'Spanish']
  },
  {
    id: 'ballard-house',
    name: 'The Ballard House',
    tags: ['housing', 'health', 'basic-needs'],
    description: 'No-cost temporary housing for patients and caregivers during treatment in Houston.',
    image: 'assets/Ballard-house.webp',
    email: 'david.brown@theballardhouse.org',
    website: 'https://www.theballardhouse.org/',
    funding: 'sponsorships, donations, grants',
    spotlight: true,
    mission: 'Offer a restorative place to stay for individuals seeking treatment.',
    services: ['Temporary housing', 'Caregiver support', 'Transportation referrals'],
    audience: ['Patients', 'Caregivers', 'Families'],
    address: 'Houston, TX',
    phone: 'N/A',
    hours: '24/7 support',
    languages: ['English']
  },
  {
    id: 'clothed-by-faith',
    name: 'Clothed by Faith Katy',
    tags: ['basic-needs', 'faith-based', 'community'],
    description: 'Providing clothing and dignity to neighbors facing hardship through local partnerships.',
    image: 'assets/clothed by faith.jpg',
    email: 'info@clothedbyfaith.org',
    website: 'https://www.clothedbyfaith.org/',
    funding: 'Sponsorships, donations',
    spotlight: true,
    mission: 'Demonstrate care and dignity through clothing distribution.',
    services: ['Clothing closets', 'Family support', 'Community outreach'],
    audience: ['Families', 'Children', 'Seniors'],
    address: 'Katy, TX',
    phone: 'N/A',
    hours: 'By appointment',
    languages: ['English']
  },
  {
    id: 'family-hope',
    name: 'Family Hope',
    tags: ['health', 'faith-based', 'community'],
    description: '"Transforming hurting people into healthy families through the hope of God." -- Family Hope',
    image: 'assets/family-hope.jpeg',
    email: 'Information@familyhopefulshear.org',
    website: 'https://www.familyhopefulshear.org/',
    funding: 'Donations, fundraisers, sponsorships',
    spotlight: false
  },
  {
    id: 'jackie-lou-foundation',
    name: 'Jackie Lou Foundation',
    tags: ['youth', 'education', 'community'],
    description: '"To promote dignity, kindness, and belonging for seniors while inspiring empathy and respect in children through intergenerational connection." -- Jackie Lou Foundation',
    image: 'assets/jackie-lou.jpeg',
    email: 'care@jackieloufoundation.org',
    website: 'https://jackieloufoundation.org/home',
    funding: 'Ticket sales, donations',
    spotlight: false
  },
  {
    id: 'rising-queens-foundation',
    name: 'Rising Queens Foundation',
    tags: ['youth', 'education'],
    description: '"Empower Tomorrow: Shaping Girls\' Futures through Education and Leadership." -- Rising Queens Foundation',
    image: 'assets/rising-queens.jpg',
    email: 'contact@learninglab.org',
    website: 'https://www.risingqueensfoundation.org/',
    funding: 'Grants, donations',
    spotlight: false
  },
  {
    id: 'creator-terminal',
    name: 'Creator Terminal',
    tags: ['education', 'youth'],
    description: '"...our goal is to give people the tools, knowledge, and confidence to bring their ideas to life and build lasting futures through creativity." -- Creator Terminal',
    image: 'assets/creator-terminal.png',
    email: 'contact@creatorterminal.com',
    website: 'https://www.creatorterminal.com/',
    funding: 'Donations, sponsorships',
    spotlight: false
  },
  {
    id: 'compassion-katy',
    name: 'Compassion Katy',
    tags: ['youth', 'faith-based', 'basic-needs'],
    description: '"Identify the needs of under-resourced children and mobilize the body of Christ toH bridge the gap." -- Compassion Katy',
    image: 'assets/compassion-katy.jpeg',
    email: 'dboden@phckaty.org',
    website: 'https://www.compassionkaty.org/',
    funding: 'Registrations, donations',
    spotlight: false
  },
  {
    id: 'friendship-circle',
    name: 'Houston Friendship & Wellness Organization',
    tags: ['health', 'community'],
    description: '"Together we build a community where no one is left behind." -- Houston Friendship & Wellness Organization',
    image: 'assets/friendship-circle.png',
    email: 'info@friendshipwellness.com',
    website: 'https://www.friendshipwellness.com/',
    funding: 'Donations, grants',
    spotlight: false
  },
  {
    id: 'arc-of-katy',
    name: 'Arc of Katy',
    tags: ['community', 'basic-needs'],
    description: '"To provide opportunities for individuals with intellectual and developmental disabilities..." -- Arc of Katy',
    image: 'assets/arc-of-katy.jpg',
    email: 'info@thearcofkaty.org',
    website: 'https://www.thearcofkaty.org/',
    funding: 'Community contributions',
    spotlight: false
  },
  {
    id: 'katy-cares',
    name: 'Katy Cares',
    tags: ['housing', 'health', 'basic-needs'],
    description: '"Where hope is at home." -- Katy Cares',
    image: 'assets/katy-cares.jpg',
    email: 'president@katycares.org',
    website: 'https://www.katycares.org/',
    funding: 'Memberships, grants',
    spotlight: false
  },
  {
    id: 'katy-heritage',
    name: 'Katy Heritage Society',
    tags: ['education', 'community'],
    description: '"To further the educational and cultural development..." -- Katy Heritage Society',
    image: 'assets/katy-heritage.png',
    email: 'katyheritagesociety@outlook.com',
    website: 'https://www.katyheritagesociety.com/',
    funding: 'Donations, grants',
    spotlight: false
  },
  {
    id: 'young-life',
    name: 'Young Life',
    tags: ['youth', 'faith-based'],
    description: '"We build relationships with young people and introduce them to Jesus..." -- Young Life',
    image: 'assets/young-life.jpg',
    email: 'ylfoundation@sc.younglife.org​',
    website: 'https://www.younglife.org/',
    funding: 'Donations, partnerships',
    spotlight: false
  },
  {
    id: 'kcm',
    name: 'Katy Christian Ministries',
    tags: ['faith-based', 'basic-needs', 'community'],
    description: '"Building relationships that strengthen our community!" -- Katy Christian Ministries',
    image: 'assets/kcm.png',
    email: 'info@ktcm.org',
    website: 'https://ktcm.org/',
    funding: 'Ticket sales, sponsorships',
    spotlight: false
  },
  {
    id: 'hat-foundation',
    name: 'HaT Foundation Inc',
    tags: ['health', 'community'],
    description: '"We believe the most effective solutions come from global resources combined with local insight." -- HaT Foundation Inc',
    image: 'assets/hat.png',
    email: 'Together@hatfoundationinc.com',
    website: 'https://hatinc.org/',
    funding: 'Grants, donations',
    spotlight: false
  },
  {
    id: 'st-paul-society',
    name: 'St. Vincent de Paul Society',
    tags: ['basic-needs', 'housing', 'community'],
    description: '"...feed, clothe, house and heal individuals and families..." -- St. Vincent de Paul Society',
    image: 'assets/SVDP-Logo.jpg',
    email: 'info@svdpusa.org',
    website: 'https://ssvpusa.org/',
    funding: 'Grants, sponsorships',
    spotlight: false
  },
  {
    id: 'katy-elks',
    name: 'Katy Elks',
    tags: ['community'],
    description: '"The Elks are one of the largest and most active fraternal organizations..." -- Katy Elks',
    image: 'assets/katy-elks.jpg',
    email: 'hallrentalkatyelks@gmail.com',
    website: 'https://www.katyelks.org/',
    funding: 'Community donations',
    spotlight: false
  },
  {
    id: 'joe-joe-bear',
    name: 'Joe Joe Bear Foundation',
    tags: ['youth', 'education'],
    description: '"Around the clock comfort is offered to children in the form of a teddy bear; educational resources and support are offered to their family to give information they need during the challenging time of caring for their sick child." -- Joe Joe Bear Foundation',
    image: 'assets/joejoebear.jpeg',
    email: 'info@joejoebear.org',
    website: 'https://www.joejoebear.org/',
    funding: 'Grants, donations',
    spotlight: false
  },
  {
    id: 'zoeys-angels',
    name: "Zoey's Angels",
    tags: ['health', 'community'],
    description: '"Zoey\'s Angels was founded to bring comfort to families who lose an infant child..." -- Zoey\'s Angels',
    image: 'assets/zoeys-angels.png',
    email: 'info@zoeysangels.org',
    website: 'http://www.zoeysangels.org/home.html',
    funding: 'Donations, sponsorships',
    spotlight: false
  },
  {
    id: 'lol',
    name: 'Lunches of Love',
    tags: ['basic-needs', 'youth', 'education'],
    description: '"...helping end childhood hunger in FORT BEND COUNTY..." -- Lunches of Love',
    image: 'assets/lol.png',
    email: 'lunchesoflove@att.net',
    website: 'https://lunchesoflove.net/',
    funding: 'Vendor fees, donations',
    spotlight: false
  },
  {
    id: 'cpc',
    name: 'Coastal Prairie Conservancy',
    tags: ['environment', 'community', 'education'],
    description: '"Save a piece of the prairie. Ensure healthy communities. Connect people with nature. Safeguard wildlife." -- Coastal Prairie Conservancy',
    image: 'assets/cpc.jpeg',
    email: 'info@coastalprairieconservancy.org',
    website: 'https://www.coastalprairieconservancy.org/',
    funding: 'Grants, donations',
    spotlight: false
  }
];

const fallbackEvents = [
  { id: 'e1', title: 'Volunteer Cleanup', date: '2026-07-18', tags: ['volunteer', 'community'], resourceId: 'katy-responds' },
  { id: 'e2', title: 'Community Service Day', date: '2026-07-22', tags: ['faith-based','volunteer'], resourceId: 'compassion-katy' },
  { id: 'e3', title: 'Donation Drive', date: '2026-07-26', tags: ['basic-needs','community'], resourceId: 'clothed-by-faith' },
  { id: 'e4', title: 'Back-to-School Supply Swap', date: '2026-07-30', tags: ['education','youth'], resourceId: 'creator-terminal' }
];
let events = Array.isArray(window.events) && window.events.length ? window.events : fallbackEvents;
window.events = events;

const $ = sel => document.querySelector(sel);
const SUBMISSIONS_KEY = 'katyhub-submissions';
const FORM_SUBMIT_EMAIL = window.KATYHUB_SUBMIT_EMAIL || '';
const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/';

function getStoredSubmissions() {
  try {
    const raw = localStorage.getItem(SUBMISSIONS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveStoredSubmission(payload) {
  try {
    const existing = getStoredSubmissions();
    existing.unshift(payload);
    localStorage.setItem(SUBMISSIONS_KEY, JSON.stringify(existing));
    return true;
  } catch {
    return false;
  }
}

function hydrateSubmittedResources() {
  const stored = getStoredSubmissions();
  if (!stored.length) return;

  stored.forEach(submission => {
    const exists = resources.some(resource => resource.id === submission.id || resource.name === submission.name);
    if (exists) return;

    const tags = Array.isArray(submission.tags)
      ? submission.tags
      : (submission.tags || '').split(',').map(tag => tag.trim()).filter(Boolean);

    resources.unshift({
      id: submission.id,
      name: submission.name,
      tags,
      description: submission.description || 'Community-submitted resource pending review.',
      image: 'assets/default-resource.jpg',
      email: submission.email || 'contact@pending.local',
      website: '#',
      funding: 'Pending review',
      spotlight: false,
      mission: 'Pending review',
      services: ['Pending review'],
      audience: ['Community'],
      address: 'Katy, TX',
      phone: 'N/A',
      hours: 'Pending review',
      languages: ['English'],
      submitted: true
    });
  });
}

async function sendSubmissionEmail(submission) {
  if (!FORM_SUBMIT_EMAIL) {
    return { ok: false, reason: 'missing-email-config' };
  }

  try {
    const response = await fetch(`${FORM_SUBMIT_ENDPOINT}${encodeURIComponent(FORM_SUBMIT_EMAIL)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: submission.name,
        email: submission.email,
        tags: submission.tags.join(', '),
        message: submission.description,
        _subject: `New community resource: ${submission.name}`
      })
    });

    if (!response.ok) {
      return { ok: false, reason: 'request-failed' };
    }

    return { ok: true, reason: 'sent' };
  } catch {
    return { ok: false, reason: 'network-error' };
  }
}

function getCurrentEvents() {
  const source = Array.isArray(window.events) ? window.events : events;
  return Array.isArray(source) ? source : [];
}

function loadEventFeed() {
  return fetch('events.json', { cache: 'no-store' })
    .then(response => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    })
    .then(data => {
      const eventList = Array.isArray(data.events) ? data.events : [];
      const nonprofitList = Array.isArray(data.nonprofits) ? data.nonprofits : [];
      const curatedEvents = Array.isArray(window.realEvents) ? window.realEvents : [];
      const mergedEvents = [...curatedEvents, ...eventList].filter((event, index, array) => {
        const firstIndex = array.findIndex(candidate => candidate.id === event.id || (candidate.title === event.title && candidate.date === event.date));
        return firstIndex === index;
      });
      if (mergedEvents.length) {
        events = mergedEvents;
        window.events = mergedEvents;
        window.eventNetwork = { nonprofits: nonprofitList, generatedAt: data.generatedAt || null };
      }
      return data;
    })
    .catch(() => {
      if (Array.isArray(window.realEvents) && window.realEvents.length) {
        events = window.realEvents;
        window.events = window.realEvents;
      }
      window.eventNetwork = { nonprofits: [], generatedAt: null };
      return { events: getCurrentEvents(), nonprofits: [] };
    });
}

function renderSyncStatus() {
  const container = $('#syncStatus');
  if (!container) return;
  const network = Array.isArray(window.eventNetwork?.nonprofits) ? window.eventNetwork.nonprofits : [];
  container.innerHTML = '';
  if (!network.length) {
    const fallback = document.createElement('div');
    fallback.className = 'sync-status-card';
    fallback.innerHTML = '<strong>Manual sync mode</strong><p>Fallback events are active until a live feed is available.</p>';
    container.appendChild(fallback);
    return;
  }
  network.forEach(nonprofit => {
    const card = document.createElement('div');
    card.className = 'sync-status-card';
    const label = document.createElement('strong');
    label.textContent = nonprofit.name;
    const badge = document.createElement('span');
    badge.className = `sync-badge sync-badge--${nonprofit.status || 'manual'}`;
    badge.textContent = nonprofit.status === 'synced' ? 'Synced' : (nonprofit.status === 'needs-review' ? 'Needs review' : 'Manual');
    const source = document.createElement('p');
    source.textContent = `Source: ${nonprofit.syncType || 'manual'} • ${nonprofit.calendarSource || 'submitted manually'}`;
    const updated = document.createElement('small');
    updated.textContent = nonprofit.lastUpdated ? `Last updated ${new Date(nonprofit.lastUpdated).toLocaleString()}` : 'Last updated unknown';
    card.appendChild(label);
    card.appendChild(badge);
    card.appendChild(source);
    card.appendChild(updated);
    container.appendChild(card);
  });
}
const $$ = sel => Array.from(document.querySelectorAll(sel));

function createResourceCard(r) {
  const card = document.createElement('article');
  card.className = 'resource-card';
  card.dataset.tags = r.tags.join(' ');

  const img = document.createElement('div');
  img.className = 'card-image';
  img.style.backgroundImage = `url('${r.image}')`;

  const content = document.createElement('div');
  content.className = 'card-content';

  const top = document.createElement('div');
  top.className = 'resource-card__top';
  const badge = document.createElement('span');
  badge.className = 'resource-card__badge';
  badge.textContent = r.tags[0] || 'community';
  const logo = document.createElement('div');
  logo.className = 'resource-card__logo';
  logo.textContent = r.name.charAt(0);
  top.appendChild(badge);
  top.appendChild(logo);

  const heading = document.createElement('h3');
  heading.textContent = r.name;
  const desc = document.createElement('p');
  desc.textContent = r.description;

  const meta = document.createElement('div');
  meta.className = 'resource-card__meta';
  const audience = document.createElement('span');
  audience.textContent = (r.audience && r.audience[0]) ? `${r.audience[0]}` : 'Community support';
  const next = document.createElement('span');
  next.textContent = 'Verified';
  meta.appendChild(audience);
  meta.appendChild(next);

  const badges = document.createElement('div');
  badges.className = 'tag-badges';
  r.tags.forEach(t => {
    const b = document.createElement('span');
    b.className = `tag-badge tag-badge--${t}`;
    b.textContent = t;
    badges.appendChild(b);
  });

  const footer = document.createElement('div');
  footer.className = 'resource-card__footer';
  const actions = document.createElement('div');
  actions.className = 'resource-card__actions';
  const learn = document.createElement('a');
  learn.href = `resource.html?id=${encodeURIComponent(r.id)}`;
  learn.textContent = 'Learn more';
  const site = document.createElement('a');
  site.href = r.website;
  site.target = '_blank';
  site.rel = 'noreferrer';
  site.textContent = 'Website';
  actions.appendChild(learn);
  actions.appendChild(site);
  footer.appendChild(actions);

  content.appendChild(top);
  content.appendChild(heading);
  content.appendChild(desc);
  content.appendChild(meta);
  content.appendChild(badges);
  content.appendChild(footer);

  card.appendChild(img);
  card.appendChild(content);

  const gleam = document.createElement('span');
  gleam.className = 'gleam';
  card.appendChild(gleam);

  return card;
}

function renderSpotlights(q = '', filterTags = null) {
  const grid = $('#spotlightGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const query = (q || '').trim().toLowerCase();
  const activeTags = Array.isArray(filterTags) ? filterTags : (filterTags ? [filterTags] : []);
  const list = resources.filter(r => {
    if (!r.spotlight) return false;
    if (activeTags.length && !activeTags.every(t => r.tags.includes(t))) return false;
    if (!query) return true;
    const hay = (r.name + ' ' + r.description + ' ' + r.tags.join(' ')).toLowerCase();
    return hay.includes(query);
  });
  if (list.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'No featured resources match your search or selected filter.';
    grid.appendChild(msg);
    return;
  }
  list.forEach(r => grid.appendChild(createResourceCard(r)));
}

function renderDirectory(filterTag, opts = {}, q = '') {
  const grid = $('#directoryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const query = (q || '').trim().toLowerCase();
  const activeTags = Array.isArray(filterTag) ? filterTag : (filterTag ? [filterTag] : []);
  let list = resources.filter(r => {
    if (activeTags.length && !activeTags.every(t => r.tags.includes(t))) return false;
    if (!query) return true;
    const hay = (r.name + ' ' + r.description + ' ' + r.tags.join(' ')).toLowerCase();
    return hay.includes(query);
  });
  if (opts.limit) list = list.slice(0, opts.limit);
  if (list.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'No resources match your search or selected filter.';
    grid.appendChild(msg);
    return;
  }
  list.forEach(r => grid.appendChild(createResourceCard(r)));
  if (opts.limit && resources.length > opts.limit) {
    const more = document.createElement('div');
    more.style.display = 'flex';
    more.style.justifyContent = 'center';
    more.style.marginTop = '1rem';
    more.innerHTML = `<a class="chip" href="directory.html">View all resources</a>`;
    grid.parentElement.appendChild(more);
  }
}

function renderFullDirectory(filterTag) {
  const args = Array.from(arguments);
  const q = args[1] || '';
  const grid = $('#directoryFull');
  if (!grid) return;
  grid.innerHTML = '';
  const query = (q || '').trim().toLowerCase();
  const activeTags = Array.isArray(filterTag) ? filterTag : (filterTag ? [filterTag] : []);
  const list = resources.filter(r => {
    if (activeTags.length && !activeTags.every(t => r.tags.includes(t))) return false;
    if (!query) return true;
    const hay = (r.name + ' ' + r.description + ' ' + r.tags.join(' ')).toLowerCase();
    return hay.includes(query);
  });
  if (list.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'No resources match your search or selected filter.';
    grid.appendChild(msg);
    return;
  }
  list.forEach(r => grid.appendChild(createResourceCard(r)));
}

function renderTagFilters() {
  const container = $('#tagFilters');
  if (!container) return;
  const tags = Array.from(new Set(resources.flatMap(r => r.tags))).sort();
  container.innerHTML = '';
  const clear = document.createElement('button');
  clear.className = 'tag-clear';
  clear.textContent = 'Clear filters';
  clear.addEventListener('click', () => {
    container.querySelectorAll('.tag').forEach(x => x.classList.remove('active'));
    const qinput = $('#globalSearch');
    const q = qinput ? qinput.value.trim() : '';
    if ($('#directoryFull')) renderFullDirectory([], q);
    else renderDirectory([], { limit: 6 }, q);
    if (location.pathname.includes('results.html')) {
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      history.replaceState(null, '', 'results.html' + (params.toString() ? ('?' + params.toString()) : ''));
    }
  });
  container.appendChild(clear);
  tags.forEach(t => {
    const btn = document.createElement('button');
    btn.className = 'tag';
    btn.textContent = t;
    btn.dataset.tag = t;
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      const activeBtns = container.querySelectorAll('.tag.active');
      const activeTags = Array.from(activeBtns).map(b => b.dataset.tag);
      const qinput = $('#globalSearch');
      const q = qinput ? qinput.value.trim() : '';
      if ($('#directoryFull')) renderFullDirectory(activeTags, q);
      else renderDirectory(activeTags, { limit: 6 }, q);
      if (location.pathname.includes('results.html')) {
        const params = new URLSearchParams();
        if (q) params.set('q', q);
        if (activeTags.length) params.set('tags', activeTags.join(','));
        history.replaceState(null, '', 'results.html' + (params.toString() ? ('?' + params.toString()) : ''));
      }
    });
    container.appendChild(btn);
  });
}

function renderCalendar() {
  const currentEvents = getCurrentEvents();
  const container = $('#calendarGrid');
  const filters = $('#calendarFilters');
  const upcoming = $('#upcomingEvents');
  if (!container || !filters) return;
  container.innerHTML = '';
  filters.innerHTML = '';
  if (upcoming) upcoming.innerHTML = '';
  const tagColors = {};
  const palette = ['#ff7a7a','#7acbff','#ffd27a','#9bff7a','#c27aff','#ff9bc2'];
  const allTags = Array.from(new Set([...currentEvents.flatMap(e => e.tags), ...resources.flatMap(r => r.tags)]));
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

  function renderMonth(filteredEvents = currentEvents) {
    monthLabel.textContent = current.toLocaleString(undefined,{month:'long',year:'numeric'});
    grid.innerHTML='';
    const weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    weekdays.forEach(d=>{ const h=document.createElement('div'); h.textContent=d; h.style.fontWeight='600'; grid.appendChild(h); });

    const first = new Date(current.getFullYear(), current.getMonth(),1);
    const start = first.getDay();
    const days = new Date(current.getFullYear(), current.getMonth()+1,0).getDate();
    for(let i=0;i<start;i++){ const cell=document.createElement('div'); cell.className='calendar-cell empty'; grid.appendChild(cell); }
    for(let d=1; d<=days; d++){
      const cell = document.createElement('div'); cell.className='calendar-cell';
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
        const item = document.createElement('div'); item.className='event-item';
        const dot = document.createElement('span'); dot.className='event-dot'; dot.style.background = tagColors[ev.tags[0]] || '#666';
        const title = document.createElement('span'); title.textContent = ev.title.length > 22 ? `${ev.title.slice(0, 22)}…` : ev.title;
        item.appendChild(dot);
        item.appendChild(title);
        const tone = toneEventColor(ev);
        Object.assign(item.style, tone);
        item.title = `${ev.title}${ev.resourceId ? ' — opens resource' : ''}`;
        item.addEventListener('click', ()=>{ if(ev.resourceId) window.location=`resource.html?id=${encodeURIComponent(ev.resourceId)}`; });
        eventsContainer.appendChild(item);
      });
      if (dayEvents.length > visibleEvents.length) {
        const more = document.createElement('button'); more.type='button'; more.className='calendar-more'; more.textContent=`+${dayEvents.length - visibleEvents.length} More`;
        more.title = dayEvents.slice(visibleEvents.length).map(ev => ev.title).join('\n');
        more.addEventListener('click', (event) => { event.stopPropagation(); });
        eventsContainer.appendChild(more);
      }
      cell.appendChild(eventsContainer);
      cell.title = dayEvents.map(ev => ev.title).join('\n');
      grid.appendChild(cell);
    }
  }

  prev.addEventListener('click', ()=>{ current = new Date(current.getFullYear(), current.getMonth()-1,1); renderMonth(getFilteredEvents()); });
  next.addEventListener('click', ()=>{ current = new Date(current.getFullYear(), current.getMonth()+1,1); renderMonth(getFilteredEvents()); });

  cal.appendChild(nav); cal.appendChild(grid); cal.appendChild(legend);
  container.appendChild(cal);
  renderMonth();
  renderUpcomingEvents();

  const filterBar = document.createElement('div'); filterBar.className='filter-chips';
  const allBtn = document.createElement('button'); allBtn.className='filter active'; allBtn.textContent='All'; allBtn.dataset.filter='all';
  filterBar.appendChild(allBtn);
  const clearBtn = document.createElement('button'); clearBtn.className='filter-clear'; clearBtn.textContent='Clear';
  clearBtn.addEventListener('click', () => {
    filterBar.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    allBtn.classList.add('active');
    renderMonth(getFilteredEvents());
    renderUpcomingEvents();
  });
  filterBar.appendChild(clearBtn);

  allBtn.addEventListener('click', ()=>{ filterBar.querySelectorAll('.filter').forEach(x=>x.classList.remove('active')); allBtn.classList.add('active'); renderMonth(getFilteredEvents()); renderUpcomingEvents(); });
  allTags.forEach(t=>{
    const b=document.createElement('button'); b.className='filter'; b.textContent=t; b.dataset.filter=t;
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
    return active.length ? currentEvents.filter(ev => active.every(t => ev.tags.includes(t))) : currentEvents;
  }

  function renderUpcomingEvents(activeTags = []) {
    if (!upcoming) return;
    const filtered = getFilteredEvents(activeTags).slice(0, 4);
    upcoming.innerHTML = '';
    const heading = document.createElement('div');
    heading.className = 'upcoming-card';
    heading.innerHTML = '<strong>Upcoming events</strong><p>See what’s happening next in the community.</p>';
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
}

function renderEventResults(q = '', filterTags = []) {
  const container = $('#eventsResults');
  if (!container) return;
  container.innerHTML = '';
  const query = (q || '').trim().toLowerCase();
  const activeTags = Array.isArray(filterTags) ? filterTags : (filterTags ? [filterTags] : []);
  const currentEvents = getCurrentEvents();

  const matched = currentEvents.filter(ev => {
    if (activeTags.length && !activeTags.every(t => ev.tags.includes(t))) return false;
    if (!query) return true;
    const hay = (ev.title + ' ' + (ev.tags||[]).join(' ')).toLowerCase();
    return hay.includes(query);
  });

  if (matched.length === 0) {
    const msg = document.createElement('div');
    msg.className = 'no-results';
    msg.textContent = 'No events match your search or selected filter.';
    container.appendChild(msg);
    return;
  }

  matched.forEach(ev => {
    const card = document.createElement('article');
    card.className = 'resource-card';
    const content = document.createElement('div');
    content.className = 'card-content';
    content.innerHTML = `<h3>${ev.title}</h3><p>${ev.date}</p>`;
    const chip = document.createElement('a');
    chip.className = 'chip';
    chip.textContent = 'View';
    if (ev.resourceId) chip.href = `resource.html?id=${encodeURIComponent(ev.resourceId)}`;
    else chip.href = '#';
    card.appendChild(content);
    card.appendChild(chip);
    container.appendChild(card);
  });
}

function renderSuggestions(q) {
  const box = $('#searchSuggestions');
  if (!box) return;
  const query = (q || '').trim().toLowerCase();
  if (!query) {
    box.innerHTML = '';
    box.classList.remove('open');
    return;
  }
  const matches = resources.filter(r => {
    const hay = `${r.name} ${r.description} ${r.tags.join(' ')}`.toLowerCase();
    return hay.includes(query);
  }).slice(0, 5);
  if (!matches.length) {
    box.innerHTML = '<div class="search-suggestion"><span>No matches yet</span><small>Try housing or food</small></div>';
    box.classList.add('open');
    return;
  }
  box.innerHTML = '';
  matches.forEach(r => {
    const item = document.createElement('div');
    item.className = 'search-suggestion';
    item.innerHTML = `<span>${r.name}</span><small>${r.tags[0] || 'resource'}</small>`;
    item.addEventListener('click', () => {
      window.location = `resource.html?id=${encodeURIComponent(r.id)}`;
    });
    box.appendChild(item);
  });
  box.classList.add('open');
}

function wireSearch() {
  const input = document.getElementById('globalSearch');
  const box = $('#searchSuggestions');
  if (!input) return;
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const q = input.value.trim();
      const activeTagBtns = document.querySelectorAll('#tagFilters .tag.active');
      const activeTags = Array.from(activeTagBtns).map(b => b.dataset.tag);
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      if (activeTags.length) params.set('tags', activeTags.join(','));
      const target = 'results.html' + (params.toString() ? ('?' + params.toString()) : '');
      window.location = target;
    }
  });

  input.addEventListener('input', () => {
    const q = input.value.trim();
    renderSuggestions(q);
    const activeTagBtns = document.querySelectorAll('#tagFilters .tag.active');
    const activeTags = Array.from(activeTagBtns).map(b => b.dataset.tag);
    if ($('#directoryFull')) renderFullDirectory(activeTags, q);
    else if ($('#directoryGrid')) renderDirectory(activeTags, { limit: 6 }, q);
    else if ($('#spotlightGrid')) renderSpotlights(q, activeTags);
    if ($('#eventsResults')) renderEventResults(q, activeTags);
  });

  document.addEventListener('click', (e) => {
    if (box && !box.contains(e.target) && e.target !== input) {
      box.classList.remove('open');
    }
  });
}

function wireForm() {
  const form = document.getElementById('resourceForm');
  const msg = document.getElementById('formMessage');
  if (!form || !msg) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const tags = String(data.tags || '')
      .split(',')
      .map(tag => tag.trim())
      .filter(Boolean);
    const submission = {
      id: `submitted-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: String(data.name || '').trim(),
      email: String(data.email || '').trim(),
      tags,
      description: String(data.description || '').trim(),
      createdAt: new Date().toISOString(),
      status: 'pending-review'
    };

    saveStoredSubmission(submission);
    resources.unshift({
      id: submission.id,
      name: submission.name,
      tags,
      description: submission.description || 'Community-submitted resource pending review.',
      image: 'assets/default-resource.jpg',
      email: submission.email,
      website: '#',
      funding: 'Pending review',
      spotlight: false,
      mission: 'Pending review',
      services: ['Pending review'],
      audience: ['Community'],
      address: 'Katy, TX',
      phone: 'N/A',
      hours: 'Pending review',
      languages: ['English'],
      submitted: true
    });

    const emailResult = await sendSubmissionEmail(submission);
    const days = Math.floor(Math.random() * 5) + 2;

    if (emailResult.ok) {
      msg.textContent = `Thanks — we received "${submission.name}". Your submission has been forwarded to the team, and we’ll reach out to ${submission.email} within ~${days} business days.`;
    } else if (emailResult.reason === 'missing-email-config') {
      msg.textContent = `Thanks — we received "${submission.name}". Your submission is saved locally for review, and you can connect a real email endpoint to send it out automatically.`;
    } else {
      msg.textContent = `Thanks — we received "${submission.name}". Your submission is stored locally, but the email delivery endpoint is currently unavailable.`;
    }

    form.reset();
  });
}

function renderResourceDetail() {
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const container = document.getElementById('resourceDetail');
  if (!id || !container) return;
  const r = resources.find(x => x.id === id);
  if (!r) { container.innerHTML = '<p>Resource not found.</p>'; return; }
  const related = resources.filter(x => x.id !== r.id && x.tags.some(tag => r.tags.includes(tag))).slice(0, 3);
  container.innerHTML = `
    <div class="resource-detail-card">
      <div class="resource-hero">
        <div class="resource-hero__image" style="background-image:url('${r.image}')"></div>
        <div class="resource-hero__overlay"></div>
        <div class="resource-hero__content">
          <div class="resource-detail__logo">${r.name.charAt(0)}</div>
          <div class="resource-detail__title">
            <h1>${r.name}</h1>
            <p>${r.description}</p>
          </div>
        </div>
      </div>
      <div class="resource-detail__grid">
        <div class="resource-panel">
          <h3>Mission</h3>
          <p>${r.mission || 'Community support rooted in care and service.'}</p>
          <div class="pill-row">
            ${r.tags.map(tag => `<span class="pill">${tag}</span>`).join('')}
          </div>
          <h3 style="margin-top:1rem">Services</h3>
          <ul class="resource-list">
            ${(r.services || ['Community support']).map(service => `<li>${service}</li>`).join('')}
          </ul>
          <h3 style="margin-top:1rem">Who they help</h3>
          <div class="pill-row">
            ${(r.audience || ['Families']).map(person => `<span class="pill">${person}</span>`).join('')}
          </div>
        </div>
        <div class="resource-panel">
          <h3>Contact</h3>
          <p><strong>Website:</strong> <a href="${r.website}" target="_blank" rel="noreferrer">Visit site</a></p>
          <p><strong>Email:</strong> <a href="mailto:${r.email}">${r.email}</a></p>
          <p><strong>Address:</strong> ${r.address || 'Katy, TX'}</p>
          <p><strong>Phone:</strong> ${r.phone || 'Available on website'}</p>
          <p><strong>Hours:</strong> ${r.hours || 'Varies'}</p>
          <p><strong>Languages:</strong> ${(r.languages || ['English']).join(', ')}</p>
          <h3 style="margin-top:1rem">Funding</h3>
          <p>${r.funding}</p>
        </div>
      </div>
      <div class="resource-panel">
        <h3>You might also like</h3>
        <div class="related-grid">
          ${related.map(item => `
            <div class="related-card">
              <h4>${item.name}</h4>
              <p>${item.description}</p>
              <a class="text-link" href="resource.html?id=${encodeURIComponent(item.id)}">View resource</a>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderQuickHelp() {
  const container = $('#helpWizardButtons');
  const results = $('#quickHelpResults');
  if (!container || !results) return;
  const options = [
    { label: 'Food', tag: 'basic-needs' },
    { label: 'Housing', tag: 'housing' },
    { label: 'Education', tag: 'education' },
    { label: 'Health', tag: 'health' },
    { label: 'Volunteer', tag: 'volunteer' },
    { label: 'Community', tag: 'community' }
  ];
  container.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'help-pill';
    btn.textContent = option.label;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.help-pill').forEach(x => x.classList.remove('active'));
      btn.classList.add('active');
      const filtered = resources.filter(r => r.tags.includes(option.tag));
      results.innerHTML = '';
      if (!filtered.length) {
        results.appendChild(Object.assign(document.createElement('div'), { className: 'no-results', textContent: 'Try a broader search to see more options.' }));
        return;
      }
      filtered.forEach(r => results.appendChild(createResourceCard(r)));
    });
    container.appendChild(btn);
  });
}

function animateStats() {
  const nodes = Array.from(document.querySelectorAll('.stat-card strong'));
  nodes.forEach(node => {
    const target = Number(node.dataset.target || 0);
    const suffix = node.dataset.suffix || '';
    let current = 0;
    const increment = Math.max(1, Math.ceil(target / 24));
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      node.textContent = `${current}${suffix}`;
    }, 40);
  });
}

function init() {
  hydrateSubmittedResources();
  loadEventFeed().then(() => {
    renderSpotlights();
    if ($('#directoryFull')) renderFullDirectory();
    else renderDirectory(null, { limit: 6 });
    renderTagFilters();
    const params = new URLSearchParams(location.search);
    const qparam = params.get('q') || '';
    const tagsParam = params.get('tags') || '';
    if (qparam && $('#globalSearch')) $('#globalSearch').value = qparam;
    if (tagsParam) {
      const tags = tagsParam.split(',').filter(Boolean);
      tags.forEach(t => {
        const b = document.querySelector(`#tagFilters .tag[data-tag="${t}"]`);
        if (b) b.classList.add('active');
      });
      if ($('#directoryFull')) renderFullDirectory(tags, qparam);
      else if ($('#directoryGrid')) renderDirectory(tags, { limit: 6 }, qparam);
      else if ($('#spotlightGrid')) renderSpotlights(qparam, tags);
      if ($('#eventsResults')) renderEventResults(qparam, tags);
    } else if (qparam) {
      if ($('#directoryFull')) renderFullDirectory([], qparam);
      else if ($('#directoryGrid')) renderDirectory([], { limit: 6 }, qparam);
      else if ($('#spotlightGrid')) renderSpotlights(qparam, []);
      if ($('#eventsResults')) renderEventResults(qparam, []);
    }
    renderCalendar();
    renderSyncStatus();
    renderQuickHelp();
    wireSearch();
    wireForm();
    renderResourceDetail();
    animateStats();
  });
}

document.addEventListener('DOMContentLoaded', init);
