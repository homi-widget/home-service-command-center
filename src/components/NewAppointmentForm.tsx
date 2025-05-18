
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
];

export function NewAppointmentForm() {
  const [date, setDate] = useState<Date>();
  const [clientName, setClientName] = useState("");
  const [service, setService] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the form submission, connecting to a backend API
    alert(`Appointment created for ${clientName} on ${date ? format(date, 'PP') : ''} at ${timeSlot}`);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 pt-6">
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="client">Client</Label>
          <Select value={clientName} onValueChange={setClientName}>
            <SelectTrigger id="client">
              <SelectValue placeholder="Select client" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john-doe">John Doe</SelectItem>
              <SelectItem value="jane-smith">Jane Smith</SelectItem>
              <SelectItem value="robert-johnson">Robert Johnson</SelectItem>
              <SelectItem value="new">+ Add New Client</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="service">Service</Label>
          <Select value={service} onValueChange={setService}>
            <SelectTrigger id="service">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15min">15 Minutes Consultation</SelectItem>
              <SelectItem value="30min">30 Minutes Service</SelectItem>
              <SelectItem value="1hour">1 Hour Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid gap-2">
          <Label htmlFor="team-member">Assign to</Label>
          <Select value={assignedTo} onValueChange={setAssignedTo}>
            <SelectTrigger id="team-member">
              <SelectValue placeholder="Select team member" />
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
                {date ? format(date, "PPP") : <span>Pick a date</span>}
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
          <Label htmlFor="time">Time</Label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger id="time">
              <SelectValue placeholder="Select time slot" />
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
          <Input id="notes" placeholder="Add notes about this appointment" />
        </div>
      </div>
      
      <Button type="submit" className="w-full">Create Appointment</Button>
    </form>
  );
}
