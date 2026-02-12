import { UserStoryCard } from './UserStoryCard';

export function UserStoriesSponsors() {
  const stories = [
    {
      story: "As a potential sponsor, I want to learn about sponsorship levels and benefits, so that I can decide if supporting this program aligns with my company's values and budget.",
      acceptanceCriteria: [
        "User can navigate to a 'Sponsor' page from main navigation",
        "Page clearly outlines 3-5 sponsorship tiers with costs and benefits for each",
        "Benefits include both tangible (logo placement, event tickets) and intangible (community impact)",
        "Page includes testimonials or case studies from current sponsors"
      ],
      navArea: "Sponsor"
    },
    {
      story: "As a potential sponsor, I want to see the impact of the program, so that I understand how my contribution will make a difference.",
      acceptanceCriteria: [
        "Sponsor page includes impact metrics (e.g., '500+ students served annually')",
        "Success stories or student testimonials are featured",
        "Visual content (photos, videos) shows students engaged in learning",
        "Information explains how sponsor funds are used (e.g., scholarships, equipment)"
      ],
      navArea: "Sponsor & About"
    },
    {
      story: "As a potential sponsor, I want to easily submit a sponsorship inquiry or request more information, so that I can start a conversation without unnecessary barriers.",
      acceptanceCriteria: [
        "Sponsor page includes a clear 'Become a Sponsor' call-to-action button",
        "Form collects: organization name, contact person, email, phone, sponsorship level interest, message",
        "User can optionally download a detailed sponsorship packet (PDF)",
        "Contact information for sponsorship coordinator is prominently displayed"
      ],
      navArea: "Sponsor"
    },
    {
      story: "As a current sponsor, I want to see how my sponsorship is being used and promoted, so that I feel valued and informed about the partnership.",
      acceptanceCriteria: [
        "Sponsor page includes a section recognizing current sponsors with logos",
        "Sponsors are categorized by level/tier",
        "Website includes sponsor logo placement as outlined in sponsorship agreements",
        "Contact page allows sponsors to reach out with questions or updates"
      ],
      navArea: "Sponsor & Home"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">User Stories – Sponsors</h2>
        <p className="text-[#1A237E]/70">
          Sponsors are looking to support education and build community goodwill. 
          They need clear information about investment levels, measurable impact, and recognition opportunities.
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