
import { useState } from 'react';
import { format, addDays, startOfMonth, endOfMonth, isSameMonth, isSameDay, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample data - matching the format in WeeklyCalendar
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

export function MonthlyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 18)); // May 18, 2025
  
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = monthStart;
  const endDate = monthEnd;
  
  // Calculate the days to display in the calendar grid
  const startDay = getDay(startDate) || 7; // 0 for Sunday, 1-6 for Monday-Saturday, convert 0 to 7 for better calendar layout
  const daysToDisplay = [];
  
  // Add days from previous month to fill the start of the calendar
  for (let i = 1; i < startDay; i++) {
    const day = addDays(startDate, -i);
    daysToDisplay.unshift(day);
  }
  
  // Add all days of the current month
  let currentDay = startDate;
  while (currentDay <= endDate) {
    daysToDisplay.push(currentDay);
    currentDay = addDays(currentDay, 1);
  }
  
  // Add days from next month to complete the grid (to make a multiple of 7)
  const remainingDays = 7 - (daysToDisplay.length % 7);
  if (remainingDays < 7) {
    for (let i = 1; i <= remainingDays; i++) {
      const day = addDays(endDate, i);
      daysToDisplay.push(day);
    }
  }
  
  const handlePrevMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(prevMonth);
  };
  
  const handleNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(nextMonth);
  };
  
  const getEventsForDay = (day: Date) => {
    return events.filter(event => isSameDay(event.start, day));
  };
  
  // Group days into weeks for the grid
  const weeks = [];
  for (let i = 0; i < daysToDisplay.length; i += 7) {
    weeks.push(daysToDisplay.slice(i, i + 7));
  }
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">
          {format(currentDate, "MMMM yyyy", { locale: fr })}
        </h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={handlePrevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={handleNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 h-full border rounded-md overflow-hidden">
        {/* Day of week headers */}
        {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
          <div key={day} className="p-2 text-center font-medium border-b border-r last:border-r-0">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {weeks.map((week, weekIndex) => (
          week.map((day, dayIndex) => {
            const dayEvents = getEventsForDay(day);
            const isCurrentMonth = isSameMonth(day, currentDate);
            
            return (
              <div 
                key={day.toString()} 
                className={cn(
                  "h-24 md:h-28 p-1 border-b border-r last:border-r-0 relative",
                  !isCurrentMonth && "bg-muted/20 text-muted-foreground"
                )}
              >
                <div className="font-medium text-sm mb-1">
                  {format(day, "d")}
                </div>
                
                {dayEvents.slice(0, 3).map((event) => (
                  <div 
                    key={event.id}
                    className="calendar-event text-xs p-1 mb-0.5 truncate rounded cursor-pointer"
                    style={{ backgroundColor: event.color, color: '#fff' }}
                  >
                    {format(event.start, "HH:mm")} {event.title}
                  </div>
                ))}
                
                {dayEvents.length > 3 && (
                  <div className="text-xs text-muted-foreground mt-0.5">
                    +{dayEvents.length - 3} more
                  </div>
                )}
                
                {/* Hover overlay for adding events */}
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 hover:opacity-100 flex items-center justify-center">
                  <div className="rounded-full w-6 h-6 bg-brand-blue text-white flex items-center justify-center opacity-0 group-hover:opacity-100">
                    +
                  </div>
                </div>
              </div>
            );
          })
        ))}
      </div>
    </div>
  );
}
