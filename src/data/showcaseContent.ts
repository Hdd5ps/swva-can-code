// Editable content for the Showcase page.
export const showcaseContent = {
  hero: {
    title: 'Student Showcase',
    subtitle: 'Celebrate the amazing projects created by our students. These young coders are building the future!'
  },
  filterTags: ['All Projects', 'Games', 'Websites', 'Apps', 'Art & Animation'],
  projects: [
    {
      id: 1,
      title: 'Jungle Adventure Game',
      student: 'Sarah M.',
      age: 12,
      description: 'A platformer game where you help a monkey collect bananas while avoiding obstacles.',
      skills: ['Scratch', 'Game Design', 'Animation'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      student: 'Michael L.',
      age: 15,
      description: 'Interactive web app that displays current weather and 5-day forecast for any city.',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
    },
    {
      id: 3,
      title: 'Drawing Canvas App',
      student: 'Emma R.',
      age: 10,
      description: 'Digital art tool with color picker, brush sizes, and save functionality.',
      skills: ['JavaScript', 'HTML Canvas', 'UI Design'],
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80'
    },
    {
      id: 4,
      title: 'Quiz Master',
      student: 'Jason T.',
      age: 13,
      description: 'Multiple choice quiz game with score tracking and different difficulty levels.',
      skills: ['Python', 'Logic', 'Data Structures'],
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80'
    },
    {
      id: 5,
      title: 'Virtual Pet Simulator',
      student: 'Lily K.',
      age: 11,
      description: 'Take care of a virtual pet by feeding, playing, and keeping it happy!',
      skills: ['Scratch', 'Variables', 'User Input'],
      image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&q=80'
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      student: 'David P.',
      age: 16,
      description: 'Responsive portfolio showcasing projects, skills, and contact information.',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
    }
  ],
  gallery: {
    title: 'Student Showcase Gallery',
    description: 'Photos from camps, showcases, and project demos are curated by the SWVA Can Code team.',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80',
        alt: 'Students collaborating on laptops during camp'
      },
      {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1200&q=80',
        alt: 'Coding workshop with mentors and students'
      },
      {
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80',
        alt: 'Student presenting a project at showcase'
      },
      {
        src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
        alt: 'Close-up of hands typing code'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
        alt: 'Group brainstorming with sticky notes'
      },
      {
        src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
        alt: 'Camp session with students raising hands'
      }
    ]
  },
  submitCta: {
    title: 'Built Something Amazing?',
    description: "Share your project with the community! We'd love to feature your work in our showcase.",
    buttonLabel: 'Submit Your Project'
  },
  stats: [
    { value: '200+', label: 'Projects Created', colorClass: 'text-[#00BCD4]' },
    { value: '15+', label: 'Programming Languages', colorClass: 'text-[#E53935]' },
    { value: '30+', label: 'Awards Won', colorClass: 'text-[#00BCD4]' }
  ]
};
