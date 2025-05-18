
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { ServiceCard } from "@/components/Services/ServiceCard";

const ServicesPage = () => {
  // Sample services categorized
  const serviceCategories = {
    main: [
      { title: '15 Minutes Meeting', duration: '15 min', price: 0 },
      { title: '30 Minutes Meeting', duration: '30 min', price: 0 },
      { title: '1 Hour Meeting', duration: '60 min', price: 0 },
    ],
    standard: [
      { title: 'Basic Service', duration: '60 min', price: 75, color: '#1a73e8' },
      { title: 'Standard Service', duration: '90 min', price: 120, color: '#fbbc04' },
      { title: 'Premium Service', duration: '120 min', price: 180, color: '#ea4335' },
    ],
    emergency: [
      { title: 'Emergency Service', duration: '60 min', price: 150, color: '#ea4335' },
      { title: 'After-Hours Service', duration: '90 min', price: 200, color: '#ea4335' },
    ],
    maintenance: [
      { title: 'Routine Maintenance', duration: '45 min', price: 60, color: '#34a853' },
      { title: 'System Inspection', duration: '30 min', price: 40, color: '#34a853' },
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
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Service</DialogTitle>
              <DialogDescription>
                Create a new service that your clients can book.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  placeholder="Service name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="duration" className="text-right">
                  Duration
                </Label>
                <Input
                  id="duration"
                  placeholder="e.g., 60 min"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
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
                  placeholder="Service description"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="category" className="text-right">
                  Category
                </Label>
                <Input
                  id="category"
                  placeholder="Service category"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Service</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Services</TabsTrigger>
          <TabsTrigger value="meetings">Consultation</TabsTrigger>
          <TabsTrigger value="standard">Standard</TabsTrigger>
          <TabsTrigger value="emergency">Emergency</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[...serviceCategories.main, ...serviceCategories.standard, ...serviceCategories.emergency, ...serviceCategories.maintenance].map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                color={service.color}
              />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="meetings" className="mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {serviceCategories.main.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                duration={service.duration}
                price={service.price}
                color="#1a73e8"
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
                color={service.color}
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
                color={service.color}
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
                color={service.color}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ServicesPage;
