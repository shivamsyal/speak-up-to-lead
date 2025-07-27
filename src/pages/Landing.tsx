import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { TypingEffect } from "@/components/TypingEffect";
import { FounderModal } from "@/components/FounderModal";
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

const Landing = () => {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [activeProgram, setActiveProgram] = useState("beginner");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const typingPhrases = [
    "effective communication",
    "strong leadership", 
    "a resilient mindset",
    "debate skills"
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
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-primary">Speak Up To Lead</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'program', 'register', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-primary transition-colors capitalize"
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
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {['home', 'about', 'program', 'register', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-gray-600 hover:text-primary transition-colors capitalize py-2"
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
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-left max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <div className="mb-4">Empowering students with</div>
            <TypingEffect 
              staticText=""
              phrases={typingPhrases}
              className="leading-tight"
            />
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl animate-fade-in opacity-90">
            Building confident speakers and tomorrow's leaders through proven public speaking programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              onClick={() => scrollToSection('program')}
              className="btn-gradient text-white px-8 py-3 text-lg"
            >
              Explore Programs
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('about')}
              className="border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary px-8 py-3 text-lg backdrop-blur-sm"
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
                    <h3 className="text-xl font-semibold text-primary">Foundation Level (Ages 8-12)</h3>
                    <p className="text-gray-600">Building basic communication confidence</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Our foundation program introduces young learners to the basics of public speaking 
                      through fun, interactive activities and games.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Introduction to voice projection and clarity</li>
                      <li>Basic storytelling techniques</li>
                      <li>Show and tell presentations</li>
                      <li>Building comfort with audience interaction</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <strong>Duration:</strong> 8 weeks | <strong>Class Size:</strong> 8-10 students
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="intermediate" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary">Intermediate Level (Ages 13-16)</h3>
                    <p className="text-gray-600">Developing persuasive speaking skills</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Students learn to craft compelling arguments and deliver persuasive presentations 
                      with confidence and clarity.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Speech structure and organization</li>
                      <li>Research and evidence integration</li>
                      <li>Body language and stage presence</li>
                      <li>Handling questions and feedback</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <strong>Duration:</strong> 10 weeks | <strong>Class Size:</strong> 6-8 students
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="advanced" className="border border-gray-200 rounded-lg mb-4">
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="text-left">
                    <h3 className="text-xl font-semibold text-primary">Advanced Level (Ages 17+)</h3>
                    <p className="text-gray-600">Leadership and debate mastery</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Advanced students master debate techniques, leadership communication, 
                      and competitive speaking formats.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                      <li>Advanced debate formats and strategies</li>
                      <li>Leadership communication styles</li>
                      <li>Competition preparation</li>
                      <li>Mentoring younger students</li>
                    </ul>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <strong>Duration:</strong> 12 weeks | <strong>Class Size:</strong> 4-6 students
                    </div>
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
                  <p className="text-gray-600 text-sm">Classes meet once per week for 90 minutes, with flexible scheduling options available.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Are materials provided?</h4>
                  <p className="text-gray-600 text-sm">Yes, all learning materials, workbooks, and resources are included in the program fee.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">What is your refund policy?</h4>
                  <p className="text-gray-600 text-sm">Full refund available within the first two weeks if not completely satisfied.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Do you offer scholarships?</h4>
                  <p className="text-gray-600 text-sm">Yes, need-based scholarships are available. Please contact us for application details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of students who have transformed their communication skills and leadership potential
          </p>
          <Button 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold group"
            onClick={() => window.open('mailto:info@speakuptolead.org?subject=Program Registration')}
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

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
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
                    <p className="text-gray-600">(555) 123-4567</p>
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

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Address</p>
                    <p className="text-gray-600">123 Education Lane<br />Learning City, LC 12345</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-primary mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Speak Up To Lead</h3>
              <p className="text-gray-300 mb-4 max-w-md">
                Empowering the next generation of leaders through effective communication and public speaking skills.
              </p>
              <p className="text-sm text-gray-400">
                A 501(c)(3) nonprofit organization dedicated to youth development.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('program')} className="hover:text-white transition-colors">Programs</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Foundation Level</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Intermediate Level</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Advanced Level</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Scholarships</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Speak Up To Lead. All rights reserved. | 
              <a href="#" className="hover:text-white transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-white transition-colors ml-1">Terms of Service</a>
            </p>
          </div>
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