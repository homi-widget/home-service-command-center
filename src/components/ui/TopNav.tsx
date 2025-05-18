
import { Bell, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NewAppointmentForm } from "../NewAppointmentForm";

export function TopNav() {
  return (
    <header className="border-b border-border bg-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-full max-w-lg">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="w-full pl-9 bg-muted/30 border-none"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline-block">New Appointment</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle>New Appointment</SheetTitle>
              <SheetDescription>
                Create a new appointment for a client
              </SheetDescription>
            </SheetHeader>
            <NewAppointmentForm />
          </SheetContent>
        </Sheet>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white grid place-items-center">
            3
          </span>
        </Button>
      </div>
    </header>
  );
}
