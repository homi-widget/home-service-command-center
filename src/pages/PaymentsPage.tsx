
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { CreditCard, DollarSign, ReceiptText, Settings, CirclePlus } from "lucide-react";
import { DateTimeDisplay } from "@/components/DateTimeDisplay";

const PaymentsPage = () => {
  // Sample payments data
  const transactions = [
    {
      client: "Jean Dupont",
      service: "Service de Plomberie",
      date: "2025-05-17T10:30:00",
      amount: 180.00,
      status: "Payé"
    },
    {
      client: "Sophie Durand",
      service: "Consultation Initiale",
      date: "2025-05-16T14:15:00",
      amount: 75.00,
      status: "Payé"
    },
    {
      client: "Robert Martin",
      service: "Service de Maintenance",
      date: "2025-05-15T09:00:00",
      amount: 220.00,
      status: "Payé"
    },
    {
      client: "Emma Wilson",
      service: "Service Urgent",
      date: "2025-05-14T17:45:00",
      amount: 350.00,
      status: "En Attente"
    },
    {
      client: "Michel Brun",
      service: "Inspection Régulière",
      date: "2025-05-13T11:30:00",
      amount: 120.00,
      status: "Payé"
    },
    {
      client: "Jessica Taylor",
      service: "Réparation Système",
      date: "2025-05-12T13:00:00",
      amount: 280.00,
      status: "Payé"
    },
    {
      client: "William Anderson",
      service: "Service Urgent",
      date: "2025-05-10T08:15:00",
      amount: 320.00,
      status: "Payé"
    },
    {
      client: "David Wilson",
      service: "Service de Maintenance",
      date: "2025-05-08T15:30:00",
      amount: 190.00,
      status: "En Attente"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Paiements</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenu Total
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.459,00 €</div>
            <p className="text-xs text-muted-foreground mt-1">+12% par rapport au mois dernier</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Paiements en Attente
            </CardTitle>
            <ReceiptText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground mt-1">450,00 € au total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Moyens de Paiement
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground mt-1">Options de paiement actives</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="transactions">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="payment-methods">Moyens de Paiement</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transactions" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transactions Récentes</CardTitle>
              <CardDescription>Paiements reçus dans les 30 derniers jours</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="pb-2 font-medium">Client</th>
                      <th className="pb-2 font-medium">Service</th>
                      <th className="pb-2 font-medium">Date</th>
                      <th className="pb-2 font-medium text-right">Montant</th>
                      <th className="pb-2 font-medium text-right">Statut</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {transactions.map((payment, index) => (
                      <tr key={index} className="border-b last:border-0">
                        <td className="py-3">{payment.client}</td>
                        <td className="py-3">{payment.service}</td>
                        <td className="py-3">
                          <DateTimeDisplay date={payment.date} />
                        </td>
                        <td className="py-3 text-right">{payment.amount.toFixed(2)} €</td>
                        <td className="py-3 text-right">
                          {payment.status === "Payé" ? (
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
              <Button variant="outline">Télécharger CSV</Button>
              <Button variant="outline">Voir Tout</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="payment-methods" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Moyens de Paiement</CardTitle>
              <CardDescription>Configurer comment vous acceptez les paiements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border rounded-lg p-4 bg-brand-blue/5 border-brand-blue">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Carte de Crédit</h3>
                      <p className="text-sm text-muted-foreground">Accepter les paiements via Stripe</p>
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Actif</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" className="w-8 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" alt="Mastercard" className="w-8 h-6" />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="Amex" className="w-8 h-6" />
                    </div>
                    <Button variant="outline" size="sm">Configurer</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">PayPal</h3>
                      <p className="text-sm text-muted-foreground">Accepter les paiements via PayPal</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactif</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connecter</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Apple Pay</h3>
                      <p className="text-sm text-muted-foreground">Accepter les paiements Apple Pay</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactif</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connecter</Button>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-medium">Google Pay</h3>
                      <p className="text-sm text-muted-foreground">Accepter les paiements Google Pay</p>
                    </div>
                    <div className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">Inactif</div>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm">Connecter</Button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline" className="gap-2">
                  <CirclePlus className="h-4 w-4" />
                  Ajouter un Moyen de Paiement
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres de Paiement</CardTitle>
              <CardDescription>Configurer les préférences de paiement</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Devise</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="border-brand-blue bg-brand-blue/5">EUR (€)</Button>
                  <Button variant="outline">USD ($)</Button>
                  <Button variant="outline">GBP (£)</Button>
                  <Button variant="outline">CAD ($)</Button>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Paramètres de Facturation</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Facturation Automatique</h4>
                      <p className="text-sm text-muted-foreground">Envoyer les factures automatiquement lorsque les services sont terminés</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Rappels de Paiement</h4>
                      <p className="text-sm text-muted-foreground">Envoyer des rappels pour les factures impayées</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Génération de Reçus</h4>
                      <p className="text-sm text-muted-foreground">Générer des reçus automatiquement après le paiement</p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="gap-2">
                <Settings className="h-4 w-4" />
                Enregistrer les Paramètres
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PaymentsPage;
