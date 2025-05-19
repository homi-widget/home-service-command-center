import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";
import { useUserPreferences, DateFormat, TimeFormat, Currency, Locale } from "@/context/UserPreferencesContext";
import { toast } from "sonner";
import { useState } from "react";

const SettingsPage = () => {
  const { preferences, updatePreferences } = useUserPreferences();
  const [formValues, setFormValues] = useState({
    companyName: "ServiceHub Pro",
    companyEmail: "contact@servicehub.com",
    companyPhone: "(555) 123-4567",
    companyAddress: "123 Main Street, Suite 200, Springfield, IL 62701",
    accountName: "Admin User",
    accountEmail: "admin@company.com",
  });

  const saveCompanyInfo = () => {
    // Simulation d'une sauvegarde
    toast.success("Informations de l'entreprise mises à jour");
  };

  const saveNotificationPreferences = () => {
    toast.success("Préférences de notification mises à jour");
  };

  const saveAccountSettings = () => {
    toast.success("Paramètres du compte mis à jour");
  };

  const handleDateFormatChange = (value: string) => {
    updatePreferences({ dateFormat: value as DateFormat });
    toast.success("Format de date mis à jour");
  };

  const handleTimeFormatChange = (value: string) => {
    updatePreferences({ timeFormat: value as TimeFormat });
    toast.success("Format d'heure mis à jour");
  };

  const handleTimezoneChange = (value: string) => {
    updatePreferences({ timezone: value });
    toast.success("Fuseau horaire mis à jour");
  };

  const handleCurrencyChange = (value: string) => {
    updatePreferences({ currency: value as Currency });
    toast.success("Devise mise à jour");
  };

  const handleLocaleChange = (value: string) => {
    updatePreferences({ locale: value });
    toast.success("Format régional mis à jour");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Paramètres</h1>
      
      <Tabs defaultValue="company">
        <TabsList>
          <TabsTrigger value="company">Entreprise</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Intégrations</TabsTrigger>
          <TabsTrigger value="account">Compte</TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations de l'Entreprise</CardTitle>
              <CardDescription>Informations de base sur votre entreprise</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyName">Nom de l'Entreprise</Label>
                <Input 
                  id="companyName" 
                  placeholder="Nom de votre entreprise" 
                  value={formValues.companyName}
                  onChange={e => setFormValues({...formValues, companyName: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyEmail">Email Professionnel</Label>
                <Input 
                  id="companyEmail" 
                  placeholder="contact@exemple.com" 
                  value={formValues.companyEmail}
                  onChange={e => setFormValues({...formValues, companyEmail: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyPhone">Téléphone Professionnel</Label>
                <Input 
                  id="companyPhone" 
                  placeholder="Votre numéro de téléphone" 
                  value={formValues.companyPhone}
                  onChange={e => setFormValues({...formValues, companyPhone: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyAddress">Adresse Professionnelle</Label>
                <Textarea 
                  id="companyAddress" 
                  placeholder="Adresse de votre entreprise" 
                  value={formValues.companyAddress}
                  onChange={e => setFormValues({...formValues, companyAddress: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label>Logo de l'Entreprise</Label>
                <div className="border border-input rounded-md p-4 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded-md flex items-center justify-center mb-4">
                    Aperçu du Logo
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Télécharger Logo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveCompanyInfo}>Enregistrer les Modifications</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de Notification</CardTitle>
              <CardDescription>Gérer comment vous recevez les notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Nouveaux Rendez-vous</h3>
                    <p className="text-sm text-muted-foreground">Être notifié quand de nouveaux rendez-vous sont planifiés</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="newAppEmail" defaultChecked={true} />
                      <Label htmlFor="newAppEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="newAppSMS" defaultChecked={false} />
                      <Label htmlFor="newAppSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="newAppPush" defaultChecked={true} />
                      <Label htmlFor="newAppPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Rappels de Rendez-vous</h3>
                    <p className="text-sm text-muted-foreground">Rappels concernant les rendez-vous à venir</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="reminderEmail" defaultChecked={true} />
                      <Label htmlFor="reminderEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="reminderSMS" defaultChecked={true} />
                      <Label htmlFor="reminderSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="reminderPush" defaultChecked={true} />
                      <Label htmlFor="reminderPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Annulations</h3>
                    <p className="text-sm text-muted-foreground">Être notifié quand un rendez-vous est annulé</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="cancelEmail" defaultChecked={true} />
                      <Label htmlFor="cancelEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="cancelSMS" defaultChecked={true} />
                      <Label htmlFor="cancelSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="cancelPush" defaultChecked={true} />
                      <Label htmlFor="cancelPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Paiement Reçu</h3>
                    <p className="text-sm text-muted-foreground">Être notifié quand vous recevez un paiement</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="paymentEmail" defaultChecked={true} />
                      <Label htmlFor="paymentEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="paymentSMS" defaultChecked={false} />
                      <Label htmlFor="paymentSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="paymentPush" defaultChecked={true} />
                      <Label htmlFor="paymentPush">Push</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveNotificationPreferences}>Enregistrer les Préférences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Intégrations</CardTitle>
              <CardDescription>Se connecter avec d'autres services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border rounded-lg p-4 bg-brand-blue/5 border-brand-blue">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Google Calendar</h3>
                      <p className="text-sm text-muted-foreground">Synchroniser les rendez-vous avec Google Calendar</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Connecté</div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Déconnecter</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Stripe</h3>
                      <p className="text-sm text-muted-foreground">Traiter les paiements avec Stripe</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Connecté</div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Déconnecter</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Microsoft Outlook</h3>
                      <p className="text-sm text-muted-foreground">Synchroniser les rendez-vous avec Outlook Calendar</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Non Connecté</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connecter</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">QuickBooks</h3>
                      <p className="text-sm text-muted-foreground">Synchroniser les données financières avec QuickBooks</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Non Connecté</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connecter</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres du Compte</CardTitle>
              <CardDescription>Gérer votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="accountName">Votre Nom</Label>
                <Input 
                  id="accountName" 
                  placeholder="Votre nom" 
                  value={formValues.accountName}
                  onChange={e => setFormValues({...formValues, accountName: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="accountEmail">Adresse Email</Label>
                <Input 
                  id="accountEmail" 
                  placeholder="Votre email" 
                  value={formValues.accountEmail}
                  onChange={e => setFormValues({...formValues, accountEmail: e.target.value})}
                />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Mot de Passe</Label>
                <Input id="password" type="password" value="••••••••" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label>Préférences du Compte</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="timezone">Fuseau Horaire</Label>
                    <div className="w-[250px]">
                      <Select 
                        value={preferences.timezone} 
                        onValueChange={handleTimezoneChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un fuseau horaire" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Europe/Paris">Europe/Paris (UTC+01:00)</SelectItem>
                          <SelectItem value="America/New_York">America/New_York (UTC-05:00)</SelectItem>
                          <SelectItem value="America/Los_Angeles">America/Los_Angeles (UTC-08:00)</SelectItem>
                          <SelectItem value="Asia/Tokyo">Asia/Tokyo (UTC+09:00)</SelectItem>
                          <SelectItem value="Australia/Sydney">Australia/Sydney (UTC+10:00)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dateFormat">Format de Date</Label>
                    <div className="w-[250px]">
                      <Select 
                        value={preferences.dateFormat} 
                        onValueChange={handleDateFormatChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un format de date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="timeFormat">Format d'Heure</Label>
                    <div className="w-[250px]">
                      <Select 
                        value={preferences.timeFormat} 
                        onValueChange={handleTimeFormatChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un format d'heure" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24h">24 heures</SelectItem>
                          <SelectItem value="12h">12 heures (AM/PM)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="currency">Devise</Label>
                    <div className="w-[250px]">
                      <Select 
                        value={preferences.currency} 
                        onValueChange={handleCurrencyChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner une devise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EUR">Euro (€)</SelectItem>
                          <SelectItem value="USD">Dollar américain ($)</SelectItem>
                          <SelectItem value="GBP">Livre sterling (£)</SelectItem>
                          <SelectItem value="CAD">Dollar canadien (C$)</SelectItem>
                          <SelectItem value="JPY">Yen japonais (¥)</SelectItem>
                          <SelectItem value="AUD">Dollar australien (A$)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="locale">Format régional</Label>
                    <div className="w-[250px]">
                      <Select 
                        value={preferences.locale} 
                        onValueChange={handleLocaleChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner un format régional" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fr-FR">Français (France)</SelectItem>
                          <SelectItem value="en-US">Anglais (États-Unis)</SelectItem>
                          <SelectItem value="en-GB">Anglais (Royaume-Uni)</SelectItem>
                          <SelectItem value="de-DE">Allemand (Allemagne)</SelectItem>
                          <SelectItem value="es-ES">Espagnol (Espagne)</SelectItem>
                          <SelectItem value="it-IT">Italien (Italie)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Zone Dangereuse</h3>
                <div className="border border-destructive/30 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-destructive">Supprimer le Compte</h4>
                      <p className="text-sm text-muted-foreground">
                        Supprimer définitivement votre compte et toutes les données associées
                      </p>
                    </div>
                    <Button variant="destructive">Supprimer le Compte</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={saveAccountSettings}>Enregistrer les Modifications</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
