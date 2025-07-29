import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form action="https://formsubmit.co/info@speakuptolead.org" method="POST" className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-secondary/20"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="transition-all duration-200 focus:ring-2 focus:ring-secondary/20"
          />
        </div>
      </div>
      <input type="hidden" name="_replyto" value="email" />

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          className="transition-all duration-200 focus:ring-2 focus:ring-secondary/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="resize-none transition-all duration-200 focus:ring-2 focus:ring-secondary/20"
        />
      </div>

      <Button
        type="submit"
        className="w-full btn-gradient text-white font-semibold py-3 group"
      >
        <>
          Send Message
          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </>
      </Button>
    </form>
  );
};