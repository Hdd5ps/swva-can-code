import { useState } from 'react';
import { Link } from 'react-router';
import { Search, BookOpen, Download, Video, X } from 'lucide-react';

export function Curriculum() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<number | null>(null);

  // Glossary terms data
  const glossaryTerms = [
    {
      term: 'Variable',
      difficulty: 'Beginner',
      definition: 'A variable is like a container that stores information in your code. You can put something in it (like a number or word) and use it later, or even change what\'s inside.',
      videoId: 'dQw4w9WgXcQ', // Example YouTube video ID
      color: '#00BCD4'
    },
    {
      term: 'Loop',
      difficulty: 'Beginner',
      definition: 'A loop is a way to repeat the same action over and over without writing the same code multiple times. It\'s like telling your computer, "Do this 10 times," and it does!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Function',
      difficulty: 'Beginner',
      definition: 'A function is like a mini-program inside your program. You give it a name and tell it what to do, then you can use that name to make it run whenever you need it.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Conditional',
      difficulty: 'Beginner',
      definition: 'A conditional (or "if statement") lets your program make decisions. It checks if something is true, and then does different things based on the answer.',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
    {
      term: 'Array',
      difficulty: 'Intermediate',
      definition: 'An array is like a list that can hold multiple items in one place. Instead of creating separate variables for each thing, you can keep them all together in an array.',
      videoId: 'dQw4w9WgXcQ',
      color: '#00BCD4'
    },
    {
      term: 'Algorithm',
      difficulty: 'Intermediate',
      definition: 'An algorithm is a step-by-step set of instructions for solving a problem or completing a task. It\'s like a recipe for your code!',
      videoId: 'dQw4w9WgXcQ',
      color: '#E53935'
    },
  ];

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Curriculum & Resources</h1>
          <p className="text-xl text-white/90">
            Free lesson plans, teaching materials, and a searchable glossary to support 
            educators and students on their coding journey.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#1A237E]/80 text-lg leading-relaxed">
            Whether you're a teacher looking to integrate coding into your classroom, 
            a student exploring new concepts, or a parent supporting your child's learning, 
            our resources are designed to make technology education accessible and engaging for everyone.
          </p>
        </div>
      </section>

      {/* Curriculum Modules */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[#1A237E] mb-4">Curriculum Modules</h2>
            <p className="text-[#1A237E]/70 text-lg">
              Downloadable lesson plans and activities organized by grade level and topic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
              },
            ].map((module, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4"
                style={{ borderColor: module.color }}
              >
                <h3 className="text-[#1A237E] mb-3">{module.title}</h3>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span 
                    className="text-xs px-2 py-1 rounded-full text-white font-medium"
                    style={{ backgroundColor: module.color }}
                  >
                    {module.level}
                  </span>
                  <span className="text-xs px-2 py-1 bg-[#F5F3EE] rounded-full text-[#1A237E] font-medium">
                    {module.duration}
                  </span>
                </div>
                <p className="text-sm text-[#1A237E]/70 mb-1">{module.grade}</p>
                <div className="mb-4">
                  <p className="text-sm font-medium text-[#1A237E] mb-2">Includes:</p>
                  <ul className="text-sm text-[#1A237E]/70 space-y-1">
                    {module.includes.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: module.color }}
                >
                  <Download className="w-4 h-4" />
                  Download Module
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] mb-8">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
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
              },
            ].map((resource, index) => (
              <div key={index} className="bg-[#F5F3EE] rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{resource.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-[#1A237E] mb-2">{resource.name}</h3>
                    <p className="text-[#1A237E]/70 mb-3">{resource.description}</p>
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00BCD4] font-medium hover:underline text-sm"
                    >
                      Visit Site →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Searchable Glossary */}
      <section className="py-20 bg-[#00BCD4]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-[#1A237E] mb-4">Coding Glossary</h2>
            <p className="text-[#1A237E]/70 text-lg mb-8">
              Search for coding terms and watch video explanations. Perfect for students learning at their own pace!
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1A237E]/40" />
              <input
                type="text"
                placeholder="Search for a term (e.g., variable, loop, function)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-[#1A237E]/10 focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
              />
            </div>
          </div>

          {/* Glossary Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTerms.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{ borderColor: item.color }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[#1A237E] text-xl">{item.term}</h3>
                  <span 
                    className="text-xs px-2 py-1 rounded-full text-white font-medium"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.difficulty}
                  </span>
                </div>
                
                <p className="text-[#1A237E]/80 mb-4 leading-relaxed">
                  {item.definition}
                </p>

                <button
                  onClick={() => setSelectedTerm(index)}
                  className="w-full flex items-center justify-center gap-2 py-2 bg-[#F5F3EE] hover:bg-[#E0DED8] text-[#1A237E] rounded-lg font-medium transition-colors"
                >
                  <Video className="w-4 h-4" />
                  Watch Video Explanation
                </button>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12 text-[#1A237E]/70">
              <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No terms found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedTerm !== null && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTerm(null)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-[#1A237E] text-2xl mb-2">
                  {filteredTerms[selectedTerm].term}
                </h3>
                <p className="text-[#1A237E]/70">
                  {filteredTerms[selectedTerm].definition}
                </p>
              </div>
              <button
                onClick={() => setSelectedTerm(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-[#1A237E]" />
              </button>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${filteredTerms[selectedTerm].videoId}`}
                title={filteredTerms[selectedTerm].term}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* CTA for Educators */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">For Educators</h2>
          <p className="text-[#1A237E]/80 text-lg mb-8">
            Need help integrating these resources into your classroom? 
            Want to request a specific lesson plan or glossary term? We're here to help!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
