
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Upload } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="company">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>
        
        <TabsContent value="company" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Basic information about your business</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" placeholder="Your company name" defaultValue="ServiceHub Pro" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyEmail">Business Email</Label>
                <Input id="companyEmail" placeholder="contact@example.com" defaultValue="contact@servicehub.com" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyPhone">Business Phone</Label>
                <Input id="companyPhone" placeholder="Your phone number" defaultValue="(555) 123-4567" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="companyAddress">Business Address</Label>
                <Textarea id="companyAddress" placeholder="Your business address" defaultValue="123 Main Street, Suite 200, Springfield, IL 62701" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label>Company Logo</Label>
                <div className="border border-input rounded-md p-4 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-muted rounded-md flex items-center justify-center mb-4">
                    Logo Preview
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Upload Logo
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">New Appointments</h3>
                    <p className="text-sm text-muted-foreground">Get notified when new appointments are scheduled</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="newAppEmail" checked={true} />
                      <Label htmlFor="newAppEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="newAppSMS" checked={false} />
                      <Label htmlFor="newAppSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="newAppPush" checked={true} />
                      <Label htmlFor="newAppPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Appointment Reminders</h3>
                    <p className="text-sm text-muted-foreground">Reminders about upcoming appointments</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="reminderEmail" checked={true} />
                      <Label htmlFor="reminderEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="reminderSMS" checked={true} />
                      <Label htmlFor="reminderSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="reminderPush" checked={true} />
                      <Label htmlFor="reminderPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Cancellations</h3>
                    <p className="text-sm text-muted-foreground">Get notified when an appointment is cancelled</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="cancelEmail" checked={true} />
                      <Label htmlFor="cancelEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="cancelSMS" checked={true} />
                      <Label htmlFor="cancelSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="cancelPush" checked={true} />
                      <Label htmlFor="cancelPush">Push</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Payment Received</h3>
                    <p className="text-sm text-muted-foreground">Get notified when you receive a payment</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Switch id="paymentEmail" checked={true} />
                      <Label htmlFor="paymentEmail">Email</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="paymentSMS" checked={false} />
                      <Label htmlFor="paymentSMS">SMS</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="paymentPush" checked={true} />
                      <Label htmlFor="paymentPush">Push</Label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="integrations" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect with other services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border rounded-lg p-4 bg-brand-blue/5 border-brand-blue">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Google Calendar</h3>
                      <p className="text-sm text-muted-foreground">Sync appointments with Google Calendar</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Connected</div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Stripe</h3>
                      <p className="text-sm text-muted-foreground">Process payments with Stripe</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Connected</div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Microsoft Outlook</h3>
                      <p className="text-sm text-muted-foreground">Sync appointments with Outlook Calendar</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Not Connected</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between mb-4">
                    <div>
                      <h3 className="font-medium">QuickBooks</h3>
                      <p className="text-sm text-muted-foreground">Sync financial data with QuickBooks</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Not Connected</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="accountName">Your Name</Label>
                <Input id="accountName" placeholder="Your name" defaultValue="Admin User" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="accountEmail">Email Address</Label>
                <Input id="accountEmail" placeholder="Your email" defaultValue="admin@company.com" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value="••••••••" />
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <Label>Account Preferences</Label>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="timezone">Timezone</Label>
                    <div className="w-[250px]">
                      <Input id="timezone" defaultValue="America/New_York (UTC-05:00)" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <div className="w-[250px]">
                      <Input id="dateFormat" defaultValue="MM/DD/YYYY" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label htmlFor="timeFormat">Time Format</Label>
                    <div className="w-[250px]">
                      <Input id="timeFormat" defaultValue="12-hour (AM/PM)" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium">Danger Zone</h3>
                <div className="border border-destructive/30 rounded-md p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-destructive">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all associated data
                      </p>
                    </div>
                    <Button variant="destructive">Delete Account</Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
