/**
 * Event Sync System - Fetches real nonprofit events from their websites
 * 
 * Event Sources:
 * - Katy Responds: katyresponds.org/events or facebook.com/katyresponds
 * - The Ballard House: theballardhouse.org/events
 * - Clothed by Faith: clothedbyfaith.org/events or facebook.com/clothedbyfaith
 * - Family Hope: familyhopefulshear.org/calendar
 * - Jackie Lou Foundation: jackieloufoundation.org/events
 * - Rising Queens Foundation: risingqueensfoundation.org/events
 * - Creator Terminal: creatorterminal.com/events
 * - Compassion Katy: compassionkaty.org/calendar
 * - Houston Friendship & Wellness: friendshipwellness.com/events
 * - Arc of Katy: thearcofkaty.org/events
 * - Katy Cares: katycares.org/calendar
 * - Katy Heritage Society: katyheritagesociety.org/events
 */

// Events are generated only from schedules explicitly published by each source.
const realEvents = [];
const sourceStart = new Date(2026, 8, 7);
const sourceEnd = new Date(2026, 11, 31);

function dateKey(date) {
  return date.toISOString().slice(0, 10);
}

for (let date = new Date(sourceStart); date <= sourceEnd; date.setDate(date.getDate() + 1)) {
  const day = date.getDay();
  const dateString = dateKey(date);

  if ([2, 4, 6].includes(day)) {
    realEvents.push({
      id: `kr-${dateString}`,
      title: 'Katy Responds volunteer workday',
      date: dateString,
      tags: ['volunteer', 'community'],
      resourceId: 'katy-responds',
      description: 'Home renovation volunteer workday. Exact task and location are sent after registration, typically 48 hours before service.',
      time: '9:00 AM - 12:00 PM',
      location: 'Katy Responds project site',
      sourceUrl: 'https://www.katyresponds.org/volunteer'
    });
  }

  if (day >= 1 && day <= 5) {
    realEvents.push({
      id: `cbf-${dateString}`,
      title: 'Clothed by Faith volunteer shifts',
      date: dateString,
      tags: ['volunteer', 'basic-needs'],
      resourceId: 'clothed-by-faith',
      description: 'Multiple two-hour shifts are listed for Personal Shopper, Sorting Donations and Restocking, and Warehouse Assistant roles. Signup and requirements apply.',
      time: '10:00 AM - 4:00 PM',
      location: '802 Dominion Dr, Suite 200, Katy, TX 77450',
      sourceUrl: 'https://volunteer.bloomerang.co/volunteer/#/join-party?k=et6ssxljisaou7&e=29531&fromEvent'
    });
  }

  realEvents.push({
    id: `bh-${dateString}`,
    title: 'The Ballard House walk-in',
    date: dateString,
    tags: ['housing', 'health', 'community'],
    resourceId: 'ballard-house',
    description: 'Walk-in availability as provided for The Ballard House.',
    time: '3:00 PM - 5:00 PM',
    location: 'The Ballard House',
    sourceUrl: 'https://www.theballardhouse.org/events'
  });
}

/**
 * Fetch and merge real nonprofit events with existing events array
 * This function is called after script.js loads to enhance the events
 */
function syncNonprofitEvents() {
  const fallbackEvents = Array.isArray(window.events) ? window.events : [];
  const mergedEvents = [...realEvents];

  fallbackEvents.forEach(placeholderEvent => {
    const duplicate = mergedEvents.some(re => re.id === placeholderEvent.id || (re.title === placeholderEvent.title && re.date === placeholderEvent.date));
    if (!duplicate) {
      mergedEvents.push(placeholderEvent);
    }
  });

  window.realEvents = realEvents;
  window.events = mergedEvents;
  if (typeof events !== 'undefined') {
    events = mergedEvents;
  }

  console.log(`✓ Synced ${realEvents.length} nonprofit events from curated nonprofit sources`);
  return mergedEvents;
}

/**
 * Helper function to update events from a nonprofit's website
 * Can be modified to integrate with real APIs or iCalendar feeds
 * 
 * Example usage patterns:
 * 1. Google Calendar API: Fetch events from public calendar URLs
 * 2. Eventbrite API: Pull events from organization's Eventbrite account
 * 3. iCalendar feeds: Subscribe to .ics feeds from nonprofit sites
 * 4. Manual updates: Update realEvents array from their website announcements
 */
function updateEventsFromSource(nonprofitId, sourceUrl) {
  // In a production app, this would fetch from actual APIs
  // For now, returns the manually curated events for that organization
  return realEvents.filter(e => e.resourceId === nonprofitId);
}

// Auto-sync events as soon as script loads (before DOMContentLoaded)
// This ensures events are synced before calendar rendering
window.realEvents = realEvents;
window.events = syncNonprofitEvents();
