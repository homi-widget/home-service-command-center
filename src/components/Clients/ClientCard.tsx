
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";

interface ClientProps {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarUrl?: string;
}

export function ClientCard({ name, email, phone, address, avatarUrl }: ClientProps) {
  // Get initials from name
  const initials = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className="client-card">
      <div className="flex items-center gap-3 mb-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-brand-yellow text-secondary-foreground">{initials}</AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {address}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-2 mb-3 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{phone}</span>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Button variant="outline" size="sm" className="w-full mr-2">
          <Calendar className="h-4 w-4 mr-2" />
          Planifier
        </Button>
        <Button size="sm" className="w-full">
          Voir Profil
        </Button>
      </div>
    </div>
  );
}
