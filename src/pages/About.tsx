import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import { aboutContent } from '../data/aboutContent';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">{aboutContent.hero.title}</h1>
          <p className="text-xl text-white/90">{aboutContent.hero.subtitle}</p>
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
              <h2 className="text-[#1A237E] mb-4">{aboutContent.mission.title}</h2>
              <p className="text-[#1A237E]/80 leading-relaxed">{aboutContent.mission.text}</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border-t-4 border-[#E53935]">
              <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-[#E53935]" />
              </div>
              <h2 className="text-[#1A237E] mb-4">{aboutContent.vision.title}</h2>
              <p className="text-[#1A237E]/80 leading-relaxed">{aboutContent.vision.text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">{aboutContent.whatWeDo.title}</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">{aboutContent.whatWeDo.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">{aboutContent.whatWeDo.items[0].title}</h3>
              <p className="text-[#1A237E]/70">{aboutContent.whatWeDo.items[0].text}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-10 h-10 text-[#E53935]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">{aboutContent.whatWeDo.items[1].title}</h3>
              <p className="text-[#1A237E]/70">{aboutContent.whatWeDo.items[1].text}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-[#00BCD4]" />
              </div>
              <h3 className="text-[#1A237E] mb-3">{aboutContent.whatWeDo.items[2].title}</h3>
              <p className="text-[#1A237E]/70">{aboutContent.whatWeDo.items[2].text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 bg-[#F5F3EE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">{aboutContent.whyItMatters.title}</h2>
          
          <div className="space-y-6 text-[#1A237E]/80 leading-relaxed">
            {aboutContent.whyItMatters.paragraphs.map((paragraph, index) => (
              <p key={`${paragraph.lead}-${index}`}>
                <strong className="text-[#1A237E]">{paragraph.lead}</strong> {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Community (placeholder) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">{aboutContent.community.title}</h2>
          <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto mb-12">{aboutContent.community.description}</p>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutContent.community.stats.map((stat, index) => (
              <div key={`${stat.label}-${index}`} className="bg-[#F5F3EE] rounded-xl p-8">
                <div className={`text-4xl font-bold mb-2 ${stat.colorClass}`}>{stat.value}</div>
                <div className="text-[#1A237E]/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
