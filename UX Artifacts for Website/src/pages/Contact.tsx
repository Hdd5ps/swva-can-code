import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  // Form state management - don't edit this section
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* ============================================
          HERO SECTION (Page header)
          ============================================ */}
      <section className="bg-gradient-to-r from-[#1A237E] to-[#00BCD4] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Page title - edit this text */}
          <h1 className="text-white mb-6">Get in Touch</h1>
          {/* Page description - edit this text */}
          <p className="text-xl text-white/90">
            Have questions about our programs? Want to get involved? 
            We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* ============================================
          MAIN CONTENT: Contact info + Form
          ============================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT COLUMN: Contact Information */}
            <div>
              <h2 className="text-[#1A237E] mb-6">Contact Information</h2>
              {/* Intro paragraph - edit this text */}
              <p className="text-[#1A237E]/70 mb-8 leading-relaxed">
                Whether you're a parent looking for camp information, an educator interested 
                in our resources, or a potential sponsor, we're here to help. Reach out using 
                the form or contact us directly.
              </p>

              {/* CONTACT DETAILS - Edit email, phone, and location below */}
              <div className="space-y-6">
                {/* EMAIL - Change the email address and description */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">Email</h3>
                    {/* Change email address here */}
                    <a 
                      href="mailto:info@swvacancode.org" 
                      className="text-[#00BCD4] hover:underline"
                    >
                      info@swvacancode.org
                    </a>
                    {/* Edit response time text */}
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                {/* PHONE - Change the phone number and hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E53935]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#E53935]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">Phone</h3>
                    {/* Change phone number here */}
                    <a 
                      href="tel:+15551234567" 
                      className="text-[#00BCD4] hover:underline"
                    >
                      (555) 123-4567
                    </a>
                    {/* Edit office hours */}
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      Monday - Friday, 9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </div>

                {/* LOCATION - Change location text */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCD4]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#00BCD4]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A237E] mb-1">Location</h3>
                    {/* Change location text here */}
                    <p className="text-[#1A237E]/70">
                      Serving Southwest Virginia
                    </p>
                    <p className="text-sm text-[#1A237E]/60 mt-1">
                      Abingdon, Bristol, Blacksburg, and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS BOX */}
              <div className="mt-12 bg-[#F5F3EE] rounded-xl p-6">
                <h3 className="text-[#1A237E] mb-4">Looking for something specific?</h3>
                {/* Edit these quick links as needed */}
                <ul className="space-y-3 text-[#1A237E]/70">
                  <li>
                    <strong className="text-[#1A237E]">Camp Registration:</strong> Visit our{' '}
                    <a href="/find-camp" className="text-[#00BCD4] hover:underline">Find a Camp</a> page
                  </li>
                  <li>
                    <strong className="text-[#1A237E]">Teaching Resources:</strong> Browse our{' '}
                    <a href="/curriculum" className="text-[#00BCD4] hover:underline">Curriculum & Resources</a>
                  </li>
                  <li>
                    <strong className="text-[#1A237E]">Sponsorship:</strong> Learn about{' '}
                    <a href="/sponsor" className="text-[#00BCD4] hover:underline">becoming a sponsor</a>
                  </li>
                  <li>
                    <strong className="text-[#1A237E]">About Us:</strong> Read more{' '}
                    <a href="/about" className="text-[#00BCD4] hover:underline">about our mission</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            {/* Don't edit the form structure, but you can edit labels and placeholder text */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-[#00BCD4]">
                <h2 className="text-[#1A237E] mb-6">Send Us a Message</h2>

                {/* Success message - shown after form submission */}
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    ✓ Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME FIELD */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1A237E] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder="Your full name"
                    />
                  </div>

                  {/* EMAIL FIELD */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1A237E] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* PHONE FIELD (Optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1A237E] mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* INQUIRY TYPE DROPDOWN */}
                  {/* To add/remove options, edit the <option> tags below */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-[#1A237E] mb-2">
                      What is your inquiry about? *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E]"
                    >
                      {/* Edit these options or add new ones */}
                      <option value="general">General Inquiry</option>
                      <option value="camp">Camp Registration / Information</option>
                      <option value="educator">Educator Resources / School Partnership</option>
                      <option value="volunteer">Volunteer / Teaching Opportunity</option>
                      <option value="sponsor">Sponsorship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* MESSAGE FIELD */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1A237E] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-[#1A237E]/20 rounded-lg focus:border-[#00BCD4] focus:outline-none text-[#1A237E] resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#00BCD4] text-white rounded-lg font-medium hover:bg-[#00ACC1] transition-colors shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>

                  <p className="text-sm text-[#1A237E]/60 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      {/* Frequently asked questions - add or edit questions below */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#1A237E] text-center mb-12">Frequently Asked Questions</h2>
          
          {/* Each FAQ is in its own box - copy/paste to add more */}
          <div className="space-y-6">
            {/* FAQ 1 - Edit question and answer */}
            <div className="bg-[#F5F3EE] rounded-lg p-6">
              <h3 className="text-[#1A237E] mb-3">How much do camps cost?</h3>
              <p className="text-[#1A237E]/70">
                Most camps range from $50-$150 per week. We offer scholarships and sliding-scale 
                pricing to ensure all students can participate. Contact us to learn more about 
                financial assistance.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#F5F3EE] rounded-lg p-6">
              <h3 className="text-[#1A237E] mb-3">Do students need prior coding experience?</h3>
              <p className="text-[#1A237E]/70">
                Not at all! We offer programs for complete beginners as well as more advanced students. 
                Each camp listing indicates the recommended skill level and age range.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#F5F3EE] rounded-lg p-6">
              <h3 className="text-[#1A237E] mb-3">Can educators use your resources for free?</h3>
              <p className="text-[#1A237E]/70">
                Yes! All curriculum modules, lesson plans, and glossary resources are completely 
                free for educators. We're here to support quality CS education across Southwest Virginia.
              </p>
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#F5F3EE] rounded-lg p-6">
              <h3 className="text-[#1A237E] mb-3">How can I volunteer or teach?</h3>
              <p className="text-[#1A237E]/70">
                We're always looking for volunteers! Select "Volunteer / Teaching Opportunity" 
                in the contact form above, and tell us about your background and availability.
              </p>
            </div>
            
            {/* TO ADD MORE FAQs: Copy the section above from <div className="bg-[#F5F3EE]...
                 to the closing </div>, paste it here, and edit the question and answer */}
          </div>
        </div>
      </section>
    </div>
  );
}