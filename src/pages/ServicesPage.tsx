
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { ServiceCard } from "@/components/Services/ServiceCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ServicesPage = () => {
  // Sample services categorized with urgency levels
  const serviceCategories = {
    consultation: [
      { title: 'Réunion 15 Minutes', duration: '15 min', price: 0, urgency: "low" as const },
      { title: 'Réunion 30 Minutes', duration: '30 min', price: 0, urgency: "low" as const },
      { title: 'Réunion 60 Minutes', duration: '60 min', price: 0, urgency: "low" as const },
    ],
    standard: [
      { title: 'Service Standard', duration: '60 min', price: 75, urgency: "low" as const },
      { title: 'Service Avancé', duration: '90 min', price: 120, urgency: "medium" as const },
      { title: 'Service Premium', duration: '120 min', price: 180, urgency: "medium" as const },
    ],
    emergency: [
      { title: 'Intervention Urgente', duration: '60 min', price: 150, urgency: "high" as const },
      { title: 'Intervention Hors Horaires', duration: '90 min', price: 200, urgency: "high" as const },
    ],
    maintenance: [
      { title: 'Maintenance Régulière', duration: '45 min', price: 60, urgency: "low" as const },
      { title: 'Inspection Système', duration: '30 min', price: 40, urgency: "low" as const },
    ]
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Services</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Ajouter Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Ajouter Service</DialogTitle>
              <DialogDescription>
                Créez un nouveau service que vos clients pourront réserver.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Titre
                </Label>
                <Input
                  id="title"
                  placeholder="Nom du service"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Durée
                </Label>
                <Input
                  id="duration"
                  placeholder="ex., 60 min"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Prix
                </Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="0.00"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  placeholder="Description du service"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Catégorie
                </Label>
                <Input
                  id="category"
                  placeholder="Catégorie de service"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="urgency" className="text-right">
                  Niveau d'urgence
                </Label>
                <Select defaultValue="low">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Sélectionner un niveau d'urgence" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">Haute</SelectItem>
                    <SelectItem value="medium">Moyenne</SelectItem>
                    <SelectItem value="low">Basse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Ajouter Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Tous les Services</TabsTrigger>
          <TabsTrigger value="consultation">Consultation</TabsTrigger>
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="emergency">Urgence</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...serviceCategories.consultation, ...serviceCategories.standard, ...serviceCategories.emergency, ...serviceCategories.maintenance].map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                urgency={service.urgency}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="consultation" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.consultation.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                urgency={service.urgency}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="standard" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.standard.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                urgency={service.urgency}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="emergency" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.emergency.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                urgency={service.urgency}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="maintenance" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.maintenance.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                urgency={service.urgency}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesPage;
