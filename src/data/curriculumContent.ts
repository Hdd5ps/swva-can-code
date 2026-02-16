// Editable content for the Curriculum page.
export const curriculumContent = {
  hero: {
    title: 'Curriculum & Resources',
    subtitle:
      'Free lesson plans, teaching materials, and a searchable glossary to support educators and students on their coding journey.'
  },
  intro:
    "Whether you're a teacher looking to integrate coding into your classroom, a student exploring new concepts, or a parent supporting your child's learning, our resources are designed to make technology education accessible and engaging for everyone.",
  modulesSection: {
    title: 'Curriculum Modules',
    description: 'Downloadable lesson plans and activities organized by grade level and topic.'
  },
  modules: [
    {
      title: 'Introduction to Variables',
      grade: 'Grades 3-5',
      duration: '45 min',
      level: 'Beginner',
      includes: ['Lesson plan', 'Student handout', 'Activity guide'],
      color: '#00BCD4'
    },
    {
      title: 'Loops & Patterns',
      grade: 'Grades 4-6',
      duration: '60 min',
      level: 'Beginner',
      includes: ['Lesson plan', 'Coding challenges', 'Answer key'],
      color: '#E53935'
    },
    {
      title: 'Building Your First Game',
      grade: 'Grades 6-8',
      duration: '90 min',
      level: 'Intermediate',
      includes: ['Project guide', 'Code templates', 'Extension activities'],
      color: '#00BCD4'
    },
    {
      title: 'Web Design Basics',
      grade: 'Grades 7-9',
      duration: '60 min',
      level: 'Beginner',
      includes: ['HTML/CSS tutorial', 'Practice exercises', 'Project examples'],
      color: '#E53935'
    },
    {
      title: 'Data & Algorithms',
      grade: 'Grades 9-12',
      duration: '75 min',
      level: 'Advanced',
      includes: ['Lecture slides', 'Coding problems', 'Assessment'],
      color: '#00BCD4'
    },
    {
      title: 'Creative Coding with Art',
      grade: 'Grades 5-8',
      duration: '90 min',
      level: 'Intermediate',
      includes: ['Art project guide', 'Code library', 'Gallery examples'],
      color: '#E53935'
    }
  ],
  resourcesSection: {
    title: 'Additional Resources',
    items: [
      {
        name: 'Scratch',
        description: 'Visual programming language perfect for beginners',
        link: 'https://scratch.mit.edu',
        icon: '🎨'
      },
      {
        name: 'Code.org',
        description: 'Free coding courses and activities for all ages',
        link: 'https://code.org',
        icon: '💻'
      },
      {
        name: 'Hour of Code',
        description: 'One-hour tutorials in dozens of languages',
        link: 'https://hourofcode.com',
        icon: '⏰'
      },
      {
        name: 'Khan Academy',
        description: 'Computer programming courses from intro to advanced',
        link: 'https://khanacademy.org',
        icon: '📚'
      }
    ]
  },
  glossarySection: {
    title: 'Coding Glossary',
    description:
      'Search for coding terms and watch video explanations. Perfect for students learning at their own pace!',
    searchPlaceholder: 'Search for a term (e.g., variable, loop, function)...',
    emptyMessagePrefix: 'No terms found matching '
  },
  glossaryTerms: [
    {
      term: 'Variable',
      difficulty: 'Beginner',
      definition:
        "A variable is like a container that stores information in your code. You can put something in it (like a number or word) and use it later, or even change what's inside.",
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Loop',
      difficulty: 'Beginner',
      definition:
        'A loop is a way to repeat the same action over and over without writing the same code multiple times. It is like telling your computer, "Do this 10 times," and it does!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Function',
      difficulty: 'Beginner',
      definition:
        'A function is like a mini-program inside your program. You give it a name and tell it what to do, then you can use that name to make it run whenever you need it.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Conditional',
      difficulty: 'Beginner',
      definition:
        'A conditional (or "if statement") lets your program make decisions. It checks if something is true, and then does different things based on the answer.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Array',
      difficulty: 'Intermediate',
      definition:
        'An array is like a list that can hold multiple items in one place. Instead of creating separate variables for each thing, you can keep them all together in an array.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Algorithm',
      difficulty: 'Intermediate',
      definition:
        'An algorithm is a step-by-step set of instructions for solving a problem or completing a task. It is like a recipe for your code!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    }
  ],
  cta: {
    title: 'For Educators',
    description:
      'Need help integrating these resources into your classroom? Want to request a specific lesson plan or glossary term? We are here to help!',
    buttonLabel: 'Contact Our Team',
    buttonTo: '/contact'
  }
};
