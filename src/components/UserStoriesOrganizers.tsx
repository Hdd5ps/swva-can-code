import { UserStoryCard } from './UserStoryCard';

export function UserStoriesOrganizers() {
  const stories = [
    {
      story: "As a non-technical staff member, I want to add and edit camp listings without touching code, so that I can keep the website current without relying on a developer.",
      acceptanceCriteria: [
        "Staff can access a simple admin interface or content management area",
        "Interface provides forms to add new camps with fields: name, dates, age range, location, description, registration link",
        "Staff can edit existing camps and see changes reflected immediately",
        "No coding knowledge is required; all updates use form fields and WYSIWYG editors"
      ],
      navArea: "Site Management / Content Editing"
    },
    {
      story: "As an organizer, I want to add new curriculum modules and resources, so that educators and students have access to up-to-date learning materials.",
      acceptanceCriteria: [
        "Admin area includes a section for managing 'Curriculum & Resources' content",
        "Staff can upload PDFs, add links, and write descriptions for each resource",
        "Resources can be organized by category or grade level",
        "Changes are published immediately or via simple 'Publish' button"
      ],
      navArea: "Site Management / Curriculum & Resources"
    },
    {
      story: "As a non-technical staff member, I want to add and edit glossary terms with YouTube video links, so that students and educators always have current, helpful definitions and explanations.",
      acceptanceCriteria: [
        "Admin area includes a 'Glossary Manager' with list of all terms",
        "Staff can add new terms with fields: term name, definition, YouTube video URL",
        "YouTube videos are automatically embedded when URL is provided",
        "Staff can edit or delete terms without coding; interface is intuitive",
        "Search and filter capabilities in admin to quickly find terms to edit"
      ],
      navArea: "Site Management / Curriculum & Resources"
    },
    {
      story: "As an organizer, I want to add new student projects to the showcase, so that I can celebrate student achievements and keep the site fresh.",
      acceptanceCriteria: [
        "Admin area includes a 'Showcase Manager'",
        "Staff can upload project images/videos, add title, description, student name, age, skills used",
        "Projects can be tagged or categorized for easy filtering on public site",
        "Staff can approve submitted projects from students or add them manually",
        "Interface includes simple drag-and-drop for image uploads"
      ],
      navArea: "Site Management / Showcase"
    },
    {
      story: "As a non-technical staff member, I want to update text and images on static pages (Home, About, Contact), so that I can keep messaging and branding current.",
      acceptanceCriteria: [
        "Admin area provides access to edit each main page (Home, About, Contact, SWVA Can Create, Sponsor)",
        "WYSIWYG editor allows text formatting, link insertion, and image uploads",
        "Changes can be previewed before publishing",
        "No HTML or code knowledge required; interface is user-friendly"
      ],
      navArea: "Site Management / Content Editing"
    },
    {
      story: "As an organizer, I want to view and respond to contact form submissions, so that I can engage with parents, educators, and sponsors in a timely manner.",
      acceptanceCriteria: [
        "Admin area includes a 'Messages' or 'Contact Submissions' section",
        "Submissions are listed with sender name, email, date, and message preview",
        "Staff can mark messages as 'Read' or 'Responded'",
        "Optional: Email notifications when new messages are received"
      ],
      navArea: "Site Management / Contact"
    },
    {
      story: "As a non-technical staff member, I want clear instructions and tooltips within the admin interface, so that I can confidently make updates without fear of breaking the site.",
      acceptanceCriteria: [
        "Admin interface includes help icons or tooltips next to each field",
        "Simple onboarding guide or tutorial is available on first login",
        "Error messages are clear and guide staff to fix issues",
        "Preview mode allows staff to see changes before publishing"
      ],
      navArea: "Site Management / Content Editing"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">User Stories – Organizers & Non-Technical Staff</h2>
        <p className="text-[#1A237E]/70">
          Organizers and staff need to maintain the website efficiently without technical skills. 
          They require intuitive content management tools for camps, curriculum, glossary, showcase, and general pages.
        </p>
      </div>

      <div className="space-y-6">
        {stories.map((story, index) => (
          <UserStoryCard key={index} {...story} />
        ))}
      </div>

      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="text-[#1A237E] mb-2">Implementation Note</h3>
        <p className="text-[#1A237E]/80">
          To support these user stories, consider using a headless CMS (e.g., Contentful, Strapi, Sanity) 
          or a static site generator with a CMS plugin (e.g., Netlify CMS, Forestry). 
          The chosen solution should provide:
        </p>
        <ul className="mt-3 space-y-1 text-[#1A237E]/80 ml-4">
          <li>• Intuitive WYSIWYG editing for all text content</li>
          <li>• Media library for image/video uploads</li>
          <li>• Structured content types for camps, resources, glossary terms, and showcase projects</li>
          <li>• Preview before publish</li>
          <li>• Role-based access control if multiple staff members</li>
        </ul>
      </div>
    </div>
  );
}