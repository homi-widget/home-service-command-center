
import { useState } from 'react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DateTimeDisplay } from "@/components/DateTimeDisplay";
import { useUserPreferences } from "@/context/UserPreferencesContext";

// Sample data - in a real app, this would come from an API
const events = [
  {
    id: 1,
    title: 'Service de Plomberie',
    client: 'Jean Dupont',
    start: new Date(2025, 4, 18, 10, 0),
    end: new Date(2025, 4, 18, 11, 30),
    teamMember: 'Mike Richards',
    color: '#1a73e8',
  },
  {
    id: 2,
    title: 'Consultation',
    client: 'Marie Durand',
    start: new Date(2025, 4, 19, 14, 0),
    end: new Date(2025, 4, 19, 14, 30),
    teamMember: 'Sarah Johnson',
    color: '#fbbc04',
  },
  {
    id: 3,
    title: 'Maintenance Équipement',
    client: 'Robert Martin',
    start: new Date(2025, 4, 20, 13, 0),
    end: new Date(2025, 4, 20, 15, 0),
    teamMember: 'Alex Williams',
    color: '#ea4335',
  }
];

const timeSlots = Array.from({ length: 9 }).map((_, i) => i + 9); // 9 AM to 5 PM

export function WeeklyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 18)); // May 18, 2025
  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start from Monday
  const { preferences } = useUserPreferences();
  
  // Generate the days of the week
  const days = Array.from({ length: 7 }).map((_, i) => {
    return addDays(startDate, i);
  });
  
  const handlePrevWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, -7));
  };
  
  const handleNextWeek = () => {
    setCurrentDate(prevDate => addDays(prevDate, 7));
  };
  
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.start, day));
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {format(startDate, "MMMM yyyy", { locale: fr })}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevWeek}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextWeek}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-8 h-full border rounded-md overflow-hidden">
        {/* Time labels column */}
        <div className="border-r">
          <div className="h-12 border-b flex items-center justify-center font-medium">
            Heure
          </div>
          {timeSlots.map((time) => (
            <div key={time} className="h-20 border-b flex items-center justify-center text-sm text-muted-foreground">
              {preferences.timeFormat === '24h' 
                ? `${time}:00` 
                : `${time % 12 || 12} ${time >= 12 ? 'PM' : 'AM'}`}
            </div>
          ))}
        </div>
        
        {/* Days of the week */}
        {days.map((day) => (
          <div key={day.toString()} className="border-r last:border-r-0">
            <div className="h-12 border-b flex flex-col items-center justify-center">
              <div className="font-medium">{format(day, "EEE", { locale: fr })}</div>
              <div className="text-sm text-muted-foreground">{format(day, "d", { locale: fr })}</div>
            </div>
            
            {/* Time slots */}
            {timeSlots.map((time) => {
              const eventsAtTime = getEventsForDay(day).filter(
                event => event.start.getHours() === time
              );
              
              return (
                <div key={time} className="h-20 border-b relative group">
                  {eventsAtTime.map((event) => (
                    <div 
                      key={event.id}
                      className="calendar-event absolute top-0 left-0 right-0 m-1"
                      style={{ 
                        backgroundColor: event.color,
                        color: '#fff',
                        height: `${(event.end.getHours() - event.start.getHours() + 
                                 (event.end.getMinutes() - event.start.getMinutes()) / 60) * 5}rem`
                      }}
                    >
                      <div className="font-medium">{event.title}</div>
                      <div className="text-xs">{event.client}</div>
                      <div className="text-xs">{event.teamMember}</div>
                    </div>
                  ))}
                  
                  {/* Hover action to add new appointment */}
                  <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <div className="rounded-full w-6 h-6 bg-brand-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100">
                      +
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
