import { Link } from 'react-router';
import { Palette, Gamepad2, Zap, Users, Calendar, ArrowRight } from 'lucide-react';

export function SWVACanCreate() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Year-Round Creative Tech Programs
          </div>
          <h1 className="text-white mb-6">SWVA Can Create</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Beyond camps—explore ongoing opportunities to express your creativity through 
            technology. From game jams to art+tech workshops, there's always something new to create!
          </p>
        </div>
      </section>

      {/* What is SWVA Can Create */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">What is SWVA Can Create?</h2>
          <p className="text-[#1A237E]/80 text-lg leading-relaxed">
            <strong className="text-[#1A237E]">SWVA Can Create</strong> is our year-round initiative 
            bringing together students who love technology and creativity. Whether you're into game design, 
            digital art, music production, or inventing new things—this is your space to explore, 
            experiment, and collaborate with other young creators.
          </p>
        </div>
      </section>

      {/* Program Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">Our Programs</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">
              Hands-on creative experiences that blend art, technology, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Jams */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#E53935]">
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Gamepad2 className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Game Jams</h3>
              <p className="text-[#1A237E]/70 mb-4">
                24-48 hour events where teams design, develop, and showcase original video games 
                around a creative theme.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Next Event:</strong> Spring 2026
              </div>
            </div>

            {/* Hackathons */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#00BCD4]">
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Student Hackathons</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Build apps, websites, and tools to solve real community problems. 
                Compete for prizes and connect with mentors.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Next Event:</strong> Fall 2026
              </div>
            </div>

            {/* Art+Tech Workshops */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#E53935]">
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Palette className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Art + Tech Workshops</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Explore digital art, animation, music production, 3D modeling, and other 
                creative technologies with hands-on guidance.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Frequency:</strong> Monthly
              </div>
            </div>

            {/* Creative Coding Club */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#00BCD4]">
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Creative Coding Club</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Weekly meetups for students to work on personal projects, learn new skills, 
                and share their creations with peers.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Meets:</strong> Every Wednesday
              </div>
            </div>

            {/* Tech Showcase Night */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#E53935]">
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Tech Showcase Night</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Quarterly events where students present their projects to families, 
                educators, and community members.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Next Event:</strong> March 15, 2026
              </div>
            </div>

            {/* Special Interest Groups */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#00BCD4]">
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Special Interest Groups</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Join focused groups exploring robotics, VR/AR, web development, mobile apps, 
                and more specialized topics.
              </p>
              <div className="text-sm text-[#1A237E]/60">
                <strong>Various times</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">How to Get Involved</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-[#1A237E] mb-2">Check the Calendar</h3>
                <p className="text-[#1A237E]/70">
                  Browse upcoming events and programs on our calendar below. Programs are open to 
                  students of all skill levels—beginners always welcome!
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-[#1A237E] mb-2">Sign Up</h3>
                <p className="text-[#1A237E]/70">
                  Register for events through our contact form or email us directly. Most programs 
                  are free or low-cost, with scholarships available.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00BCD4] text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-[#1A237E] mb-2">Create & Share</h3>
                <p className="text-[#1A237E]/70">
                  Attend events, work on projects, and share your creations with the community. 
                  Your work may be featured in our showcase!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar (Placeholder) */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Creative Coding Club Meetup',
                date: 'February 19, 2026',
                time: '4:00 PM - 6:00 PM',
                location: 'Abingdon Library',
                color: '#00BCD4',
                type: 'Weekly'
              },
              {
                title: 'Digital Art Workshop',
                date: 'February 25, 2026',
                time: '10:00 AM - 2:00 PM',
                location: 'Bristol Community Center',
                color: '#E53935',
                type: 'Workshop'
              },
              {
                title: 'Tech Showcase Night',
                date: 'March 15, 2026',
                time: '6:00 PM - 8:00 PM',
                location: 'Blacksburg High School',
                color: '#00BCD4',
                type: 'Showcase'
              },
              {
                title: 'Spring Game Jam',
                date: 'April 12-13, 2026',
                time: '24-hour event',
                location: 'Virginia Tech',
                color: '#E53935',
                type: 'Competition'
              },
              {
                title: '3D Modeling Workshop',
                date: 'April 20, 2026',
                time: '1:00 PM - 4:00 PM',
                location: 'Wytheville Library',
                color: '#00BCD4',
                type: 'Workshop'
              },
              {
                title: 'Mobile App Dev Bootcamp',
                date: 'May 5-6, 2026',
                time: 'Weekend intensive',
                location: 'Abingdon',
                color: '#E53935',
                type: 'Bootcamp'
              }
            ].map((event, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4"
                style={{ borderColor: event.color }}
              >
                <div className="flex justify-between items-start mb-3">
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded-full text-white"
                    style={{ backgroundColor: event.color }}
                  >
                    {event.type}
                  </span>
                </div>
                <h3 className="text-[#1A237E] mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-[#1A237E]/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" style={{ color: event.color }} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: event.color }} />
                    <span>{event.time}</span>
                  </div>
                  <div className="text-[#1A237E]/60">
                    📍 {event.location}
                  </div>
                </div>
                <button 
                  className="mt-4 w-full py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
                  style={{ backgroundColor: event.color }}
                >
                  Sign Up
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#E53935] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Have an Idea for a Program?</h2>
          <p className="text-xl text-white/90 mb-8">
            We love hearing from students! If you have an idea for a workshop, club, 
            or event you'd like to see, let us know.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E53935] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            Share Your Idea
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
