import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight, Search } from 'lucide-react';

export function FindCamp() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ageFilter, setAgeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  const camps = [
    {
      id: 1,
      title: 'Summer Code Camp - Beginners',
      date: 'June 12-16, 2026',
      location: 'Abingdon, VA',
      ageRange: '8-12',
      duration: '5 days',
      description: 'Perfect introduction to coding! Learn Scratch, create games, and make animations.',
      spots: 'Limited spots available',
      color: '#00BCD4'
    },
    {
      id: 2,
      title: 'Game Design Workshop',
      date: 'June 19-23, 2026',
      location: 'Bristol, VA',
      ageRange: '10-14',
      duration: '5 days',
      description: 'Design and build your own video games using Unity and learn game development principles.',
      spots: 'Open enrollment',
      color: '#E53935'
    },
    {
      id: 3,
      title: 'Web Development Basics',
      date: 'July 10-14, 2026',
      location: 'Blacksburg, VA',
      ageRange: '12-16',
      duration: '5 days',
      description: 'Build real websites with HTML, CSS, and JavaScript. Create your own portfolio!',
      spots: 'Open enrollment',
      color: '#00BCD4'
    },
    {
      id: 4,
      title: 'Python Programming for Beginners',
      date: 'July 17-21, 2026',
      location: 'Abingdon, VA',
      ageRange: '10-14',
      duration: '5 days',
      description: 'Learn Python basics through fun projects including data visualization and simple games.',
      spots: 'Open enrollment',
      color: '#E53935'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      date: 'July 24-28, 2026',
      location: 'Bristol, VA',
      ageRange: '13-17',
      duration: '5 days',
      description: 'Create your own mobile apps and learn the fundamentals of app design and development.',
      spots: 'Limited spots available',
      color: '#00BCD4'
    },
    {
      id: 6,
      title: 'Robotics & Arduino Camp',
      date: 'August 7-11, 2026',
      location: 'Blacksburg, VA',
      ageRange: '11-15',
      duration: '5 days',
      description: 'Build and program robots using Arduino! Hands-on experience with sensors and motors.',
      spots: 'Open enrollment',
      color: '#E53935'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Find a Camp</h1>
          <p className="text-xl text-white/90">
            Discover the perfect coding camp for your child. Filter by age, location, and interests.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-md sticky top-[84px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#1A237E]/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search camps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
              />
            </div>

            {/* Age Filter */}
            <select
              value={ageFilter}
              onChange={(e) => setAgeFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Ages</option>
              <option value="8-10">Ages 8-10</option>
              <option value="11-13">Ages 11-13</option>
              <option value="14-17">Ages 14-17</option>
            </select>

            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="px-4 py-2 border border-[#1A237E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BCD4] text-[#1A237E]"
            >
              <option value="all">All Locations</option>
              <option value="abingdon">Abingdon, VA</option>
              <option value="bristol">Bristol, VA</option>
              <option value="blacksburg">Blacksburg, VA</option>
            </select>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setAgeFilter('all');
                setLocationFilter('all');
              }}
              className="px-6 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-lg hover:bg-[#E0DED8] transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      {/* Camps Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-[#1A237E] mb-2">Summer 2026 Camps</h2>
            <p className="text-[#1A237E]/70">
              All camps include materials, snacks, and a certificate of completion. 
              Need-based scholarships available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camps.map((camp) => (
              <div
                key={camp.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border-t-4"
                style={{ borderColor: camp.color }}
              >
                <div className="p-6">
                  {/* Badge */}
                  <div className="mb-4">
                    {camp.spots === 'Limited spots available' ? (
                      <span className="inline-block px-3 py-1 bg-[#E53935]/10 text-[#E53935] text-sm font-medium rounded-full">
                        {camp.spots}
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 bg-[#00BCD4]/10 text-[#00BCD4] text-sm font-medium rounded-full">
                        {camp.spots}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#1A237E] mb-3">{camp.title}</h3>

                  {/* Description */}
                  <p className="text-[#1A237E]/70 text-sm mb-6">{camp.description}</p>

                  {/* Info Grid */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Calendar className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <MapPin className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Users className="w-4 h-4" style={{ color: camp.color }} />
                      <span>Ages {camp.ageRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#1A237E]/70 text-sm">
                      <Clock className="w-4 h-4" style={{ color: camp.color }} />
                      <span>{camp.duration}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="w-full py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    style={{ backgroundColor: camp.color }}
                  >
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[#1A237E] mb-4">What to Expect</h2>
              <ul className="space-y-3 text-[#1A237E]/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>Small class sizes (max 15 students per instructor)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>All materials and computers provided</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>Experienced instructors passionate about teaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>Hands-on projects students take home</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>Certificate of completion for all participants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4] font-bold">•</span>
                  <span>Scholarships available based on need</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#1A237E] mb-4">Have Questions?</h2>
              <p className="text-[#1A237E]/80 mb-6">
                We're here to help! Contact us if you have questions about registration, 
                scholarships, accommodations, or anything else.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:camps@swvacancode.org"
                  className="block px-6 py-3 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors text-center"
                >
                  Email Us
                </a>
                <a
                  href="tel:+15551234567"
                  className="block px-6 py-3 bg-[#1A237E] text-white rounded-lg font-medium hover:bg-[#283593] transition-colors text-center"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
