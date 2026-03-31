// ─── src/data/team.js ───────────────────────────────────────────────── 
// To update a member: find them below and edit name / role / image.
// Image path: place photo in /public/assets/ e.g. "/assets/shriya.jpg"

export const faculty = [
  {
    id: "f1",
    name: "Dr. Boutheina Tlili",
    role: "Faculty Advisor",
    department: "Engineering",
    image: "/assets/team/faculty.jpg",
    emoji: "👩‍🏫",
  },
];

export const executive = [
  {
    id: "e1",
    name: "Shanzay Arain",
    role: "Chair",
    department: "Electrical Engineering",
    image: "/assets/team/shanzay.jpg",
    emoji: "👑",
  },
  {
    id: "e2",
    name: "TBA",
    role: "Vice-Chair",
    department: "TBA",
    image: "/assets/team/placeholder.jpg",
    emoji: "⭐",
  },
  {
    id: "e3",
    name: "Aamna Fathima",
    role: "Secretary",
    department: "CIT",
    image: "/assets/team/aamna.jpg",
    emoji: "📋",
  },
  {
    id: "e4",
    name: "Ishvaraya",
    role: "Treasurer",
    department: "Finance",
    image: "/assets/team/placeholder.jpg",
    emoji: "💰",
  },
];

export const eventsTeam = [
  {
    id: "ev1",
    name: "Racha Houbabi",
    role: "Events Coordinator",
    department: "Finance",
    image: "/assets/team/racha.jpg",
    emoji: "🎉",
  },
  {
    id: "ev2",
    name: "Hafsa Mehreen",
    role: "Events Coordinator",
    department: "Cybersecurity",
    image: "/assets/team/hafsa.jpg",
    emoji: "🛡️",
  },
  {
    id: "ev3",
    name: "Tanazzah Shaikh",
    role: "Events Coordinator",
    department: "TBA",
    image: "/assets/team/placeholder.jpg",
    emoji: "🎯",
  },
];

export const mediaTeam = [
  {
    id: "m1",
    name: "Fazilah Syed",
    role: "Media Director",
    department: "TBA",
    image: "/assets/team/placeholder.jpg",
    emoji: "🎬",
  },
  {
    id: "m2",
    name: "Mahi Satle",
    role: "Media Coordinator",
    department: "CIT",
    image: "/assets/team/mahi.jpg",
    emoji: "✏️",
  },
];

export const webTeam = [
  {
    id: "w1",
    name: "Zhanar Suleimenova",
    role: "Web Manager",
    department: "Electrical Engineering",
    image: "/assets/team/placeholder.jpg",
    emoji: "💻",
  },
  {
    id: "w2",
    name: "Garima Singh",
    role: "Web Manager",
    department: "CIT",
    image: "/assets/team/placeholder.jpg",
    emoji: "🌐",
  },
];

// Combined for easy "meet the team" display
export const allTeam = [...faculty, ...executive, ...eventsTeam, ...mediaTeam, ...webTeam];