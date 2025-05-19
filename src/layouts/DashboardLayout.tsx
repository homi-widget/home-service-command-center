
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/ui/TopNav";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <div className="flex h-screen w-full">
          <AppSidebar />
          
          <div className="flex flex-col flex-1 overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-y-auto bg-muted/10">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
