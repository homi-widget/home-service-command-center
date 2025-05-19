
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { WeeklyCalendar } from "@/components/Calendar/WeeklyCalendar";
import { DailyCalendar } from "@/components/Calendar/DailyCalendar";
import { MonthlyCalendar } from "@/components/Calendar/MonthlyCalendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CalendarPage = () => {
  const [view, setView] = useState("week");
  const [teamMember, setTeamMember] = useState("all");

  const handleChangeView = (newView: string) => {
    setView(newView);
  };

  const handleChangeTeamMember = (value: string) => {
    setTeamMember(value);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Calendrier</h1>
        
        <div className="flex flex-wrap gap-4">
          <Select value={teamMember} onValueChange={handleChangeTeamMember}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sélectionner membre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les membres</SelectItem>
              <SelectItem value="mike">Mike Richards</SelectItem>
              <SelectItem value="sarah">Sarah Johnson</SelectItem>
              <SelectItem value="alex">Alex Williams</SelectItem>
            </SelectContent>
          </Select>
          
          <Tabs value={view} onValueChange={handleChangeView} className="w-fit">
            <TabsList>
              <TabsTrigger value="day">Jour</TabsTrigger>
              <TabsTrigger value="week">Semaine</TabsTrigger>
              <TabsTrigger value="month">Mois</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button className="ml-auto">
            Aujourd'hui
          </Button>
        </div>
      </div>
      
      <div className="h-[calc(100vh-12rem)]">
        <Tabs value={view} className="h-full">
          <TabsContent value="day" className="mt-0 h-full">
            <DailyCalendar />
          </TabsContent>
          <TabsContent value="week" className="mt-0 h-full">
            <WeeklyCalendar />
          </TabsContent>
          <TabsContent value="month" className="mt-0 h-full">
            <MonthlyCalendar />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CalendarPage;
