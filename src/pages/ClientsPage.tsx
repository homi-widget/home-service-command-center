
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search } from "lucide-react";
import { ClientCard } from "@/components/Clients/ClientCard";

const ClientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample clients data
  const clients = [
    {
      name: 'Jean Dupont',
      email: 'jean.dupont@exemple.com',
      phone: '06 12 34 56 78',
      address: '123 Rue Principale, Paris',
    },
    {
      name: 'Marie Durand',
      email: 'marie.durand@exemple.com',
      phone: '06 98 76 54 32',
      address: '456 Avenue des Champs, Paris',
    },
    {
      name: 'Robert Martin',
      email: 'robert.martin@exemple.com',
      phone: '06 45 67 89 01',
      address: '789 Rue de la Seine, Paris',
    },
    {
      name: 'Émilie Wilson',
      email: 'emilie.wilson@exemple.com',
      phone: '06 56 78 90 12',
      address: '101 Boulevard St-Michel, Paris',
    },
    {
      name: 'Michel Brun',
      email: 'michel.brun@exemple.com',
      phone: '06 23 45 67 89',
      address: '202 Rue du Cèdre, Paris',
    },
    {
      name: 'Sophie Dubois',
      email: 'sophie.dubois@exemple.com',
      phone: '06 34 56 78 90',
      address: '303 Avenue des Érables, Paris',
    },
  ];
  
  // Filter clients based on search term
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.phone.includes(searchTerm) ||
    client.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Clients</h1>
        
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Rechercher des clients..." 
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ajouter Client
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Ajouter un Client</DialogTitle>
                <DialogDescription>
                  Entrez les détails du nouveau client.
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
                  <Label htmlFor="address" className="text-right">
                    Adresse
                  </Label>
                  <Input
                    id="address"
                    placeholder="Adresse complète"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Ajouter Client</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {filteredClients.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium">Aucun client trouvé</h3>
          <p className="text-muted-foreground">Essayez d'ajuster vos termes de recherche</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredClients.map((client, index) => (
            <ClientCard
              key={index}
              name={client.name}
              email={client.email}
              phone={client.phone}
              address={client.address}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
