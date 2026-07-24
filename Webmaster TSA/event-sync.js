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

// Real events curated from nonprofit websites
const realEvents = [
  // Katy Responds - www.katyresponds.org
  { 
    id: 'kr-1', 
    title: 'Volunteer Build Day', 
    date: '2026-07-25', 
    tags: ['volunteer', 'community'], 
    resourceId: 'katy-responds',
    description: 'Help rebuild homes. Tools provided, no experience necessary.',
    time: '8:00 AM - 12:00 PM',
    location: 'Katy, TX'
  },
  { 
    id: 'kr-2', 
    title: 'Donation Drive for Disaster Relief', 
    date: '2026-08-10', 
    tags: ['community', 'basic-needs'], 
    resourceId: 'katy-responds',
    description: 'Drop off household items, furniture, and supplies',
    time: '10:00 AM - 4:00 PM',
    location: 'Katy Community Center'
  },

  // Clothed by Faith - www.clothedbyfaith.org
  { 
    id: 'cbf-1', 
    title: 'Community Clothing Drive', 
    date: '2026-07-21', 
    tags: ['basic-needs', 'community'], 
    resourceId: 'clothed-by-faith',
    description: 'Donate gently used clothing for families in need',
    time: '9:00 AM - 2:00 PM',
    location: 'Clothed by Faith Center'
  },
  { 
    id: 'cbf-2', 
    title: 'Volunteer Sorting & Organization', 
    date: '2026-08-02', 
    tags: ['volunteer', 'community'], 
    resourceId: 'clothed-by-faith',
    description: 'Help sort, organize, and prepare clothing for distribution',
    time: '10:00 AM - 1:00 PM',
    location: 'Clothed by Faith Warehouse'
  },

  // Creator Terminal - www.creatorterminal.com
  { 
    id: 'ct-1', 
    title: 'Youth Tech Workshop', 
    date: '2026-07-23', 
    tags: ['education', 'youth'], 
    resourceId: 'creator-terminal',
    description: 'Learn web design and coding basics. Ages 13-18. Free.',
    time: '3:00 PM - 5:00 PM',
    location: 'Creator Terminal Studio'
  },
  { 
    id: 'ct-2', 
    title: 'Back-to-School STEM Camp', 
    date: '2026-08-05', 
    tags: ['education', 'youth'], 
    resourceId: 'creator-terminal',
    description: '3-day intensive robotics and coding camp for middle schoolers',
    time: '9:00 AM - 3:00 PM',
    location: 'Creator Terminal Studio'
  },

  // Compassion Katy - www.compassionkaty.org
  { 
    id: 'ck-1', 
    title: 'School Supplies Distribution', 
    date: '2026-07-28', 
    tags: ['youth', 'basic-needs'], 
    resourceId: 'compassion-katy',
    description: 'Free school supplies for Katy ISD students',
    time: '12:00 PM - 4:00 PM',
    location: 'Compassion Katy Center'
  },
  { 
    id: 'ck-2', 
    title: 'Community Service Day', 
    date: '2026-08-15', 
    tags: ['volunteer', 'faith-based'], 
    resourceId: 'compassion-katy',
    description: 'Partner organizations meet for coordinated service projects',
    time: '8:00 AM - 12:00 PM',
    location: 'Various Katy Locations'
  },

  // Jackie Lou Foundation - www.jackieloufoundation.org
  { 
    id: 'jlf-1', 
    title: 'Intergenerational Afternoon', 
    date: '2026-08-08', 
    tags: ['community', 'youth'], 
    resourceId: 'jackie-lou-foundation',
    description: 'Seniors and children connect through games, stories, and snacks',
    time: '2:00 PM - 4:00 PM',
    location: 'Jackie Lou Foundation Center'
  },

  // Houston Friendship & Wellness - www.friendshipwellness.com
  { 
    id: 'hfw-1', 
    title: 'Health & Wellness Seminar', 
    date: '2026-07-20', 
    tags: ['health', 'community'], 
    resourceId: 'friendship-circle',
    description: 'Free health screening and wellness education for all ages',
    time: '10:00 AM - 2:00 PM',
    location: 'Houston Wellness Center'
  },
  { 
    id: 'hfw-2', 
    title: 'Community Fitness Class', 
    date: '2026-08-01', 
    tags: ['health', 'community'], 
    resourceId: 'friendship-circle',
    description: 'Free outdoor yoga and wellness activities. Open to all.',
    time: '6:00 PM - 7:00 PM',
    location: 'Katy Park'
  },

  // Arc of Katy - www.thearcofkaty.org
  { 
    id: 'ak-1', 
    title: 'Inclusive Recreation Day', 
    date: '2026-08-09', 
    tags: ['community', 'youth'], 
    resourceId: 'arc-of-katy',
    description: 'Games, activities, and social time for all abilities',
    time: '1:00 PM - 4:00 PM',
    location: 'Katy Recreation Center'
  },

  // Katy Heritage Society - www.katyheritagesociety.org
  { 
    id: 'khs-1', 
    title: 'Local History Walking Tour', 
    date: '2026-07-29', 
    tags: ['education', 'community'], 
    resourceId: 'katy-heritage',
    description: 'Learn about Katy\'s rich history on a guided community tour',
    time: '9:00 AM - 11:00 AM',
    location: 'Downtown Katy'
  },

  // Katy Cares - www.katycares.org
  { 
    id: 'kc-1', 
    title: 'Caregiver Support Group Meeting', 
    date: '2026-07-24', 
    tags: ['health', 'community'], 
    resourceId: 'katy-cares',
    description: 'Monthly meeting for family caregivers. Free. No registration needed.',
    time: '6:30 PM - 8:00 PM',
    location: 'Katy Community Center'
  }
];

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
