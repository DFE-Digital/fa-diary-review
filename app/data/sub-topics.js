module.exports = {
  'home-life': {
    options: [
      {
        "id": "behaviour",
        "label": "Behaviour"
      },
      {
        "id": "skills",
        "label": "Life skills"
      },
      {
        "id": "family",
        "label": "Family relationships"
      }
    ],
    radios: ['theme']
  },
  'school-life': {
    options: [
      {
        "id": "work",
        "label": "School work"
      },
      {
        "id": "attendance",
        "label": "Attendance"
      },
      {
        "id": "behaviour",
        "label": "Behaviour"
      },
      {
        "id": "peer-relationships",
        "label": "Peer relationships"
      },
      {
        "id": "other",
        "label": "Other"
      }
    ],
    radios: ['theme']
  },
  'sport': {
    options: [
      {
        "id": "attendance",
        "label": "Attendance"
      },
      {
        "id": "behaviour",
        "label": "Behaviour"
      },
      {
        "id": "progress",
        "label": "Progress / Achievements"
      },
      {
        "id": "relationships",
        "label": "Peer relationships"
      },
      {
        "id": "participation",
        "label": "Enjoys taking part"
      },
      {
        "id": "other",
        "label": "Other"
      }
    ],
    radios: ['theme']
  },
  'physical-health': {
    options: [
      {
        "id": "accident",
        "label": "Accident",
        "options": []
      },
      {
        "id": "gp",
        "label": "GP visit",
        "options": []
      },
      {
        "id": "hospital",
        "label": "Hospital visit",
        "options": []
      },
      {
        "id": "dentist",
        "label": "Dentist",
        "options": []
      },
      {
        "id": "optician",
        "label": "Optician",
        "options": []
      },
      {
        "id": "hearing",
        "label": "Hearing appointment",
        "options": []
      },
      {
        "id": "other",
        "label": "Other",
        "options": []
      }
    ],
    radios: []
  },
  'emotional-health': {
    radios: ['theme']
  },
  'special-education': {
    radios: ['theme']
  },
  'other': {
    radios: ['theme']
  },
  'friends': {
    options: [
      {
        "id": "behaviour",
        "label": "Behaviour"
      },
      {
        "id": "relationships",
        "label": "Relationships"
      },
      {
        "id": "other",
        "label": "Other"
      }
    ],
    radios: ['theme']
  },
  'serious-incident': {
    radios: ['direction', 'police'],
    options: [
      {
        "id": "missing",
        "label": "Gone missing",
        "options": ['direction', 'police']
      },
      {
        "id": "violent",
        "label": "Violent behaviour",
        "options": ['direction', 'police']
      },
      {
        "id": "sexual",
        "label": "Sexual behaviour",
        "options": ['direction', 'police']
      },
      {
        "id": "drugs",
        "label": "Involved drugs",
        "options": ['direction', 'police']
      },
      {
        "id": "alcohol",
        "label": "Involved alcohol",
        "options": ['direction', 'police']
      },
      {
        "id": "gang",
        "label": "Gang activity",
        "options": ['direction', 'police']
      },
      {
        "id": "other",
        "label": "Other",
        "options": ['direction', 'police']
      }
    ]
  }
}