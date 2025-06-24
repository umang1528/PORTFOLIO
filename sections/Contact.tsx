import React, { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';

const PhoneIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.018-.991-.053-1.464l-.094-.663a1.125 1.125 0 00-1.296-.948l-1.995.421c-.57.121-1.173-.027-1.57-.425L14.09 14.09a1.875 1.875 0 00-2.652 0l-.617.618a3.375 3.375 0 01-4.773 0L4.05 11.95a3.375 3.375 0 010-4.773l.618-.617a1.875 1.875 0 000-2.652L3.23 1.905a1.125 1.125 0 00-.948-1.296l-.663-.094c-.473-.035-.948-.053-1.464-.053H1.5A2.25 2.25 0 00-2.25 6.75v.003z" />
</svg>
);

const EmailIconSolid: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${className}`}>
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const LocationPinIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>
);


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submittgyufed:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); 
  };

  return (
    <AnimatedSection className="py-20 lg:py-32 bg-brand-dark" id="contact"> {/* Use brand-dark */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-accent mb-4">Get In Touch</h2>
          <p className="text-lg text-brand-foreground-muted max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <AnimatedSection animationType="slide-in-left" className="lg:w-2/3 bg-brand-card p-8 rounded-xl shadow-2xl border border-brand-primary/10">
            <h3 className="text-2xl font-semibold text-brand-foreground mb-6">Send Me a Message</h3>
            {isSubmitted && (
              <div className="mb-4 p-3 bg-brand-secondary/20 text-brand-secondary rounded-md text-center animate-fade-in-up">
                Thank you! Your message has been sent. I'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-foreground-muted mb-1">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required 
                       className="w-full px-4 py-2.5 bg-brand-dark border border-brand-primary/20 rounded-md text-brand-foreground focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-foreground-muted mb-1">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required
                       className="w-full px-4 py-2.5 bg-brand-dark border border-brand-primary/20 rounded-md text-brand-foreground focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-brand-foreground-muted mb-1">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required
                       className="w-full px-4 py-2.5 bg-brand-dark border border-brand-primary/20 rounded-md text-brand-foreground focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-foreground-muted mb-1">Message</label>
                <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required
                          className="w-full px-4 py-2.5 bg-brand-dark border border-brand-primary/20 rounded-md text-brand-foreground focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-shadow"></textarea>
              </div>
              <div>
                <button type="submit" 
                        data-cursor-interactive="true"
                        className="w-full bg-brand-primary hover:opacity-80 text-brand-button-text font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </AnimatedSection>

          <AnimatedSection animationType="slide-in-right" className="lg:w-1/3 space-y-8">
            <h3 className="text-2xl font-semibold text-brand-foreground mb-6">Contact Information</h3>
            <div className="bg-brand-card p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-primary/10">
              <div className="flex items-start space-x-4 mb-5">
                <EmailIconSolid className="w-7 h-7 text-brand-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-brand-foreground">Email</h4>
                  <a href="mailto:designer@example.com" data-cursor-interactive="true" className="text-brand-accent hover:opacity-80 transition-opacity">designer@example.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-4 mb-5">
                <PhoneIcon className="w-7 h-7 text-brand-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-brand-foreground">Phone</h4>
                  <a href="tel:+1234567890" data-cursor-interactive="true" className="text-brand-accent hover:opacity-80 transition-opacity">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LocationPinIcon className="w-7 h-7 text-brand-accent mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-brand-foreground">Location</h4>
                  <p className="text-brand-foreground-muted">City, Country (Available for remote work)</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-card p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-brand-primary/10">
                <h4 className="text-lg font-medium text-brand-foreground mb-3">Follow Me</h4>
                 <a href="https://linkedin.com/in/designerprofile" data-cursor-interactive="true" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:opacity-80 transition-opacity block mb-2">LinkedIn Profile</a>
                 <a href="https://instagram.com/designerprofile" data-cursor-interactive="true" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:opacity-80 transition-opacity block">Instagram Showcase</a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;