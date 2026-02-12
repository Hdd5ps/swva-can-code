import { ArrowRight } from 'lucide-react';

export function KeyFlows() {
  const flows = [
    {
      persona: "Parent",
      goal: "Find and register for a camp",
      steps: [
        { label: "Home", description: "Arrives at homepage, sees hero with 'Find a Camp' CTA" },
        { label: "Find a Camp", description: "Browses or uses filters (age, date, location)" },
        { label: "Camp Detail", description: "Clicks a camp card to see full details, dates, curriculum overview" },
        { label: "Register / External Link", description: "Clicks 'Register' button → redirected to registration form or external system" },
        { label: "Contact (Optional)", description: "If questions remain, navigates to Contact page to send inquiry" }
      ]
    },
    {
      persona: "Student",
      goal: "Explore creative opportunities and projects",
      steps: [
        { label: "Home", description: "Lands on homepage, intrigued by visuals and student work preview" },
        { label: "SWVA Can Create", description: "Clicks navigation → sees list of creative programs (art+tech, hackathons, clubs)" },
        { label: "Explore Opportunities", description: "Reads descriptions, watches intro videos, sees what's involved" },
        { label: "Learn How to Participate", description: "Finds signup links, contact info, or upcoming event dates" },
        { label: "Showcase (Optional)", description: "Navigates to Showcase to see peer projects for inspiration" }
      ]
    },
    {
      persona: "Educator",
      goal: "Access curriculum and use glossary with YouTube explanations",
      steps: [
        { label: "Home", description: "Arrives seeking teaching resources" },
        { label: "Curriculum & Resources", description: "Clicks navigation → lands on resource hub page" },
        { label: "Browse Curriculum", description: "Scrolls through modules, downloads PDF or accesses linked materials" },
        { label: "Search Glossary", description: "Uses search bar in glossary section to find specific term (e.g., 'variable')" },
        { label: "Open Flashcard", description: "Clicks term → flashcard expands with definition and embedded YouTube video" },
        { label: "Watch Explanation", description: "Plays video inline to understand concept; shares link with students" }
      ]
    },
    {
      persona: "Sponsor",
      goal: "Learn about sponsorship and submit inquiry",
      steps: [
        { label: "Home", description: "Arrives via search or referral, sees sponsor logo section or CTA" },
        { label: "Sponsor Page", description: "Clicks 'Become a Sponsor' or 'Sponsor' in navigation" },
        { label: "Learn Benefits/Levels", description: "Reviews sponsorship tiers, impact metrics, current sponsor testimonials" },
        { label: "Download Packet (Optional)", description: "Downloads detailed sponsorship PDF for internal review" },
        { label: "Submit Interest Form", description: "Fills out inquiry form with organization info and preferred tier" },
        { label: "Confirmation", description: "Receives confirmation message; sponsorship coordinator follows up via email" }
      ]
    },
    {
      persona: "Organizer (Non-Technical)",
      goal: "Update website content without coding",
      steps: [
        { label: "Login", description: "Accesses admin URL, logs in with credentials" },
        { label: "Admin Dashboard", description: "Sees simple dashboard with sections: Camps, Curriculum, Glossary, Showcase, Pages" },
        { label: "Edit Camp Listing", description: "Navigates to 'Camps' → clicks 'Edit' on existing camp → updates dates in form → saves" },
        { label: "Edit Curriculum & Resources", description: "Navigates to 'Curriculum' → adds new resource with title, description, file upload → publishes" },
        { label: "Add/Edit Glossary", description: "Navigates to 'Glossary' → clicks 'Add Term' → enters term, definition, YouTube URL → saves" },
        { label: "Preview & Publish", description: "Uses preview mode to see changes, then clicks 'Publish' to make live" }
      ]
    }
  ];

  return (
    <div className="max-w-6xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">Key Flows / Storyboards</h2>
        <p className="text-[#1A237E]/70">
          These flows illustrate the primary user journeys through the site. 
          Each flow is designed to be clear, efficient, and support the user's goals with minimal friction.
        </p>
      </div>

      <div className="space-y-8">
        {flows.map((flow, flowIndex) => (
          <div key={flowIndex} className="bg-white rounded-lg border border-[#1A237E]/10 p-6 shadow-sm">
            <div className="mb-4">
              <div className="inline-block px-3 py-1 bg-[#E53935] text-white rounded-full text-sm font-medium mb-2">
                {flow.persona}
              </div>
              <h3 className="text-[#1A237E]">{flow.goal}</h3>
            </div>

            <div className="space-y-4">
              {flow.steps.map((step, stepIndex) => (
                <div key={stepIndex}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00BCD4] text-white rounded-full flex items-center justify-center font-medium">
                      {stepIndex + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#1A237E]">{step.label}</h4>
                      <p className="text-[#1A237E]/70 mt-1">{step.description}</p>
                    </div>
                  </div>
                  {stepIndex < flow.steps.length - 1 && (
                    <div className="ml-4 mt-2 mb-2">
                      <ArrowRight className="w-5 h-5 text-[#00BCD4]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#00BCD4]/10 border border-[#00BCD4]/30 rounded-lg p-6">
        <h3 className="text-[#1A237E] mb-2">Design Principles for All Flows</h3>
        <ul className="space-y-2 text-[#1A237E]/80">
          <li>• <strong>Clarity:</strong> Every page has a clear purpose and obvious next steps</li>
          <li>• <strong>Minimal Clicks:</strong> Users can reach their goal in 3-5 clicks from homepage</li>
          <li>• <strong>Consistent Navigation:</strong> Main navigation is always visible and accessible</li>
          <li>• <strong>Mobile-Friendly:</strong> All flows work seamlessly on mobile devices</li>
          <li>• <strong>Feedback:</strong> Users receive confirmation after form submissions or actions</li>
        </ul>
      </div>
    </div>
  );
}