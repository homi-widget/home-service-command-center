
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, DollarSign, ReceiptText, Settings, CirclePlus } from "lucide-react";

const PaymentsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Payments</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$8,459.00</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Pending Payments
            </CardTitle>
            <ReceiptText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">$450.00 total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Payment Methods
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">Active payment options</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="transactions">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Payments received in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 font-medium">Client</th>
                      <th className="pb-2 font-medium">Service</th>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium text-right">Amount</th>
                      <th className="pb-2 font-medium text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      {
                        client: "John Doe",
                        service: "Plumbing Service",
                        date: "May 17, 2025",
                        amount: 180.00,
                        status: "Paid"
                      },
                      {
                        client: "Sarah Johnson",
                        service: "Initial Consultation",
                        date: "May 16, 2025",
                        amount: 75.00,
                        status: "Paid"
                      },
                      {
                        client: "Robert Davis",
                        service: "Maintenance Service",
                        date: "May 15, 2025",
                        amount: 220.00,
                        status: "Paid"
                      },
                      {
                        client: "Emma Wilson",
                        service: "Emergency Service",
                        date: "May 14, 2025",
                        amount: 350.00,
                        status: "Pending"
                      },
                      {
                        client: "Michael Brown",
                        service: "Regular Inspection",
                        date: "May 13, 2025",
                        amount: 120.00,
                        status: "Paid"
                      },
                      {
                        client: "Jessica Taylor",
                        service: "System Repair",
                        date: "May 12, 2025",
                        amount: 280.00,
                        status: "Paid"
                      },
                      {
                        client: "William Anderson",
                        service: "Emergency Service",
                        date: "May 10, 2025",
                        amount: 320.00,
                        status: "Paid"
                      },
                      {
                        client: "David Wilson",
                        service: "Maintenance Service",
                        date: "May 8, 2025",
                        amount: 190.00,
                        status: "Pending"
                      }
                    ].map((payment, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3">{payment.client}</td>
                        <td className="py-3">{payment.service}</td>
                        <td className="py-3">{payment.date}</td>
                        <td className="py-3 text-right">${payment.amount.toFixed(2)}</td>
                        <td className="py-3 text-right">
                          {payment.status === "Paid" ? (
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                              {payment.status}
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">
                              {payment.status}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Download CSV</Button>
              <Button variant="outline">View All</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment-methods" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure how you accept payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border rounded-lg p-4 bg-brand-blue/5 border-brand-blue">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Credit Card</h3>
                      <p className="text-sm text-muted-foreground">Accept payments via Stripe</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Active</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" className="w-8 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" alt="Mastercard" className="w-8 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="Amex" className="w-8 h-6" />
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">Accept payments via PayPal</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactive</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Apple Pay</h3>
                      <p className="text-sm text-muted-foreground">Accept Apple Pay payments</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactive</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Google Pay</h3>
                      <p className="text-sm text-muted-foreground">Accept Google Pay payments</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactive</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" className="gap-2">
                  <CirclePlus className="h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
              <CardDescription>Configure payment preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Currency</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-brand-blue bg-brand-blue/5">USD ($)</Button>
                  <Button variant="outline">EUR (€)</Button>
                  <Button variant="outline">GBP (£)</Button>
                  <Button variant="outline">CAD ($)</Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Invoice Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Automatic Invoicing</h4>
                      <p className="text-sm text-muted-foreground">Send invoices automatically when services are completed</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Payment Reminders</h4>
                      <p className="text-sm text-muted-foreground">Send reminders for unpaid invoices</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Receipt Generation</h4>
                      <p className="text-sm text-muted-foreground">Generate receipts automatically after payment</p>
                    </div>
                    <Switch checked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2">
                <Settings className="h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsPage;
