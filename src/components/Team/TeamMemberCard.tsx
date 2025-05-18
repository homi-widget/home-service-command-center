
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone } from "lucide-react";

interface TeamMemberProps {
  name: string;
  email: string;
  phone: string;
  role: string;
  avatarUrl?: string;
}

export function TeamMemberCard({ name, email, phone, role, avatarUrl }: TeamMemberProps) {
  // Get initials from name
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="team-member-card">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="bg-brand-blue text-white">{initials}</AvatarFallback>
      </Avatar>
      
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
      
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Send email">
          <Mail className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Call">
          <Phone className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="View calendar">
          <Calendar className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
