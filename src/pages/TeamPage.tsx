
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TeamMemberCard } from "@/components/Team/TeamMemberCard";
import { Plus, Upload } from "lucide-react";

const TeamPage = () => {
  // Sample team members data
  const teamMembers = [
    {
      name: 'Mike Richards',
      email: 'mike.richards@example.com',
      phone: '(555) 123-4567',
      role: 'Technicien Senior',
      startAddress: '123 Rue de la Paix, Paris',
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
      role: 'Technicien',
      startAddress: '45 Avenue Victor Hugo, Lyon',
    },
    {
      name: 'Alex Williams',
      email: 'alex.williams@example.com',
      phone: '(555) 456-7890',
      role: 'Technicien Junior',
      startAddress: '8 Rue du Commerce, Marseille',
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Équipe</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un membre
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter un membre à l'équipe</DialogTitle>
              <DialogDescription>
                Ajoutez un nouveau membre à votre équipe. Il recevra un email d'invitation.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nom
                </Label>
                <Input
                  id="name"
                  placeholder="Nom complet"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Adresse email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  placeholder="Numéro de téléphone"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Rôle
                </Label>
                <Input
                  id="role"
                  placeholder="Titre ou rôle"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="startAddress" className="text-right">
                  Adresse de départ
                </Label>
                <Input
                  id="startAddress"
                  placeholder="Adresse de début de journée"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">
                  Avatar
                </Label>
                <div className="col-span-3">
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Télécharger une photo
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Ajouter le membre</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            email={member.email}
            phone={member.phone}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
