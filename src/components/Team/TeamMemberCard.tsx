
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  email: string;
  phone: string;
  role: string;
  startAddress?: string;
  avatarUrl?: string;
}

export function TeamMemberCard({ name, email, phone, role, startAddress, avatarUrl }: TeamMemberProps) {
  // Get initials from name
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="team-member-card flex items-center bg-card p-4 rounded-lg shadow-sm border border-border">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-brand-blue text-white">{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 ml-4 overflow-hidden">
        <h3 className="font-medium text-foreground truncate">{name}</h3>
        <p className="text-sm text-muted-foreground truncate">{role}</p>
        {startAddress && (
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <MapPin className="h-3 w-3 mr-1 flex-shrink-0" /> 
            <span className="truncate">{startAddress}</span>
          </p>
        )}
      </div>
      
      <div className="flex gap-2 ml-2 flex-shrink-0">
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Envoyer un email">
          <Mail className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Appeler">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Voir le calendrier">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
