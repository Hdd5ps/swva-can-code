import { UserStoryCard } from './UserStoryCard';

export function UserStoriesStudents() {
  const stories = [
    {
      story: "As a student, I want to discover fun coding activities and camps, so that I can learn new tech skills during breaks or after school.",
      acceptanceCriteria: [
        "Homepage features engaging visuals and language that appeals to students",
        "'Find a Camp' page is easy to navigate with clear age-appropriate filters",
        "Camp descriptions highlight fun activities, not just technical jargon",
        "Registration process or link to register is straightforward"
      ],
      navArea: "Home & Find a Camp"
    },
    {
      story: "As a student, I want to see what other students have created, so that I can get inspired and see what's possible.",
      acceptanceCriteria: [
        "User can browse the 'Showcase' page with projects from peers",
        "Projects include images, videos, or interactive demos where possible",
        "Each project shows the student's first name and age (with permission)",
        "Projects are tagged with skills or technologies used"
      ],
      navArea: "Showcase"
    },
    {
      story: "As a student, I want to learn about creative tech opportunities beyond camps, so that I can continue exploring my interests year-round.",
      acceptanceCriteria: [
        "User can navigate to 'SWVA Can Create' page from main navigation",
        "Page lists creative tech programs, clubs, or events (e.g., hackathons, art+tech workshops)",
        "Clear descriptions of what each opportunity involves and how to participate",
        "Contact or signup information is provided for each opportunity"
      ],
      navArea: "SWVA Can Create"
    },
    {
      story: "As a student, I want to look up coding terms I don't understand, so that I can learn at my own pace.",
      acceptanceCriteria: [
        "User can access a 'Curriculum & Resources' page with a glossary section",
        "Glossary has a search bar to quickly find terms",
        "Each term displays as a flashcard with a simple, student-friendly definition",
        "Each flashcard includes an embedded YouTube video explaining the concept visually"
      ],
      navArea: "Curriculum & Resources"
    },
    {
      story: "As a student, I want to submit my project to the showcase, so that I can share my work and feel proud of my accomplishments.",
      acceptanceCriteria: [
        "User can find a clear link or form on the 'Showcase' page to submit a project",
        "Submission form asks for project name, description, images/video, and student info (with consent)",
        "User receives confirmation their submission was received",
        "Guidelines for submission are clearly stated (file types, content appropriateness, etc.)"
      ],
      navArea: "Showcase"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">User Stories – Students</h2>
        <p className="text-[#1A237E]/70">
          Students are the primary learners. They need engaging content, inspiration from peers, 
          opportunities to explore creativity, and resources to support their learning journey.
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