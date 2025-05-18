
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { WeeklyCalendar } from "@/components/Calendar/WeeklyCalendar";
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
        <h1 className="text-3xl font-bold">Calendar</h1>
        
        <div className="flex flex-wrap gap-4">
          <Select value={teamMember} onValueChange={handleChangeTeamMember}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select team member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Team Members</SelectItem>
              <SelectItem value="mike">Mike Richards</SelectItem>
              <SelectItem value="sarah">Sarah Johnson</SelectItem>
              <SelectItem value="alex">Alex Williams</SelectItem>
            </SelectContent>
          </Select>
          
          <Tabs value={view} onValueChange={handleChangeView} className="w-fit">
            <TabsList>
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <Button className="ml-auto">
            Today
          </Button>
        </div>
      </div>
      
      <div className="h-[calc(100vh-12rem)]">
        <Tabs value={view} className="h-full">
          <TabsContent value="day" className="mt-0 h-full">
            <div className="bg-muted/20 h-full rounded-md flex items-center justify-center">
              Day view coming soon
            </div>
          </TabsContent>
          <TabsContent value="week" className="mt-0 h-full">
            <WeeklyCalendar />
          </TabsContent>
          <TabsContent value="month" className="mt-0 h-full">
            <div className="bg-muted/20 h-full rounded-md flex items-center justify-center">
              Month view coming soon
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CalendarPage;
