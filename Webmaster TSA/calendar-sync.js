// Calendar export and sync functionality

function generateICalendar(eventsList = []) {
  const now = new Date();
  const nowStr = now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  
  let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Katy Community Hub//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Katy Community Events
X-WR-TIMEZONE:America/Chicago
X-WR-CALDESC:Community events and volunteer opportunities in Katy, TX
BEGIN:VTIMEZONE
TZID:America/Chicago
BEGIN:STANDARD
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
TZNAME:CST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
BEGIN:DAYLIGHT
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
TZNAME:CDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
END:VTIMEZONE
`;

  eventsList.forEach(event => {
    const eventDate = new Date(event.date);
    const dateStr = eventDate.toISOString().replace(/[-:]/g, '').split('T')[0];
    const uid = `${event.id}@katycommunity.local`;
    
    ical += `BEGIN:VEVENT
UID:${uid}
DTSTAMP:${nowStr}
DTSTART;VALUE=DATE:${dateStr}
DTEND;VALUE=DATE:${dateStr}
SUMMARY:${escapeICalText(event.title)}
DESCRIPTION:${escapeICalText(event.description || 'Community event in Katy, TX')}
LOCATION:Katy, TX
CATEGORIES:${event.tags.join(',')}
STATUS:CONFIRMED
END:VEVENT
`;
  });

  ical += `END:VCALENDAR`;
  return ical;
}

function escapeICalText(text) {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

function downloadCalendar(eventsList = []) {
  const ical = generateICalendar(eventsList);
  const blob = new Blob([ical], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  const date = new Date().toISOString().split('T')[0];
  link.href = URL.createObjectURL(blob);
  link.download = `katy-community-events-${date}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}

function addCalendarExportButton(container) {
  if (!container) return;
  const btn = document.createElement('button');
  btn.className = 'calendar-export-btn';
  btn.innerHTML = '📅 Export to calendar';
  btn.addEventListener('click', () => {
    downloadCalendar(events);
    btn.textContent = '✓ Downloaded!';
    setTimeout(() => {
      btn.innerHTML = '📅 Export to calendar';
    }, 2000);
  });
  container.appendChild(btn);
}

// Add Google Calendar link generator
function generateGoogleCalendarLink(event) {
  const title = encodeURIComponent(event.title);
  const startDate = event.date.replace(/-/g, '');
  const endDate = new Date(new Date(event.date).getTime() + 86400000).toISOString().split('T')[0].replace(/-/g, '');
  const details = encodeURIComponent(`Community event in Katy, TX. ${event.description || ''}`);
  const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=Katy,TX`;
  return url;
}

function addGoogleCalendarButtons(container, eventsList = []) {
  if (!container || eventsList.length === 0) return;
  const wrapper = document.createElement('div');
  wrapper.style.marginTop = '1rem';
  
  eventsList.slice(0, 3).forEach(event => {
    const btn = document.createElement('a');
    btn.href = generateGoogleCalendarLink(event);
    btn.target = '_blank';
    btn.className = 'pill';
    btn.style.display = 'inline-flex';
    btn.style.marginRight = '0.5rem';
    btn.style.marginBottom = '0.5rem';
    btn.textContent = `+ ${event.title}`;
    wrapper.appendChild(btn);
  });
  
  container.appendChild(wrapper);
}
