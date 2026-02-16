import { Link } from 'react-router';
import { Palette, Gamepad2, Zap, Users, Calendar, ArrowRight } from 'lucide-react';
import logo2 from '../assets/logo2.png';
import { swvaCanCreateContent } from '../data/swvaCanCreateContent';

export function SWVACanCreate() {
  return (
    <div>
      {/* Hero Section */}
      <section
        data-reveal
        className="bg-gradient-to-r from-[#E53935] to-[#00BCD4] text-white py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-8 text-left sm:flex-row sm:items-center">
            <div className="flex items-center justify-start">
              <img
                src={logo2}
                alt="SWVA Can Create logo"
                className="w-20 h-auto sm:w-28"
              />
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                {swvaCanCreateContent.hero.badge}
              </div>
              <h1 className="mt-3 text-3xl text-white sm:text-4xl">{swvaCanCreateContent.hero.title}</h1>
              <p className="mt-3 text-base text-white/90 sm:text-lg">
                {swvaCanCreateContent.hero.subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is SWVA Can Create */}
      <section data-reveal className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[#1A237E] mb-6">{swvaCanCreateContent.intro.title}</h2>
          <p className="text-[#1A237E]/80 text-lg leading-relaxed">
            {swvaCanCreateContent.intro.text}
          </p>
        </div>
      </section>

      {/* Program Types */}
      <section data-reveal className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1A237E] mb-4">{swvaCanCreateContent.programs.title}</h2>
            <p className="text-[#1A237E]/70 text-xl max-w-3xl mx-auto">{swvaCanCreateContent.programs.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[Gamepad2, Zap, Palette, Users, Calendar, Users].map((Icon, index) => (
              <div
                key={`${swvaCanCreateContent.programs.items[index].title}-${index}`}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4"
                style={{ borderColor: swvaCanCreateContent.programs.items[index].accent }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${swvaCanCreateContent.programs.items[index].accent}1A` }}>
                  <Icon className="w-7 h-7" style={{ color: swvaCanCreateContent.programs.items[index].accent }} />
                </div>
                <h3 className="text-[#1A237E] mb-3">{swvaCanCreateContent.programs.items[index].title}</h3>
                <p className="text-[#1A237E]/70 mb-4">{swvaCanCreateContent.programs.items[index].text}</p>
                <div className="text-sm text-[#1A237E]/60">
                  <strong>{swvaCanCreateContent.programs.items[index].metaLabel}</strong>
                  {swvaCanCreateContent.programs.items[index].metaValue
                    ? ` ${swvaCanCreateContent.programs.items[index].metaValue}`
                    : ''}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section data-reveal className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">{swvaCanCreateContent.steps.title}</h2>
          
          <div className="space-y-8">
            {swvaCanCreateContent.steps.items.map((step, index) => (
              <div key={`${step.title}-${index}`} className="flex gap-6">
                <div
                  className="flex-shrink-0 w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-xl"
                  style={{ backgroundColor: step.accent }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-[#1A237E] mb-2">{step.title}</h3>
                  <p className="text-[#1A237E]/70">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to={swvaCanCreateContent.steps.buttonTo}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
            >
              {swvaCanCreateContent.steps.buttonLabel}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Calendar (Placeholder) */}
      <section data-reveal className="py-20 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">{swvaCanCreateContent.events.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {swvaCanCreateContent.events.items.map((event, index) => (
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
      <section
        data-reveal
        className="py-20 bg-gradient-to-r from-[#E53935] to-[#00BCD4] text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6">{swvaCanCreateContent.cta.title}</h2>
          <p className="text-xl text-white/90 mb-8">{swvaCanCreateContent.cta.description}</p>
          <Link
            to={swvaCanCreateContent.cta.buttonTo}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#E53935] rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            {swvaCanCreateContent.cta.buttonLabel}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
