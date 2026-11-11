import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TypingEffect } from "@/components/TypingEffect";
import { FounderModal } from "@/components/FounderModal";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { 
  Users, 
  Target, 
  Star, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronUp,
  Menu,
  X
} from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const programDetails = (
  <div className="bg-gray-50 p-4 rounded-lg">
    <strong>Duration:</strong> 8 weeks | <strong>Class Size:</strong> 5-8 students
  </div>
);

const navigationSections = ["home", "about", "program", "testimonials", "register", "contact"];

const Landing = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState("beginner");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const typingPhrases = [
    "effective communication.",
    "strong leadership.", 
    "a resilient mindset.",
    "debate skills."
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-20">
          <img 
              src="/imgs/logo-full.png" 
              alt="Speak Up To Lead" 
              className="h-12 sm:h-16 w-auto"
            />
            
            {/* Desktop Menu */}
            <div className="hidden gap-4 md:flex lg:gap-8">
              {navigationSections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-gray-400 transition-all ease-in-out uppercase text-sm font-semibold tracking-wide"
                >
                  {item === 'about' ? 'About Us' : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigationSections.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-700 hover:text-primary transition-colors capitalize py-2"
                >
                  {item === 'about' ? 'About Us' : item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-left max-w-6xl">
          <h1 className="text-3xl md:text-6xl font-semibold mb-10 animate-slide-up">
            <div className="mb-0.5">Empowering students with</div>
            <TypingEffect 
              staticText=""
              phrases={typingPhrases}
              className="leading-tight"
            />
          </h1>
          <p className="text-lg md:text-2xl mb-12 max-w-3xl animate-fade-in opacity-90">
            We are building confident speakers and tomorrow's leaders through our proven public speaking program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary px-8 py-3 text-base sm:text-lg backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to transforming students into confident communicators and effective leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Our Mission */}
            <Card className="card-shadow text-center">
              <CardHeader>
                <Target className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower students to overcome their fear of public speaking and develop the 
                  communication skills necessary to become effective leaders in their communities.
                </p>
              </CardContent>
            </Card>

            {/* What We Do */}
            <Card className="card-shadow text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We provide structured public speaking programs, leadership workshops, and mentorship 
                  opportunities designed specifically for student development and growth.
                </p>
              </CardContent>
            </Card>

            {/* Meet the Founder */}
            <Card className="card-shadow text-center cursor-pointer" onClick={() => setIsFounderModalOpen(true)}>
              <CardHeader>
                <Star className="w-12 h-12 text-secondary mx-auto mb-4" />
                <CardTitle className="text-primary">Meet the Founder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn about our founder's journey and passion for empowering young speakers.
                </p>
                <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                  Read Bio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Structured learning paths designed to build confidence and leadership skills at every level
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" value={activeProgram} onValueChange={setActiveProgram} className="mb-12">
              <AccordionItem value="beginner" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary">Foundation Level (Grades 4-10)</h3>
                    <p className="text-gray-600">Building basic communication confidence</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our foundation program introduces students to the basics of public speaking 
                      through a variety of activities and weekly speeches.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Introduction to voice projection and clarity</li>
                      <li>Storytelling techniques</li>
                      <li>Building comfort with audience interaction</li>
                      <li>Impromptu speaking</li>
                    </ul>
                    {programDetails}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="intermediate" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary">Intermediate Level (Grades 6-11)</h3>
                    <p className="text-gray-600">Business pitches and persuasive speaking</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">Students develop a business idea and learn to present it in a clear, persuasive pitch.</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Identify a customer problem and explain how the business solves it</li>
                      <li>Structure a pitch around the strongest selling points</li>
                      <li>Practice pitch delivery and answer audience questions</li>
                    </ul>
                    {programDetails}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advanced" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary">Advanced Level (Grades 8-11)</h3>
                    <p className="text-gray-600">Congressional Debate and Model United Nations</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">Students practice public speaking and advocacy through Congressional Debate and Model United Nations (MUN).</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Research legislation and build evidence-based arguments</li>
                      <li>Deliver speeches and respond to opposing views</li>
                      <li>Represent a country, negotiate with delegates, and draft resolutions</li>
                    </ul>
                    {programDetails}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">What is the class schedule?</h4>
                  <p className="text-gray-600 text-sm">Classes meet once per week for 60-90 minutes, with flexible scheduling options available.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Are materials provided?</h4>
                  <p className="text-gray-600 text-sm">Yes, all learning materials, workbooks, and resources are included in the program fee.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">How are classes conducted?</h4>
                  <p className="text-gray-600 text-sm">Sessions are held online via Google Meet; all you need to attend class is a laptop and a good Internet connection!</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">What does a typical class look like?</h4>
                  <p className="text-gray-600 text-sm">Every student presents an individual speech, with feedback from his/her classmates, and the teacher, regarding improvements to their speech, or things they did well.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Register Section */}
      <section id="register" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join today to transform your communication skills and leadership potential
          </p>
          <Button 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
            onClick={() => window.open('https://forms.gle/zyXuRXykDiN3wskR9')}
          >
            Register Now
            <ArrowRight className="ml-2 h-5 w-5 slide-arrow" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to learn more about our programs</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-primary mb-6">Send us a Message</h3>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Phone</p>
                    <a href="tel:+17328323050" className="text-gray-600 hover:underline">(732) 832-3050</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Email</p>
                    <p className="text-gray-600">info@speakuptolead.org</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e1e49] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          

          <p className="text-white">
            © 2024-26 Speak Up To Lead. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-secondary text-white rounded-full shadow-lg hover:bg-secondary/90 transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6 mx-auto" />
      </button>

      {/* Founder Modal */}
      <FounderModal 
        isOpen={isFounderModalOpen} 
        onClose={() => setIsFounderModalOpen(false)} 
      />

    </div>
  );
};

export default Landing;
