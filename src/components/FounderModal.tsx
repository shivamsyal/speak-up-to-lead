import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import founderImage from "@/assets/maansha.jpg";

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderModal = ({ isOpen, onClose }: FounderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[500px] sm:max-w-[750px] p-0 overflow-hidden">
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          <div className="p-6">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold text-primary">Meet Our Founder</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-32 h-32 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shrink-0">
              <img src={founderImage} alt="Founder" className="w-full h-full object-cover rounded-full" />
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">Maansha Syal</h3>
                <p className="text-muted-foreground leading-relaxed">
                Maansha is a rising junior at John P Stevens High School. She has various experiences and accomplishments, 
                qualifying her to excel in teaching the young students to find their voices. This includes:
                </p>
                
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong>Awards:</strong> Woodrow Wilson Award Winner</p>
                  <p><strong>Model UN:</strong> 5x Award Winning MUN Delegate (Regional to International)</p>
                  <p><strong>Congressional Debate:</strong> 3x Regional Competition Winner</p>
                  <p><strong>Public Speaking:</strong> Frequent Speaker at Various Events (State Council, Recognition Ceremonies, etc.)</p>
                  <p><strong>Scouting:</strong> Eagle Scout (6+ years of leadership experience)</p>
                  <p><strong>Community Involvement:</strong> Member of Congressman Pallone's Youth Advisory Council</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};