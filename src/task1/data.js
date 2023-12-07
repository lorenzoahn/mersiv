export const Experiences = [
  {
    title: "Korean Cooking",
    description: "In this cooking walkthrough, I’ve planned to speak in Korean (Hangul dialect) during certain parts to explain the history of this dish and preparation style.",
    summary: "Learn how to cook beef bulgogi.",
    language: "Korean",
    level: "Beginner - Intermediate",
    location: "Dallas, TX",
    distance: 5,
    spotsAvailable: '5',
    experienceImg: require('../../assets/elems/korean.png'),
    host: "Lorenzo",
    status: undefined,
    date: "2021-05-01",
    time: "12:00 PM",
  },
  {
    title: "Italian Language Exchange",
    description: "Practice your Italian conversational skills in this language exchange. We'll cover common phrases and cultural nuances.",
    summary: "Improve your Italian language skills through conversation.",
    language: "Italian",
    level: "Intermediate",
    location: "Rome, Italy",
    distance: 20,  // Updated to an integer
    spotsAvailable: '6',
    experienceImg: require('../../assets/elems/italy-discussion.jpg'),
    host: "Valerie",
    status: "Completed",
    date: "2021-05-15",
    time: "3:00 PM",
    completionInfo: {
      hostReview: "1. You mastered basic conversations\n2. You need to practice more informal conversations\n3. You body movement needs to be more fluid",
      hostRating: 3,
      attendees : ["Maria", "Valerie", "Tiffany"]
    }
  },
  {
    title: "Urdu Poetry Night",
    description: "Join me for an evening of Urdu poetry! Whether you're a poetry enthusiast or a beginner, come and enjoy the beauty of Urdu language and culture.",
    summary: "Experience the beauty of Urdu language and culture through poetry.",
    language: "Urdu",
    level: "All Levels",
    location: "Karachi, Pakistan",
    distance: 30,  // Updated to an integer
    spotsAvailable: '15',
    experienceImg: require('../../assets/elems/urdu-poetry.jpg'),
    host: "Itbaan",
    status: undefined,
    date: "2021-06-05",
    time: "6:00 PM"
  },
  {
    title: "Spanish Tapas Cooking Class",
    description: "Learn to prepare authentic Spanish tapas in this interactive cooking class. We'll explore the flavors and techniques of traditional Spanish cuisine.",
    summary: "Discover the art of preparing authentic Spanish tapas.",
    language: "Spanish",
    level: "Intermediate",
    location: "Madrid, Spain",
    distance: 22,  // Updated to an integer
    spotsAvailable: '8',
    experienceImg: require('../../assets/elems/spanish-tapas.jpg'),
    host: "Tiffany",
    status: undefined,
    date: "2021-06-20",
    time: "5:00 PM"
  },
  {
    title: "Mandarin Language Workshop",
    description: "Join us for a Mandarin language workshop designed for beginners. We'll cover basic phrases, pronunciation, and introduce you to Chinese culture.",
    summary: "Introduction to Mandarin language and culture for beginners.",
    language: "Chinese",
    level: "Beginner",
    location: "Shanghai, China",
    distance: 28,  // Updated to an integer
    spotsAvailable: '10',
    experienceImg: require('../../assets/elems/mandarin-class.jpg'),
    host: "James",
    status: undefined,
    date: "2021-07-10",
    time: "2:00 PM"
  },
  {
    title: "English Book Club",
    description: "Let's read and discuss English literature! Our book club will explore a variety of genres, providing a space for literary enthusiasts.",
    summary: "Engage in literary discussions and explore various genres.",
    language: "English",
    level: "Advanced",
    location: "London, UK",
    distance: 35,  // Updated to an integer
    spotsAvailable: '12',
    experienceImg: require('../../assets/elems/english-book-club.jpeg'),
    host: "Lorenzo",
    status: "Upcoming",
    date: "2021-07-25",
    time: "4:00 PM"
  },
  {
    title: "French Film Night",
    description: "Join us for an evening of French cinema! We'll watch a classic French film and discuss its cultural significance.",
    summary: "Experience classic French cinema and its cultural significance.",
    language: "French",
    level: "Intermediate",
    location: "Paris, France",
    distance: 15,  // Updated to an integer
    spotsAvailable: '10',
    experienceImg: require('../../assets/elems/french-film-night.jpg'),
    host: "Maria",
    status: undefined,
    date: "2021-08-05",
    time: "7:00 PM"
  },
  {
    title: "Spanish Guitar Jam",
    description: "Bring your guitar and join me for a casual Spanish guitar jam session. All skill levels are welcome!",
    summary: "Enjoy a casual Spanish guitar jam session with fellow enthusiasts.",
    language: "Spanish",
    level: "All Levels",
    location: "Barcelona, Spain",
    distance: 18,  // Updated to an integer
    spotsAvailable: '8',
    experienceImg: require('../../assets/elems/spanish-guitar.jpeg'),
    host: "Tiffany",
    status: undefined,
    date: "2021-08-15",
    time: "6:00 PM"
  },
  {
    title: "Chinese Calligraphy Workshop",
    description: "Learn the art of Chinese calligraphy in this hands-on workshop. All materials will be provided, and no prior experience is necessary!",
    summary: "Discover the art of Chinese calligraphy in a hands-on workshop.",
    language: "Chinese",
    level: "Beginner",
    location: "Beijing, China",
    distance: 25,  // Updated to an integer
    spotsAvailable: '12',
    experienceImg: require('../../assets/elems/chinese-calligraphy.jpg'),
    host: "James",
    status: "Completed",
    date: "2021-09-01",
    time: "3:00 PM",
    completionInfo: {
      hostReview: "1. You mastered basic conversations\n2. You need to practice more informal conversations\n3. You body movement needs to be more fluid",
      hostRating: 3,
      attendees : ["Maria", "Valerie", "Tiffany"]
    }
  },
]

export const Users = {
  "Lorenzo": {
    username: "Lorenzo Ahn",
    image: require('../../assets/elems/lorenzo.png'),
    bio: "I am in my journey to learn Korean! I have been learning for 2 years now and I am looking for people to practice with. I am a native English speaker and I can help you with your English as well!",
    friends: ["Itbaan"],
    languageKnowledge: "English & Korean",
    languageInterests: ["Korean", "Spanish"],
    location: "Dallas",
  },
  "Tiffany": {
    username: "Tiffany Lee",
    image: require('../../assets/elems/tiffany.jpeg'),
    bio: "Hi! I’m looking to expand my current knowledge of Spanish and meeting new people!",
    languageKnowledge: "English",
    languageInterests: ["Spanish"],
    location: "Barcelona",
  },
  "Itbaan": {
    username: "Itbaan Nafi",
    image: require('../../assets/elems/itbaan.jpeg'),
    bio: "I’m originally from Bangladesh and can speak Bangla, Hindi, and Urdu fluently. I’m trying to improve my Spanish and I’m excited to meet native Spanish speakers and learners.",
    friends: ["James, Valerie"],
    languageKnowledge: "Bangla, Hindi & Urdu",
    languageInterests: ["Spanish"],
    location: "Karachi",
  },
  "James": {
    username: "James landay",
    image: require('../../assets/elems/james.jpeg'),
    bio: "I am the CS 147 professor and I’m passionate about HCI. Looking to learn Chinese.",
    friends: ["Itbaan"],
    languageKnowledge: "English",
    languageInterests: ["Chinese"],
    location: "Beijing",
  },
  "Valerie": {
    username: "Valerie Hernandez",
    image: require('../../assets/elems/vale.png'),
    bio: "Hi! I’m looking to improve my Italian but also looking to start learning Hindi as I’m taking a trip to India this summer and want to know how to connect with the locals. I would also love to help you out with any of the languages I already know!",
    friends: ["Maria"],
    languageKnowledge: "English, Spanish & French",
    languageInterests: ["Hindi", "Italian"],
    location: "Paris",
  },
  "Maria": {
    username: "Maria Isabel Sanchez",
    image: require('../../assets/elems/mis.png'),
    bio: "I am originally from Dominican Republic, so I am fluent in Spanish. I am trying to learn French, now and I’m excited to connect with French speakers and learners.",
    friends: ["Itbaan, Valerie"],
    languageKnowledge: "English & Spanish",
    languageInterests: ["French", "Chinese"],
    location: "London",
  }
};