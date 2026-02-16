// Editable content for the Sponsor page.
export const sponsorContent = {
  hero: {
    title: 'Become a Sponsor',
    subtitle:
      'Partner with us to empower the next generation of innovators in Southwest Virginia. Your support opens doors to technology education for hundreds of students.'
  },
  impact: {
    title: 'Your Impact',
    description:
      "When you sponsor SWVA Can Code, you're investing in students, educators, and the future of our region.",
    stats: [
      { value: '500+', label: 'Students Served Annually', colorClass: 'text-[#00BCD4]' },
      { value: '25+', label: 'Camps & Programs', colorClass: 'text-[#E53935]' },
      { value: '15+', label: 'Partner Schools', colorClass: 'text-[#00BCD4]' },
      { value: '$50K', label: 'In Scholarships Provided', colorClass: 'text-[#E53935]' }
    ],
    stories: [
      {
        title: 'Access for All',
        text:
          'Sponsor funds provide scholarships ensuring no student is turned away due to cost. Over 40% of our students receive financial assistance.'
      },
      {
        title: 'Equipment & Resources',
        text:
          'Donations help us purchase laptops, software, robotics kits, and other tools that make learning hands-on and engaging.'
      },
      {
        title: 'Program Growth',
        text:
          'Your support allows us to expand to new communities, develop new curriculum, and reach more students across the region.'
      }
    ]
  },
  tiers: {
    title: 'Sponsorship Levels',
    description:
      "Choose the level that fits your organization's goals and budget. All sponsors receive recognition and impact reports.",
    items: [
      {
        name: 'Bronze',
        price: '$500',
        subtitle: 'Supporter',
        accent: '#CD7F32',
        benefits: [
          'Logo on website',
          'Social media recognition',
          'Annual impact report',
          'Sponsor 2 student scholarships'
        ]
      },
      {
        name: 'Silver',
        price: '$1,500',
        subtitle: 'Partner',
        accent: '#C0C0C0',
        benefits: [
          'All Bronze benefits',
          'Logo on camp materials',
          'Recognition at events',
          'Sponsor 5 student scholarships',
          'Quarterly updates'
        ]
      },
      {
        name: 'Gold',
        price: '$3,500',
        subtitle: 'Champion',
        accent: '#FFD700',
        badge: 'Popular',
        benefits: [
          'All Silver benefits',
          'Prominent logo placement',
          'Speaking opportunity at event',
          'Sponsor 10 student scholarships',
          'Named camp sponsorship option',
          'Custom impact video'
        ]
      },
      {
        name: 'Platinum',
        price: '$7,500+',
        subtitle: 'Founding Partner',
        accent: '#00BCD4',
        benefits: [
          'All Gold benefits',
          'Premier logo placement',
          'Exclusive event access',
          'Sponsor entire camp series',
          'Dedicated partnership manager',
          'Custom program development'
        ]
      }
    ],
    footerText:
      "All sponsorship levels are flexible and can be customized to meet your organization's needs.",
    buttonLabel: 'Discuss Custom Partnership',
    buttonTo: '/contact'
  },
  whySponsor: {
    title: 'Why Sponsor SWVA Can Code?',
    items: [
      {
        title: 'Tangible Community Impact',
        text:
          'Your sponsorship directly funds scholarships, equipment, and programs that serve hundreds of students annually. You will see the impact through student projects, testimonials, and measurable outcomes.',
        bullets: [
          'Detailed impact reports showing how funds are used',
          'Stories and testimonials from students and families',
          'Opportunity to attend camps and events'
        ]
      },
      {
        title: 'Build Your Brand & Talent Pipeline',
        text:
          'Sponsorship increases brand visibility among families, educators, and community leaders while demonstrating your commitment to education and workforce development.',
        bullets: [
          'Logo placement on website, materials, and at events',
          'Social media recognition and co-branded content',
          'Connect with future tech talent in our region'
        ]
      }
    ]
  },
  sponsors: {
    title: 'Our Valued Sponsors',
    description:
      "We're grateful to these organizations for their commitment to technology education in Southwest Virginia.",
    placeholderCount: 8
  },
  packet: {
    title: 'Download Our Sponsorship Packet',
    description:
      'Get detailed information about sponsorship levels, benefits, and our impact. Perfect for sharing with your team or board.',
    buttonLabel: 'Download PDF (2.3 MB)'
  },
  cta: {
    title: 'Ready to Make a Difference?',
    description:
      "Let's discuss how your organization can partner with SWVA Can Code to empower the next generation of innovators.",
    primaryLabel: 'Contact Our Team',
    primaryTo: '/contact',
    secondaryLabel: 'Email: sponsors@swvacancode.org',
    secondaryHref: 'mailto:sponsors@swvacancode.org'
  }
};
