import { UserStoryCard } from './UserStoryCard';

export function UserStoriesParents() {
  const stories = [
    {
      story: "As a parent, I want to quickly find coding camps near me that fit my child's age and schedule, so that I can enroll them in a quality learning experience without extensive research.",
      acceptanceCriteria: [
        "User can access a 'Find a Camp' page from the main navigation",
        "User can filter camps by age group, date range, and location",
        "Search results display camp name, dates, age range, location, and brief description",
        "Each camp card has a clear 'Learn More' or 'Register' call-to-action"
      ],
      navArea: "Find a Camp"
    },
    {
      story: "As a parent, I want to understand what SWVA Can Code offers and its benefits, so that I feel confident this program is right for my child.",
      acceptanceCriteria: [
        "User can navigate to an 'About' page that explains the mission and benefits",
        "Page includes clear sections: what we do, why it matters, who we serve",
        "Testimonials or success metrics are visible to build trust",
        "Content is written in parent-friendly, non-technical language"
      ],
      navArea: "Home & About"
    },
    {
      story: "As a parent, I want to see examples of what students have created, so that I can visualize what my child might learn and build.",
      acceptanceCriteria: [
        "User can navigate to a 'Showcase' page from main navigation",
        "Page displays student projects with images/videos, descriptions, and student names/ages (if permitted)",
        "Projects are organized in an easy-to-browse grid or gallery layout",
        "Each project includes what skills or concepts were learned"
      ],
      navArea: "Showcase"
    },
    {
      story: "As a parent, I want to contact the organizers with questions about camps or special accommodations, so that I can get personalized information.",
      acceptanceCriteria: [
        "User can access a 'Contact' page from main navigation",
        "Page includes a contact form (name, email, phone optional, message)",
        "Alternative contact methods are provided (email address, phone number)",
        "User receives confirmation that their message was sent"
      ],
      navArea: "Contact"
    },
    {
      story: "As a parent, I want to learn about sponsorship opportunities, so that I can support the program or connect my employer with it.",
      acceptanceCriteria: [
        "User can navigate to a 'Sponsor' page from main navigation",
        "Page explains sponsorship levels, benefits, and how funds are used",
        "Clear call-to-action to submit sponsorship inquiry or download sponsorship packet",
        "Contact information for sponsorship coordinator is provided"
      ],
      navArea: "Sponsor"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">User Stories – Parents</h2>
        <p className="text-[#1A237E]/70">
          Parents are looking for quality educational opportunities for their children. 
          They need clear information about camps, confidence in the program, and easy ways to register and get support.
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