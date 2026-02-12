import { Target, Heart, Lightbulb, Users } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">About SWVA Can Code</h1>
          <p className="text-xl text-white/90">
            Empowering the next generation of innovators, creators, and problem-solvers 
            in Southwest Virginia through accessible, engaging technology education.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#00BCD4]">
              <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#00BCD4]" />
              </div>
              <h2 className="text-[#1A237E] mb-4">Our Mission</h2>
              <p className="text-[#1A237E]/80 leading-relaxed">
                To provide accessible, high-quality coding education and creative technology 
                experiences to K-12 students across Southwest Virginia, fostering critical thinking, 
                creativity, and digital literacy skills that prepare them for future success.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#E53935]">
              <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#E53935]" />
              </div>
              <h2 className="text-[#1A237E] mb-4">Our Vision</h2>
              <p className="text-[#1A237E]/80 leading-relaxed">
                A Southwest Virginia where every student has the opportunity to explore technology, 
                express their creativity through code, and build the skills needed to thrive in an 
                increasingly digital world—regardless of their background or zip code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">What We Do</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">
              We offer a range of programs designed to make technology education fun, 
              accessible, and relevant to students' lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Summer & Break Camps</h3>
              <p className="text-[#1A237E]/70">
                Week-long immersive camps where students learn coding fundamentals, 
                build projects, and make lasting friendships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-10 h-10 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Creative Tech Programs</h3>
              <p className="text-[#1A237E]/70">
                Year-round opportunities including game jams, hackathons, art+tech workshops, 
                and special interest clubs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Educator Resources</h3>
              <p className="text-[#1A237E]/70">
                Free curriculum, lesson plans, and teaching resources for educators 
                bringing coding into their classrooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">Why It Matters</h2>
          
          <div className="space-y-6 text-[#1A237E]/80 leading-relaxed">
            <p>
              <strong className="text-[#1A237E]">Technology is everywhere.</strong> From the apps 
              we use to the systems that power our communities, coding and digital literacy are 
              essential skills for the 21st century. Yet many students—especially in rural areas 
              like Southwest Virginia—lack access to quality computer science education.
            </p>

            <p>
              <strong className="text-[#1A237E]">We're changing that.</strong> SWVA Can Code brings 
              engaging, hands-on tech education directly to students across the region. We believe 
              that every child deserves the chance to learn to code, create with technology, and 
              develop the problem-solving skills that will serve them throughout their lives.
            </p>

            <p>
              <strong className="text-[#1A237E]">Beyond technical skills,</strong> our programs 
              foster creativity, critical thinking, collaboration, and confidence. Students don't 
              just learn syntax—they learn to see themselves as creators and innovators who can 
              use technology to solve real problems and bring their ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Team / Community (placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">Our Community</h2>
          <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto mb-12">
            SWVA Can Code is powered by dedicated educators, volunteers, sponsors, and 
            community partners who believe in the potential of every student.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] rounded-xl p-8">
              <div className="text-4xl font-bold text-[#00BCD4] mb-2">20+</div>
              <div className="text-[#1A237E]/70 font-medium">Volunteer Instructors</div>
            </div>
            <div className="bg-[#F5F3EE] rounded-xl p-8">
              <div className="text-4xl font-bold text-[#E53935] mb-2">15+</div>
              <div className="text-[#1A237E]/70 font-medium">Partner Organizations</div>
            </div>
            <div className="bg-[#F5F3EE] rounded-xl p-8">
              <div className="text-4xl font-bold text-[#00BCD4] mb-2">500+</div>
              <div className="text-[#1A237E]/70 font-medium">Students Reached</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
