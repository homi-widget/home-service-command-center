
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save } from "lucide-react";

const WorkingHoursPage = () => {
  // Time slots from 7 AM to 9 PM
  const startTimeOptions = Array.from({ length: 15 }).map((_, i) => {
    const hour = i + 7;
    return {
      value: `${hour}:00`,
      label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
    };
  });
  
  const endTimeOptions = Array.from({ length: 15 }).map((_, i) => {
    const hour = i + 8;
    return {
      value: `${hour}:00`,
      label: `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
    };
  });
  
  const days = [
    { name: 'Monday', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Tuesday', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Wednesday', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Thursday', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Friday', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Saturday', enabled: false, start: '10:00', end: '15:00' },
    { name: 'Sunday', enabled: false, start: '10:00', end: '15:00' }
  ];
  
  // Team members
  const teamMembers = [
    { name: 'Team Default', id: 'team' },
    { name: 'Mike Richards', id: 'mike' },
    { name: 'Sarah Johnson', id: 'sarah' },
    { name: 'Alex Williams', id: 'alex' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Working Hours</h1>
      
      <Tabs defaultValue="team">
        <div className="flex justify-between items-center mb-6">
          <TabsList>
            {teamMembers.map((member) => (
              <TabsTrigger key={member.id} value={member.id}>
                {member.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>
        
        {teamMembers.map((member) => (
          <TabsContent key={member.id} value={member.id} className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>{member.id === 'team' ? 'Default Business Hours' : `${member.name}'s Working Hours`}</CardTitle>
                <CardDescription>
                  {member.id === 'team' 
                    ? 'These hours apply to all team members by default.'
                    : 'Individual working hours override the team default schedule.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {days.map((day) => (
                    <div key={day.name} className="flex items-center gap-4">
                      <div className="w-32">
                        <div className="flex items-center gap-2">
                          <Switch id={`${member.id}-${day.name}`} checked={day.enabled} />
                          <Label htmlFor={`${member.id}-${day.name}`}>{day.name}</Label>
                        </div>
                      </div>
                      
                      {day.enabled ? (
                        <div className="flex flex-1 items-center gap-4">
                          <Select defaultValue={day.start}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Start time" />
                            </SelectTrigger>
                            <SelectContent>
                              {startTimeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <span>to</span>
                          <Select defaultValue={day.end}>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="End time" />
                            </SelectTrigger>
                            <SelectContent>
                              {endTimeOptions.map(option => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      ) : (
                        <div className="text-muted-foreground">
                          Not working
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {member.id === 'team' && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Break Time Settings</CardTitle>
                  <CardDescription>
                    Configure standard break times for your team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-32">
                        <div className="flex items-center gap-2">
                          <Switch id="lunch-break" checked={true} />
                          <Label htmlFor="lunch-break">Lunch Break</Label>
                        </div>
                      </div>
                      
                      <div className="flex flex-1 items-center gap-4">
                        <Select defaultValue="12:00">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Start time" />
                          </SelectTrigger>
                          <SelectContent>
                            {startTimeOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span>to</span>
                        <Select defaultValue="13:00">
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="End time" />
                          </SelectTrigger>
                          <SelectContent>
                            {endTimeOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default WorkingHoursPage;
