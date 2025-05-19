
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { useUserPreferences } from "@/context/UserPreferencesContext";

const WorkingHoursPage = () => {
  const { preferences } = useUserPreferences();
  
  // Time slots from 7 AM to 9 PM
  const startTimeOptions = Array.from({ length: 15 }).map((_, i) => {
    const hour = i + 7;
    return {
      value: `${hour}:00`,
      label: preferences.timeFormat === '24h' 
        ? `${hour}:00` 
        : `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
    };
  });
  
  const endTimeOptions = Array.from({ length: 15 }).map((_, i) => {
    const hour = i + 8;
    return {
      value: `${hour}:00`,
      label: preferences.timeFormat === '24h' 
        ? `${hour}:00` 
        : `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
    };
  });
  
  const days = [
    { name: 'Lundi', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Mardi', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Mercredi', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Jeudi', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Vendredi', enabled: true, start: '9:00', end: '17:00' },
    { name: 'Samedi', enabled: false, start: '10:00', end: '15:00' },
    { name: 'Dimanche', enabled: false, start: '10:00', end: '15:00' }
  ];
  
  // Team members
  const teamMembers = [
    { name: 'Horaires par défaut', id: 'team' },
    { name: 'Mike Richards', id: 'mike' },
    { name: 'Sarah Johnson', id: 'sarah' },
    { name: 'Alex Williams', id: 'alex' },
  ];

  // State to track the selected team member
  const [selectedMember, setSelectedMember] = useState('team');

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Heures de Travail</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="w-[250px]">
          <Select value={selectedMember} onValueChange={setSelectedMember}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un membre" />
            </SelectTrigger>
            <SelectContent>
              {teamMembers.map((member) => (
                <SelectItem key={member.id} value={member.id}>
                  {member.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <Button className="gap-2">
          <Save className="h-4 w-4" />
          Enregistrer les modifications
        </Button>
      </div>
      
      {teamMembers.map((member) => (
        <div key={member.id} className={member.id === selectedMember ? "block" : "hidden"}>
          <Card>
            <CardHeader>
              <CardTitle>
                {member.id === 'team' ? 'Heures d\'ouverture par défaut' : `Heures de travail de ${member.name}`}
              </CardTitle>
              <CardDescription>
                {member.id === 'team' 
                  ? 'Ces horaires s\'appliquent par défaut à tous les membres de l\'équipe.'
                  : 'Les heures de travail individuelles remplacent l\'horaire de base de l\'équipe.'}
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
                            <SelectValue placeholder="Heure de début" />
                          </SelectTrigger>
                          <SelectContent>
                            {startTimeOptions.map(option => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span>à</span>
                        <Select defaultValue={day.end}>
                          <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Heure de fin" />
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
                        Jour non travaillé
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
                <CardTitle>Paramètres de pause</CardTitle>
                <CardDescription>
                  Configurer les temps de pause standards pour votre équipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-32">
                      <div className="flex items-center gap-2">
                        <Switch id="lunch-break" checked={true} />
                        <Label htmlFor="lunch-break">Pause déjeuner</Label>
                      </div>
                    </div>
                    
                    <div className="flex flex-1 items-center gap-4">
                      <Select defaultValue="12:00">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Heure de début" />
                        </SelectTrigger>
                        <SelectContent>
                          {startTimeOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <span>à</span>
                      <Select defaultValue="13:00">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Heure de fin" />
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
        </div>
      ))}
    </div>
  );
};

export default WorkingHoursPage;
