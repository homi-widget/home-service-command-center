
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopNav } from "@/components/ui/TopNav";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";

// This component wraps the content and gets the sidebar state
const DashboardContent = () => {
  const sidebar = useSidebar();
  const collapsed = sidebar?.state === "collapsed";
  
  return (
    <div className="flex flex-col flex-1 overflow-hidden transition-all duration-300">
      <TopNav />
      <main className={`flex-1 overflow-y-auto bg-muted/10 transition-all duration-300 ${collapsed ? 'pl-14' : 'pl-0'}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full">
        <div className="flex h-screen w-full">
          <AppSidebar />
          <DashboardContent />
        </div>
      </div>
    </SidebarProvider>
  );
}
