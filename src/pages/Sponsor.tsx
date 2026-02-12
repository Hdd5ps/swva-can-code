import { Link } from 'react-router';
import { Heart, Users, Award, TrendingUp, Download, ArrowRight } from 'lucide-react';

export function Sponsor() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#1A237E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Become a Sponsor</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Partner with us to empower the next generation of innovators in Southwest Virginia. 
            Your support opens doors to technology education for hundreds of students.
          </p>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">Your Impact</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">
              When you sponsor SWVA Can Code, you're investing in students, educators, 
              and the future of our region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">500+</div>
              <div className="text-[#1A237E]/70">Students Served Annually</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E53935] mb-2">25+</div>
              <div className="text-[#1A237E]/70">Camps & Programs</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#00BCD4] mb-2">15+</div>
              <div className="text-[#1A237E]/70">Partner Schools</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#E53935] mb-2">$50K</div>
              <div className="text-[#1A237E]/70">In Scholarships Provided</div>
            </div>
          </div>

          {/* Impact Stories */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F3EE] rounded-xl p-6">
              <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Access for All</h3>
              <p className="text-[#1A237E]/70">
                Sponsor funds provide scholarships ensuring no student is turned away due to cost. 
                Over 40% of our students receive financial assistance.
              </p>
            </div>

            <div className="bg-[#F5F3EE] rounded-xl p-6">
              <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Equipment & Resources</h3>
              <p className="text-[#1A237E]/70">
                Donations help us purchase laptops, software, robotics kits, and other tools 
                that make learning hands-on and engaging.
              </p>
            </div>

            <div className="bg-[#F5F3EE] rounded-xl p-6">
              <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">Program Growth</h3>
              <p className="text-[#1A237E]/70">
                Your support allows us to expand to new communities, develop new curriculum, 
                and reach more students across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">Sponsorship Levels</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">
              Choose the level that fits your organization's goals and budget. 
              All sponsors receive recognition and impact reports.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bronze */}
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#CD7F32]">
              <div className="text-center mb-6">
                <h3 className="text-[#1A237E] mb-2">Bronze</h3>
                <div className="text-3xl font-bold text-[#1A237E] mb-1">$500</div>
                <div className="text-sm text-[#1A237E]/60">Supporter</div>
              </div>
              <ul className="space-y-3 text-sm text-[#1A237E]/80 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Logo on website</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Social media recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Annual impact report</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Sponsor 2 student scholarships</span>
                </li>
              </ul>
            </div>

            {/* Silver */}
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#C0C0C0]">
              <div className="text-center mb-6">
                <h3 className="text-[#1A237E] mb-2">Silver</h3>
                <div className="text-3xl font-bold text-[#1A237E] mb-1">$1,500</div>
                <div className="text-sm text-[#1A237E]/60">Partner</div>
              </div>
              <ul className="space-y-3 text-sm text-[#1A237E]/80 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>All Bronze benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Logo on camp materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Recognition at events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Sponsor 5 student scholarships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Quarterly updates</span>
                </li>
              </ul>
            </div>

            {/* Gold */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FFD700] relative">
              <div className="absolute -top-3 right-6 bg-[#E53935] text-white text-xs px-3 py-1 rounded-full font-medium">
                Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-[#1A237E] mb-2">Gold</h3>
                <div className="text-3xl font-bold text-[#1A237E] mb-1">$3,500</div>
                <div className="text-sm text-[#1A237E]/60">Champion</div>
              </div>
              <ul className="space-y-3 text-sm text-[#1A237E]/80 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>All Silver benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Prominent logo placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Speaking opportunity at event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Sponsor 10 student scholarships</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Named camp sponsorship option</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Custom impact video</span>
                </li>
              </ul>
            </div>

            {/* Platinum */}
            <div className="bg-white rounded-xl p-6 shadow-md border-t-4 border-[#00BCD4]">
              <div className="text-center mb-6">
                <h3 className="text-[#1A237E] mb-2">Platinum</h3>
                <div className="text-3xl font-bold text-[#1A237E] mb-1">$7,500+</div>
                <div className="text-sm text-[#1A237E]/60">Founding Partner</div>
              </div>
              <ul className="space-y-3 text-sm text-[#1A237E]/80 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>All Gold benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Premier logo placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Exclusive event access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Sponsor entire camp series</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Dedicated partnership manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00BCD4]">✓</span>
                  <span>Custom program development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#1A237E]/70 mb-6">
              All sponsorship levels are flexible and can be customized to meet your organization's needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
            >
              Discuss Custom Partnership
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-16">Why Sponsor SWVA Can Code?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="w-14 h-14 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-4">Tangible Community Impact</h3>
              <p className="text-[#1A237E]/70 leading-relaxed mb-4">
                Your sponsorship directly funds scholarships, equipment, and programs that serve 
                hundreds of students annually. You'll see the impact through student projects, 
                testimonials, and measurable outcomes.
              </p>
              <ul className="space-y-2 text-[#1A237E]/70">
                <li>• Detailed impact reports showing how funds are used</li>
                <li>• Stories and testimonials from students and families</li>
                <li>• Opportunity to attend camps and events</li>
              </ul>
            </div>

            <div>
              <div className="w-14 h-14 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-4">Build Your Brand & Talent Pipeline</h3>
              <p className="text-[#1A237E]/70 leading-relaxed mb-4">
                Sponsorship increases brand visibility among families, educators, and community 
                leaders while demonstrating your commitment to education and workforce development.
              </p>
              <ul className="space-y-2 text-[#1A237E]/70">
                <li>• Logo placement on website, materials, and at events</li>
                <li>• Social media recognition and co-branded content</li>
                <li>• Connect with future tech talent in our region</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">Our Valued Sponsors</h2>
          <p className="text-center text-[#1A237E]/70 mb-12 max-w-2xl mx-auto">
            We're grateful to these organizations for their commitment to technology education 
            in Southwest Virginia.
          </p>

          {/* Sponsor Logo Grid (Placeholder) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div 
                key={i} 
                className="bg-white rounded-lg p-6 flex items-center justify-center h-32 border border-[#1A237E]/10 hover:shadow-md transition-shadow"
              >
                <div className="text-[#1A237E]/40 text-center text-sm">
                  Sponsor Logo {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Sponsorship Packet */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-[#F5F3EE] rounded-xl p-12">
            <Download className="w-16 h-16 text-[#00BCD4] mx-auto mb-6" />
            <h2 className="text-[#1A237E] mb-4">Download Our Sponsorship Packet</h2>
            <p className="text-[#1A237E]/70 mb-8 max-w-2xl mx-auto">
              Get detailed information about sponsorship levels, benefits, and our impact. 
              Perfect for sharing with your team or board.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg">
              <Download className="w-5 h-5" />
              Download PDF (2.3 MB)
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how your organization can partner with SWVA Can Code to empower 
            the next generation of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:sponsors@swvacancode.org"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Email: sponsors@swvacancode.org
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
