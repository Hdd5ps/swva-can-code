import { Link } from 'react-router';
import { Code, Users, Lightbulb, Award, ArrowRight, Calendar, MapPin } from 'lucide-react';
import bannerImage from 'figma:asset/3e2c6b3e0116fe1ba3a91b55d57aab72a0a9cba0.png';

export function Home() {
  return (
    <div>
      {/* ============================================
          HERO SECTION (Top banner with main headline)
          ============================================ */}
      {/* This is the first thing visitors see - the big navy blue section with the main headline */}
      <section className="relative bg-[#1A237E] text-white overflow-hidden">
        {/* Binary code pattern background - decorative only, can be removed if desired */}
        <div className="absolute inset-0 opacity-10 text-[#00BCD4] text-xs leading-tight font-mono pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i}>
              {Array.from({ length: 200 })
                .map(() => Math.random() > 0.5 ? '1' : '0')
                .join(' ')}
            </div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE: Main headline and text */}
            <div className="text-center lg:text-left">
              {/* Small badge above headline - change text here */}
              <div className="inline-block px-4 py-2 bg-[#00BCD4] rounded-full text-sm font-medium mb-6">
                Empowering Young Coders in Southwest Virginia
              </div>
              
              {/* MAIN HEADLINE - Edit the text between the tags to change the headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Where Kids Learn to{' '}
                {/* text-[#00BCD4] makes text cyan blue */}
                <span className="text-[#00BCD4]">Code</span>,{' '}
                {/* text-[#E53935] makes text red */}
                <span className="text-[#E53935]">Create</span>, and{' '}
                <span className="text-[#00BCD4]">Innovate</span>
              </h1>
              
              {/* SUBHEADLINE - Edit this paragraph to change the description */}
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Join our K-12 coding camps and creative tech programs. 
                Build projects, make friends, and discover the exciting world of technology.
              </p>

              {/* BUTTONS - These are the two main call-to-action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* First button (cyan) - Links to Find a Camp page */}
                {/* To change where it goes, edit the text in to="/find-camp" */}
                <Link
                  to="/find-camp"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
                >
                  Find a Camp
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {/* Second button (white) - Links to About page */}
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE: Hero image */}
            {/* This displays the main banner image - image file is imported at the top */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={bannerImage} 
                  alt="Students coding together" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative colored blurs behind the image - can be removed if desired */}
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#00BCD4] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-[#E53935] rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>

        {/* Wave decoration at bottom - decorative only */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
              fill="#F5F3EE"
            />
          </svg>
        </div>
      </section>

      {/* ============================================
          STATS SECTION (500+ Students, 25+ Camps, etc.)
          ============================================ */}
      {/* This section shows key numbers/statistics in a row */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* STAT 1 - Edit the number and label text */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#00BCD4] mb-2">500+</div>
              <div className="text-[#1A237E]/70">Students Served</div>
            </div>
            {/* STAT 2 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#E53935] mb-2">25+</div>
              <div className="text-[#1A237E]/70">Camps Annually</div>
            </div>
            {/* STAT 3 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#00BCD4] mb-2">15+</div>
              <div className="text-[#1A237E]/70">Partner Schools</div>
            </div>
            {/* STAT 4 */}
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#E53935] mb-2">100%</div>
              <div className="text-[#1A237E]/70">Fun Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT WE OFFER SECTION (4 program cards)
          ============================================ */}
      {/* This section shows the 4 main program types in card format */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header - edit these texts */}
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">What We Offer</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">
              From beginner-friendly camps to advanced creative tech programs, 
              we have something for every young learner.
            </p>
          </div>

          {/* The 4 program cards - each card follows the same structure */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CARD 1: Coding Camps */}
            {/* To change color, edit border-[#00BCD4] to another color */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#00BCD4]">
              {/* Icon circle - change bg-[#00BCD4]/10 and text-[#00BCD4] to match */}
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-[#00BCD4]" />
              </div>
              {/* Card title - edit this text */}
              <h3 className="text-[#1A237E] mb-3">Coding Camps</h3>
              {/* Card description - edit this text */}
              <p className="text-[#1A237E]/70 mb-4">
                Week-long camps teaching programming fundamentals through fun, hands-on projects.
              </p>
              {/* Card link - change to="/find-camp" to link to a different page */}
              <Link to="/find-camp" className="text-[#00BCD4] font-medium hover:underline inline-flex items-center gap-1">
                Find Camps
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CARD 2: Showcase */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#E53935]">
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Student Showcase</h3>
              <p className="text-[#1A237E]/70 mb-4">
                See amazing projects created by students just like you. Get inspired!
              </p>
              <Link to="/showcase" className="text-[#E53935] font-medium hover:underline inline-flex items-center gap-1">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CARD 3: SWVA Can Create */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#00BCD4]">
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">SWVA Can Create</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Year-round creative tech opportunities including hackathons and art+tech workshops.
              </p>
              <Link to="/swva-can-create" className="text-[#00BCD4] font-medium hover:underline inline-flex items-center gap-1">
                Explore Programs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* CARD 4: Curriculum */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-[#E53935]">
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">For Educators</h3>
              <p className="text-[#1A237E]/70 mb-4">
                Access curriculum, resources, and a searchable glossary with video explanations.
              </p>
              <Link to="/curriculum" className="text-[#E53935] font-medium hover:underline inline-flex items-center gap-1">
                View Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          UPCOMING CAMPS PREVIEW (3 camp cards)
          ============================================ */}
      {/* This section displays upcoming camps with dates and locations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header with link to all camps */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              <h2 className="text-[#1A237E] mb-2">Upcoming Camps</h2>
              <p className="text-[#1A237E]/70 text-lg">Join us this season!</p>
            </div>
            <Link
              to="/find-camp"
              className="mt-4 sm:mt-0 text-[#00BCD4] font-medium hover:underline inline-flex items-center gap-1"
            >
              View All Camps
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Camp cards grid */}
          {/* HOW TO EDIT: Change the text in the array below to update camp details */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Summer Code Camp - Beginners',  // Camp name
                date: 'June 12-16, 2026',              // Camp dates
                location: 'Abingdon, VA',              // Camp location
                ages: 'Ages 8-12',                      // Age range
                color: '#00BCD4'                        // Card accent color (cyan or red)
              },
              {
                title: 'Game Design Workshop',
                date: 'June 19-23, 2026',
                location: 'Bristol, VA',
                ages: 'Ages 10-14',
                color: '#E53935'
              },
              {
                title: 'Web Development Basics',
                date: 'July 10-14, 2026',
                location: 'Blacksburg, VA',
                ages: 'Ages 12-16',
                color: '#00BCD4'
              }
              /* TO ADD MORE CAMPS: Copy one of the camp objects above (including the curly braces)
                 and paste it here with a comma, then edit the details */
            ].map((camp, index) => (
              // Don't edit this part - it displays each camp from the array above
              <div key={index} className="bg-[#F5F3EE] rounded-xl p-6 border-l-4 hover:shadow-lg transition-shadow" style={{ borderColor: camp.color }}>
                <h3 className="text-[#1A237E] mb-4">{camp.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-[#1A237E]/70">
                    <Calendar className="w-4 h-4" style={{ color: camp.color }} />
                    <span className="text-sm">{camp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#1A237E]/70">
                    <MapPin className="w-4 h-4" style={{ color: camp.color }} />
                    <span className="text-sm">{camp.location}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-[#1A237E]">
                    {camp.ages}
                  </div>
                </div>
                <button className="w-full py-2 rounded-lg font-medium text-white transition-colors" style={{ backgroundColor: camp.color }}>
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          CALL-TO-ACTION SECTION (Bottom banner)
          ============================================ */}
      {/* Final section encouraging visitors to take action */}
      <section className="py-20 bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Headline - edit this text */}
          <h2 className="text-white mb-6">Ready to Start Your Coding Journey?</h2>
          {/* Description - edit this text */}
          <p className="text-xl text-white/90 mb-8">
            Join hundreds of students who are already building, creating, and innovating with code.
          </p>
          {/* Two action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary button - links to camp registration */}
            <Link
              to="/find-camp"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Register for a Camp
              <ArrowRight className="w-5 h-5" />
            </Link>
            {/* Secondary button - links to contact page */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}