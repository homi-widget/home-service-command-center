
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/ui/TopNav";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

// Create a wrapper component to access the sidebar context
function DashboardContent() {
  const sidebar = useSidebar();
  const collapsed = sidebar?.state === "collapsed";

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      
      <div className={`flex flex-col flex-1 transition-all duration-300 ${collapsed ? "ml-16" : "ml-0"}`}>
        <TopNav />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <DashboardContent />
      </div>
    </SidebarProvider>
  );
}
