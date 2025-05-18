
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
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '(555) 123-4567',
      address: '123 Main St, Springfield',
    },
    {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 987-6543',
      address: '456 Oak Ave, Springfield',
    },
    {
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      phone: '(555) 456-7890',
      address: '789 Elm St, Springfield',
    },
    {
      name: 'Emily Wilson',
      email: 'emily.wilson@example.com',
      phone: '(555) 567-8901',
      address: '101 Pine Rd, Springfield',
    },
    {
      name: 'Michael Brown',
      email: 'michael.brown@example.com',
      phone: '(555) 234-5678',
      address: '202 Cedar Ln, Springfield',
    },
    {
      name: 'Sarah Davis',
      email: 'sarah.davis@example.com',
      phone: '(555) 345-6789',
      address: '303 Maple Dr, Springfield',
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
              placeholder="Search clients..." 
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Client
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Client</DialogTitle>
                <DialogDescription>
                  Enter the details for your new client.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Full name"
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
                    placeholder="Email address"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Phone number"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="address" className="text-right">
                    Address
                  </Label>
                  <Input
                    id="address"
                    placeholder="Full address"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Add Client</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      
      {filteredClients.length === 0 ? (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium">No clients found</h3>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
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
