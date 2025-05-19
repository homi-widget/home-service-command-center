
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
    <div className="team-member-card p-4 border rounded-lg bg-card shadow-sm flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-brand-blue text-white">{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm">{email}</p>
        <p className="text-sm">{phone}</p>
        {startAddress && (
          <p className="text-xs text-muted-foreground flex items-center mt-1">
            <MapPin className="h-3 w-3 mr-1" /> {startAddress}
          </p>
        )}
      </div>
      
      <div className="flex gap-2">
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
