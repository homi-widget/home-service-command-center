
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Today's Appointments
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground mt-1">+2 from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Clients
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground mt-1">+3 this week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Working Hours
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32h</div>
            <p className="text-xs text-muted-foreground mt-1">This week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,845</div>
            <p className="text-xs text-muted-foreground mt-1">+12% from last month</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Today's schedule and upcoming appointments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>May 18, 2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                time: "10:00 AM - 11:30 AM",
                title: "Plumbing Service",
                client: "John Doe",
                teamMember: "Mike Richards",
                address: "123 Main St, Springfield"
              },
              {
                time: "1:00 PM - 2:00 PM",
                title: "Initial Consultation",
                client: "Sarah Johnson",
                teamMember: "Alex Williams",
                address: "456 Oak Ave, Springfield"
              },
              {
                time: "3:30 PM - 5:00 PM",
                title: "Maintenance Service",
                client: "Robert Davis",
                teamMember: "Mike Richards",
                address: "789 Elm St, Springfield"
              }
            ].map((appointment, index) => (
              <div key={index} className="flex gap-4 items-start pb-4 border-b last:border-0">
                <div className="w-24 flex-shrink-0">
                  <p className="text-sm font-medium">{appointment.time}</p>
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
            <CardTitle>Team Availability</CardTitle>
            <CardDescription>Today's status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Mike Richards",
                status: "Available",
                appointments: 2,
                hours: [9, 17]
              },
              {
                name: "Sarah Johnson",
                status: "Busy",
                appointments: 4,
                hours: [10, 18]
              },
              {
                name: "Alex Williams",
                status: "Out of Office",
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
                      {member.status === "Available" ? (
                        <span className="text-green-600 font-medium">{member.status}</span>
                      ) : member.status === "Busy" ? (
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
                    {member.appointments} appointments
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
          <CardTitle>Recent Payments</CardTitle>
          <CardDescription>Last 5 payments received</CardDescription>
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
      </Card>
    </div>
  );
};

export default Index;
