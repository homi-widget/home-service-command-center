
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { useUserPreferences } from "@/context/UserPreferencesContext";

const generateTimeSlots = (use24Hour: boolean) => {
  const slots = [];
  for (let hour = 9; hour <= 17; hour++) {
    for (let minute of [0, 30]) {
      const hourValue = use24Hour ? hour : (hour % 12) || 12;
      const amPm = use24Hour ? "" : (hour >= 12 ? " PM" : " AM");
      slots.push(`${hourValue}:${minute === 0 ? '00' : minute}${amPm}`);
    }
  }
  return slots;
};

export function NewAppointmentForm() {
  const [date, setDate] = useState<Date>();
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const { preferences } = useUserPreferences();
  
  const timeSlots = generateTimeSlots(preferences.timeFormat === "24h");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, connecting to a backend API
    alert(`Rendez-vous créé pour ${clientName} le ${date ? format(date, 'PP', { locale: fr }) : ''} à ${timeSlot}`);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="client">Client</Label>
          <Select value={clientName} onValueChange={setClientName}>
            <SelectTrigger id="client">
              <SelectValue placeholder="Sélectionner un client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john-doe">Jean Dupont</SelectItem>
              <SelectItem value="jane-smith">Marie Durand</SelectItem>
              <SelectItem value="robert-johnson">Robert Martin</SelectItem>
              <SelectItem value="new">+ Ajouter un nouveau client</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="service">Service</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Sélectionner un service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15min">Consultation de 15 minutes</SelectItem>
              <SelectItem value="30min">Service de 30 minutes</SelectItem>
              <SelectItem value="1hour">Service d'une heure</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="team-member">Assigné à</Label>
          <Select value={assignedTo} onValueChange={setAssignedTo}>
            <SelectTrigger id="team-member">
              <SelectValue placeholder="Sélectionner un membre de l'équipe" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mike">Mike Richards</SelectItem>
              <SelectItem value="sarah">Sarah Johnson</SelectItem>
              <SelectItem value="alex">Alex Williams</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: fr }) : <span>Choisir une date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                className="p-3 pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="time">Heure</Label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger id="time">
              <SelectValue placeholder="Sélectionner une heure" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="notes">Notes</Label>
          <Input id="notes" placeholder="Ajouter des notes sur ce rendez-vous" />
        </div>
      </div>
      
      <Button type="submit" className="w-full">Créer un Rendez-vous</Button>
    </form>
  );
}
