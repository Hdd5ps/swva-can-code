import { UserStoryCard } from './UserStoryCard';

export function UserStoriesEducators() {
  const stories = [
    {
      story: "As an educator, I want to access curriculum resources and lesson plans, so that I can integrate coding activities into my classroom or recommend them to students.",
      acceptanceCriteria: [
        "User can navigate to 'Curriculum & Resources' from main navigation",
        "Page includes downloadable or linkable curriculum modules organized by grade level or topic",
        "Each resource includes a clear description, learning objectives, and any prerequisites",
        "Resources are available in common formats (PDF, Google Docs links, etc.)"
      ],
      navArea: "Curriculum & Resources"
    },
    {
      story: "As an educator, I want to search a glossary of coding terms with video explanations, so that I can help students understand concepts or prepare my own teaching materials.",
      acceptanceCriteria: [
        "Glossary section is clearly labeled within 'Curriculum & Resources' page",
        "Search bar allows filtering by keyword or browsing alphabetically",
        "Each term opens as a flashcard with definition and embedded YouTube explanation",
        "Educators can easily share individual glossary term links with students"
      ],
      navArea: "Curriculum & Resources"
    },
    {
      story: "As an educator, I want to find camps and programs I can share with my students, so that I can encourage them to pursue coding opportunities outside the classroom.",
      acceptanceCriteria: [
        "User can access 'Find a Camp' page with filtering and search capabilities",
        "Camp details are easy to share (print-friendly or shareable link)",
        "Information includes dates, age ranges, locations, and registration links",
        "Educator can download or print a camp calendar or flyer"
      ],
      navArea: "Find a Camp"
    },
    {
      story: "As an educator, I want to learn about creative tech opportunities for my students, so that I can broaden their exposure to STEM careers and creative fields.",
      acceptanceCriteria: [
        "User can navigate to 'SWVA Can Create' page",
        "Page lists creative programs, events, and career pathways in tech",
        "Content is suitable for sharing with students and parents",
        "Links to external resources or sign-up forms are provided"
      ],
      navArea: "SWVA Can Create"
    },
    {
      story: "As an educator, I want to contact the organizers to request a school visit or partnership, so that I can bring these programs directly to my students.",
      acceptanceCriteria: [
        "Contact page includes a form with options to select inquiry type (e.g., 'School Partnership')",
        "Form collects relevant info: name, school, email, message",
        "Response time expectations are clearly stated",
        "Alternative contact methods (phone, email) are provided"
      ],
      navArea: "Contact"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">User Stories – Educators</h2>
        <p className="text-[#1A237E]/70">
          Educators seek resources to support their teaching and opportunities to enrich their students' learning. 
          They need accessible curriculum materials, easy sharing capabilities, and partnership options.
        </p>
      </div>

      <div className="space-y-6">
        {stories.map((story, index) => (
          <UserStoryCard key={index} {...story} />
        ))}
      </div>
    </div>
  );
}