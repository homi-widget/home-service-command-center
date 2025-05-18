
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TeamMemberCard } from "@/components/Team/TeamMemberCard";
import { Plus, Upload } from "lucide-react";

const TeamPage = () => {
  // Sample team members data
  const teamMembers = [
    {
      name: 'Mike Richards',
      email: 'mike.richards@example.com',
      phone: '(555) 123-4567',
      role: 'Senior Technician',
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      phone: '(555) 987-6543',
      role: 'Technician',
    },
    {
      name: 'Alex Williams',
      email: 'alex.williams@example.com',
      phone: '(555) 456-7890',
      role: 'Junior Technician',
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Team</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Team Member
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Team Member</DialogTitle>
              <DialogDescription>
                Add a new member to your team. They will receive an invitation email.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Full name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input
                  id="phone"
                  placeholder="Phone number"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input
                  id="role"
                  placeholder="Job title or role"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">
                  Avatar
                </Label>
                <div className="col-span-3">
                  <Button variant="outline" className="w-full">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Member</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            name={member.name}
            email={member.email}
            phone={member.phone}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
