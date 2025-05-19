
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";
import { DateTimeDisplay } from "@/components/DateTimeDisplay";

const Index = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Tableau de Bord</h1>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Rendez-vous Aujourd'hui
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">+2 par rapport à hier</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Clients Actifs
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground mt-1">+3 cette semaine</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Heures Travaillées
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32h</div>
            <p className="text-xs text-muted-foreground mt-1">Cette semaine</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenus
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 845 €</div>
            <p className="text-xs text-muted-foreground mt-1">+12% par rapport au mois dernier</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Today's schedule and upcoming appointments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Planning du Jour</CardTitle>
            <CardDescription>
              <DateTimeDisplay date={new Date(2025, 4, 18)} showDate={true} showTime={false} />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                time: new Date(2025, 4, 18, 10, 0),
                endTime: new Date(2025, 4, 18, 11, 30),
                title: "Service de Plomberie",
                client: "Jean Dupont",
                teamMember: "Mike Richards",
                address: "123 Rue Principale, Paris"
              },
              {
                time: new Date(2025, 4, 18, 13, 0),
                endTime: new Date(2025, 4, 18, 14, 0),
                title: "Consultation Initiale",
                client: "Sophie Durand",
                teamMember: "Alex Williams",
                address: "456 Avenue des Champs, Paris"
              },
              {
                time: new Date(2025, 4, 18, 15, 30),
                endTime: new Date(2025, 4, 18, 17, 0),
                title: "Service de Maintenance",
                client: "Robert Martin",
                teamMember: "Mike Richards",
                address: "789 Rue de la Seine, Paris"
              }
            ].map((appointment, index) => (
              <div key={index} className="flex gap-4 items-start pb-4 border-b last:border-0">
                <div className="w-24 flex-shrink-0">
                  <p className="text-sm font-medium">
                    <DateTimeDisplay date={appointment.time} showDate={false} showTime={true} />
                    {" - "}
                    <DateTimeDisplay date={appointment.endTime} showDate={false} showTime={true} />
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">{appointment.title}</h4>
                  <p className="text-sm text-muted-foreground">{appointment.client}</p>
                  <p className="text-sm text-muted-foreground">{appointment.teamMember}</p>
                  <p className="text-xs text-muted-foreground mt-1">{appointment.address}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Disponibilité de l'Équipe</CardTitle>
            <CardDescription>Statut du jour</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Mike Richards",
                status: "Disponible",
                appointments: 2,
                hours: [9, 17]
              },
              {
                name: "Sarah Johnson",
                status: "Occupé",
                appointments: 4,
                hours: [10, 18]
              },
              {
                name: "Alex Williams",
                status: "Absent",
                appointments: 0,
                hours: null
              }
            ].map((member, index) => (
              <div key={index} className="flex justify-between items-center pb-4 border-b last:border-0">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white grid place-items-center">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {member.status === "Disponible" ? (
                        <span className="text-green-600 font-medium">{member.status}</span>
                      ) : member.status === "Occupé" ? (
                        <span className="text-amber-600 font-medium">{member.status}</span>
                      ) : (
                        <span className="text-red-600 font-medium">{member.status}</span>
                      )}
                      {member.hours && (
                        <span className="ml-1">
                          ({member.hours[0]}:00 - {member.hours[1]}:00)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                {member.appointments > 0 && (
                  <div className="text-sm">
                    {member.appointments} rendez-vous
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
      
      {/* Recent payments section */}
      <Card>
        <CardHeader>
          <CardTitle>Paiements Récents</CardTitle>
          <CardDescription>5 derniers paiements reçus</CardDescription>
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
                {[
                  {
                    client: "Jean Dupont",
                    service: "Service de Plomberie",
                    date: new Date(2025, 4, 17),
                    amount: 180.00,
                    status: "Payé"
                  },
                  {
                    client: "Sophie Durand",
                    service: "Consultation Initiale",
                    date: new Date(2025, 4, 16),
                    amount: 75.00,
                    status: "Payé"
                  },
                  {
                    client: "Robert Martin",
                    service: "Service de Maintenance",
                    date: new Date(2025, 4, 15),
                    amount: 220.00,
                    status: "Payé"
                  },
                  {
                    client: "Emma Wilson",
                    service: "Service Urgent",
                    date: new Date(2025, 4, 14),
                    amount: 350.00,
                    status: "En Attente"
                  },
                  {
                    client: "Michel Brun",
                    service: "Inspection Régulière",
                    date: new Date(2025, 4, 13),
                    amount: 120.00,
                    status: "Payé"
                  }
                ].map((payment, index) => (
                  <tr key={index} className="border-b last:border-0">
                    <td className="py-3">{payment.client}</td>
                    <td className="py-3">{payment.service}</td>
                    <td className="py-3">
                      <DateTimeDisplay date={payment.date} showTime={false} />
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
      </Card>
    </div>
  );
};

export default Index;
