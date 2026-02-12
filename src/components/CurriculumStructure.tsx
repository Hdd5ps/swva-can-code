export function CurriculumStructure() {
  return (
    <div className="max-w-6xl">
      <div className="mb-6">
        <h2 className="text-[#1A237E] mb-2">Curriculum & Resources Page Structure</h2>
        <p className="text-[#1A237E]/70">
          This page serves educators, students, and parents with learning materials, 
          curriculum modules, and a searchable glossary featuring flashcard-style terms 
          with embedded YouTube video explanations.
        </p>
      </div>

      {/* Page Layout Overview */}
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-8 shadow-sm">
        <h3 className="text-[#1A237E] mb-4">Page Sections Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-[#00BCD4]/20 rounded bg-[#F5F3EE]">
            <h4 className="font-medium text-[#1A237E] mb-2">1. Introduction</h4>
            <p className="text-[#1A237E]/70">Brief welcome, purpose of resources, who they're for</p>
          </div>
          <div className="p-4 border border-[#00BCD4]/20 rounded bg-[#F5F3EE]">
            <h4 className="font-medium text-[#1A237E] mb-2">2. Curriculum Modules</h4>
            <p className="text-[#1A237E]/70">Organized learning units by grade/topic with downloads</p>
          </div>
          <div className="p-4 border border-[#00BCD4]/20 rounded bg-[#F5F3EE]">
            <h4 className="font-medium text-[#1A237E] mb-2">3. Resources & Links</h4>
            <p className="text-[#1A237E]/70">Additional materials, external tools, recommended sites</p>
          </div>
          <div className="p-4 border border-[#00BCD4]/20 rounded bg-[#F5F3EE]">
            <h4 className="font-medium text-[#1A237E] mb-2">4. Glossary</h4>
            <p className="text-[#1A237E]/70">Searchable flashcard-style terms with YouTube videos</p>
          </div>
        </div>
      </div>

      {/* Section 1: Introduction */}
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Section 1: Introduction</h3>
        <div className="space-y-3 text-[#1A237E]/80">
          <p><strong>Purpose:</strong> Set context and welcome users to the resource library</p>
          <p><strong>Content Elements:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Headline: "Curriculum & Resources"</li>
            <li>• 2-3 sentences explaining what educators and students will find</li>
            <li>• Optional: Brief video or image showing resources in use</li>
          </ul>
          <p><strong>Tone:</strong> Welcoming, supportive, emphasizing accessibility for all skill levels</p>
        </div>
      </div>

      {/* Section 2: Curriculum Modules */}
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Section 2: Curriculum Modules</h3>
        <div className="space-y-3 text-[#1A237E]/80 mb-4">
          <p><strong>Purpose:</strong> Provide structured lesson plans and modules for educators</p>
          <p><strong>Layout:</strong> Grid of cards, each representing one module</p>
        </div>
        
        <div className="bg-[#F5F3EE] border border-[#00BCD4]/30 rounded p-4">
          <p className="text-sm font-medium text-[#1A237E] mb-3">Example Module Card Structure:</p>
          <div className="bg-white border border-[#1A237E]/10 rounded p-4 space-y-2">
            <h4 className="font-medium text-[#1A237E]">Introduction to Variables (Grades 3-5)</h4>
            <p className="text-[#1A237E]/70">Learn how to store and use information in code</p>
            <div className="flex gap-2 text-sm text-[#1A237E]">
              <span className="px-2 py-1 bg-[#00BCD4]/10 rounded">Beginner</span>
              <span className="px-2 py-1 bg-[#00BCD4]/10 rounded">45 min</span>
            </div>
            <p className="text-sm text-[#1A237E]/80"><strong>Includes:</strong> Lesson plan, student handout, activity guide</p>
            <button className="mt-2 px-4 py-2 bg-[#00BCD4] text-white rounded hover:bg-[#00ACC1] transition-colors">
              Download Module
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-[#1A237E]/80">
          <p><strong>Card Content Elements:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Module title with grade range</li>
            <li>• Brief description (1-2 sentences)</li>
            <li>• Tags: skill level, duration, topic area</li>
            <li>• "What's Included" list</li>
            <li>• Download button or link</li>
          </ul>
          <p><strong>Editing:</strong> Admin can add/edit modules via CMS form with file upload</p>
        </div>
      </div>

      {/* Section 3: Resources & Links */}
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Section 3: Additional Resources & Links</h3>
        <div className="space-y-3 text-[#1A237E]/80">
          <p><strong>Purpose:</strong> Curate helpful external tools, websites, and materials</p>
          <p><strong>Layout:</strong> Simple list or grid with icons/logos</p>
          <p><strong>Content Elements:</strong></p>
          <ul className="ml-6 space-y-1">
            <li>• Resource name</li>
            <li>• Brief description</li>
            <li>• Link to external site or downloadable file</li>
            <li>• Optional: thumbnail or icon</li>
          </ul>
          <p><strong>Examples:</strong> Scratch, Code.org, Hour of Code, recommended books, educator communities</p>
          <p><strong>Editing:</strong> Admin can add links with title, description, URL via CMS</p>
        </div>
      </div>

      {/* Section 4: Glossary - MAIN FOCUS */}
      <div className="bg-[#00BCD4]/10 border-2 border-[#00BCD4]/40 rounded-lg p-6 mb-6">
        <h3 className="text-[#1A237E] mb-3">Section 4: Searchable Glossary with YouTube Videos</h3>
        <p className="text-[#1A237E]/80 mb-4">
          <strong>Purpose:</strong> Provide students and educators with clear, accessible definitions 
          of coding terms, each enhanced with a visual YouTube explanation.
        </p>

        {/* Glossary UI Mockup */}
        <div className="bg-white rounded-lg border border-[#00BCD4]/30 p-6 mb-4">
          <h4 className="font-medium text-[#1A237E] mb-3">Glossary Section Layout</h4>
          
          {/* Search Bar */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1A237E] mb-2">Search Bar</label>
            <input 
              type="text" 
              placeholder="Search for a term (e.g., variable, loop, function)..." 
              className="w-full px-4 py-2 border border-[#1A237E]/20 rounded-md"
              disabled
            />
            <p className="text-sm text-[#1A237E]/70 mt-1">
              Real-time filtering as user types; browse alphabetically if no search term
            </p>
          </div>

          {/* Glossary Cards Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-[#1A237E]">Glossary Cards (Grid Layout)</h4>
            
            {/* Example Card 1 */}
            <div className="border-2 border-[#00BCD4]/30 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-lg font-medium text-[#1A237E]">Variable</h5>
                <span className="text-xs px-2 py-1 bg-[#00BCD4] text-white rounded">Beginner</span>
              </div>
              <p className="text-[#1A237E]/80 mb-3">
                A variable is like a container that stores information in your code. 
                You can put something in it (like a number or word) and use it later, or even change what's inside.
              </p>
              <div className="bg-[#F5F3EE] border border-[#1A237E]/10 rounded p-3">
                <p className="text-sm text-[#1A237E] mb-2"><strong>Video Explanation:</strong></p>
                <div className="aspect-video bg-[#E0DED8] rounded flex items-center justify-center text-[#1A237E]/60">
                  [Embedded YouTube Player: "What is a Variable?"]
                </div>
                <p className="text-xs text-[#1A237E]/60 mt-2">YouTube URL: https://youtube.com/watch?v=example123</p>
              </div>
            </div>

            {/* Example Card 2 */}
            <div className="border-2 border-[#00BCD4]/30 rounded-lg p-4 bg-white">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-lg font-medium text-[#1A237E]">Loop</h5>
                <span className="text-xs px-2 py-1 bg-[#E53935] text-white rounded">Beginner</span>
              </div>
              <p className="text-[#1A237E]/80 mb-3">
                A loop is a way to repeat the same action over and over without writing the same code multiple times. 
                It's like telling your computer, "Do this 10 times," and it does!
              </p>
              <div className="bg-[#F5F3EE] border border-[#1A237E]/10 rounded p-3">
                <p className="text-sm text-[#1A237E] mb-2"><strong>Video Explanation:</strong></p>
                <div className="aspect-video bg-[#E0DED8] rounded flex items-center justify-center text-[#1A237E]/60">
                  [Embedded YouTube Player: "Understanding Loops"]
                </div>
                <p className="text-xs text-[#1A237E]/60 mt-2">YouTube URL: https://youtube.com/watch?v=example456</p>
              </div>
            </div>
          </div>
        </div>

        {/* Glossary Specifications */}
        <div className="bg-white rounded-lg border border-[#00BCD4]/30 p-4 space-y-3">
          <h4 className="font-medium text-[#1A237E]">Glossary Technical Specifications</h4>
          
          <div>
            <p className="text-sm font-medium text-[#1A237E] mb-1">Card Content Elements:</p>
            <ul className="text-sm text-[#1A237E]/80 ml-4 space-y-1">
              <li>• <strong>Term Name:</strong> Clear, bold heading</li>
              <li>• <strong>Difficulty Tag:</strong> Beginner / Intermediate / Advanced (optional)</li>
              <li>• <strong>Definition:</strong> 2-3 sentences, written for students (grade-appropriate language)</li>
              <li>• <strong>YouTube Video:</strong> Embedded player from provided URL (iframe or embed API)</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-[#1A237E] mb-1">Functionality:</p>
            <ul className="text-sm text-[#1A237E]/80 ml-4 space-y-1">
              <li>• <strong>Search:</strong> Filter terms by keyword in real-time</li>
              <li>• <strong>Responsive Grid:</strong> 1 column mobile, 2-3 columns tablet/desktop</li>
              <li>• <strong>Video Embed:</strong> Auto-embed YouTube videos using provided URL</li>
              <li>• <strong>Shareable:</strong> Each term has a unique URL for easy sharing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-[#1A237E] mb-1">Content Management (Admin):</p>
            <ul className="text-sm text-[#1A237E]/80 ml-4 space-y-1">
              <li>• <strong>Add Term:</strong> Form with fields: Term Name, Definition (textarea), YouTube URL, Difficulty Tag</li>
              <li>• <strong>Edit Term:</strong> Click to edit any field; changes save and publish immediately</li>
              <li>• <strong>Delete Term:</strong> Option to remove term with confirmation prompt</li>
              <li>• <strong>Reorder:</strong> Optional drag-and-drop or alphabetical auto-sort</li>
              <li>• <strong>Preview:</strong> See how card will appear before publishing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-[#1A237E] mb-1">YouTube Embed Guidelines:</p>
            <ul className="text-sm text-[#1A237E]/80 ml-4 space-y-1">
              <li>• Accept standard YouTube URL or embed URL</li>
              <li>• Auto-convert to embed format if needed</li>
              <li>• Display video with controls, allow fullscreen</li>
              <li>• Fallback message if video URL is broken or missing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Design Considerations */}
      <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6">
        <h3 className="text-[#1A237E] mb-3">Design & Usability Considerations</h3>
        <div className="space-y-4 text-[#1A237E]/80">
          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">Visual Design:</h4>
            <ul className="ml-4 space-y-1">
              <li>• Use existing brand colors (cyan, red, navy) and typography</li>
              <li>• High contrast for readability (especially for younger students)</li>
              <li>• Clear visual hierarchy: term → definition → video</li>
              <li>• Icons or color-coding for difficulty levels</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">Accessibility:</h4>
            <ul className="ml-4 space-y-1">
              <li>• All text meets WCAG contrast requirements</li>
              <li>• Videos include captions/subtitles where possible</li>
              <li>• Keyboard navigation for search and card focus</li>
              <li>• Screen reader friendly labels and headings</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">Mobile Experience:</h4>
            <ul className="ml-4 space-y-1">
              <li>• Search bar sticky at top on scroll</li>
              <li>• Cards stack vertically, easy to scroll</li>
              <li>• Video players responsive, don't break layout</li>
              <li>• Touch-friendly tap targets</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#1A237E] mb-2">Performance:</h4>
            <ul className="ml-4 space-y-1">
              <li>• Lazy-load videos (only load when card is in viewport)</li>
              <li>• Fast search with debounce to prevent lag</li>
              <li>• Consider pagination or "Load More" if glossary grows large (50+ terms)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mt-8 bg-[#00BCD4]/10 border border-[#00BCD4]/30 rounded-lg p-6">
        <h3 className="text-[#1A237E] mb-3">Next Steps for Implementation</h3>
        <ol className="space-y-2 text-[#1A237E]/80 ml-4">
          <li>1. <strong>Choose CMS:</strong> Select platform that supports custom content types (glossary terms) and media embedding</li>
          <li>2. <strong>Design Mockups:</strong> Create high-fidelity designs applying SWVA Can Code branding</li>
          <li>3. <strong>Develop Components:</strong> Build reusable card components for modules, resources, and glossary terms</li>
          <li>4. <strong>Integrate YouTube API:</strong> Ensure reliable video embedding with error handling</li>
          <li>5. <strong>User Testing:</strong> Test with actual students, educators, and staff to validate usability</li>
          <li>6. <strong>Content Population:</strong> Work with organizers to populate initial curriculum and glossary entries</li>
          <li>7. <strong>Staff Training:</strong> Train non-technical staff on using CMS to add/edit content</li>
        </ol>
      </div>
    </div>
  );
}