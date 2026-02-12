import { ExternalLink, Code, Palette, Trophy } from 'lucide-react';

export function Showcase() {
  const projects = [
    {
      id: 1,
      title: 'Jungle Adventure Game',
      student: 'Sarah M.',
      age: 12,
      description: 'A platformer game where you help a monkey collect bananas while avoiding obstacles.',
      skills: ['Scratch', 'Game Design', 'Animation'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      student: 'Michael L.',
      age: 15,
      description: 'Interactive web app that displays current weather and 5-day forecast for any city.',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
    },
    {
      id: 3,
      title: 'Drawing Canvas App',
      student: 'Emma R.',
      age: 10,
      description: 'Digital art tool with color picker, brush sizes, and save functionality.',
      skills: ['JavaScript', 'HTML Canvas', 'UI Design'],
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80'
    },
    {
      id: 4,
      title: 'Quiz Master',
      student: 'Jason T.',
      age: 13,
      description: 'Multiple choice quiz game with score tracking and different difficulty levels.',
      skills: ['Python', 'Logic', 'Data Structures'],
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80'
    },
    {
      id: 5,
      title: 'Virtual Pet Simulator',
      student: 'Lily K.',
      age: 11,
      description: 'Take care of a virtual pet by feeding, playing, and keeping it happy!',
      skills: ['Scratch', 'Variables', 'User Input'],
      image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&q=80'
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      student: 'David P.',
      age: 16,
      description: 'Responsive portfolio showcasing projects, skills, and contact information.',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#1A237E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Student Showcase</h1>
          <p className="text-xl text-white/90">
            Celebrate the amazing projects created by our students. 
            These young coders are building the future!
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-[#00BCD4] text-white rounded-full text-sm font-medium hover:bg-[#00ACC1] transition-colors">
              All Projects
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Games
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Websites
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Apps
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Art & Animation
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#00BCD4] text-white text-sm font-medium rounded-full">
                    Age {project.age}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-[#1A237E] mb-2">{project.title}</h3>
                  <p className="text-[#00BCD4] text-sm font-medium mb-3">By {project.student}</p>
                  <p className="text-[#1A237E]/70 text-sm mb-4">{project.description}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#F5F3EE] text-[#1A237E] text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full py-2 bg-[#E53935] text-white rounded-lg font-medium hover:bg-[#D32F2F] transition-colors flex items-center justify-center gap-2">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00BCD4] to-[#1A237E] rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10" />
            </div>
            <h2 className="text-white mb-4">Built Something Amazing?</h2>
            <p className="text-xl text-white/90 mb-8">
              Share your project with the community! We'd love to feature your work in our showcase.
            </p>
            <button className="px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Submit Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-[#00BCD4]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">200+</div>
              <div className="text-[#1A237E]/70">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-[#E53935]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">15+</div>
              <div className="text-[#1A237E]/70">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-[#00BCD4]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">30+</div>
              <div className="text-[#1A237E]/70">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
