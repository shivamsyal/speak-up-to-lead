import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FounderModal = ({ isOpen, onClose }: FounderModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
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
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shrink-0">
                JD
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-primary mb-2">Jane Doe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Jane is a passionate educator and public speaking coach with over 10 years of experience 
                  helping students overcome their fear of speaking. She founded Speak Up To Lead after 
                  witnessing the transformative power of effective communication in her own students. 
                  Jane holds a Master's degree in Communication Studies and is a certified Toastmasters trainer.
                </p>
                
                <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <p><strong>Experience:</strong> 10+ years in education</p>
                  <p><strong>Certification:</strong> Toastmasters DTM</p>
                  <p><strong>Specialty:</strong> Youth leadership development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};