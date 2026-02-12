export function Overview() {
  return (
    <div className="max-w-4xl">
      <h2 className="text-[#1A237E] mb-6">Project Overview</h2>
      
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Context</h3>
        <ul className="space-y-2 text-[#1A237E]/80">
          <li>• Site promotes K–12 coding camps and creative tech experiences in Southwest Virginia</li>
          <li>• Logos, colors, and brand assets already exist (no new branding needed)</li>
          <li>• Must be easy to edit by non-technical staff without coding</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Main Navigation</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Home</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">About</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Find a Camp</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Showcase</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">SWVA Can Create</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Curriculum & Resources</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Contact</div>
          <div className="px-3 py-2 bg-[#F5F3EE] rounded border border-[#00BCD4]/20">Sponsor</div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Primary Goals</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">For Parents, Students & Educators:</h4>
            <ul className="space-y-1 text-[#1A237E]/80 ml-4">
              <li>• Discover and register for local coding camps</li>
              <li>• Understand what SWVA Can Code is and why it matters</li>
              <li>• View student projects and success stories</li>
              <li>• Explore creative opportunities via "SWVA Can Create"</li>
              <li>• Access curriculum and educational resources</li>
              <li>• Use a searchable glossary with flashcard-style terms and embedded YouTube videos</li>
              <li>• Contact organizers and learn how to sponsor</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">For Organizers & Staff:</h4>
            <ul className="space-y-1 text-[#1A237E]/80 ml-4">
              <li>• Add/edit/remove camp info and dates</li>
              <li>• Update curriculum/resources and glossary entries (including YouTube links)</li>
              <li>• Add new projects to the showcase</li>
              <li>• Manage all content without touching code</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#00BCD4]/10 border border-[#00BCD4]/30 rounded-lg p-6">
        <h3 className="text-[#1A237E] mb-2">How to Use This Document</h3>
        <p className="text-[#1A237E]/80">
          Use the sidebar navigation to explore user stories organized by user type, 
          view detailed user flows and storyboards, and see the proposed content structure 
          for the Curriculum & Resources page with its searchable glossary feature.
        </p>
      </div>
    </div>
  );
}