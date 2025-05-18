
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Calendar,
  Users,
  User,
  Clock,
  Settings,
  Home,
  CreditCard,
  FileText
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  // Navigation items
  const mainItems = [
    { title: "Dashboard", url: "/", icon: Home },
    { title: "Calendar", url: "/calendar", icon: Calendar },
    { title: "Team", url: "/team", icon: Users },
    { title: "Clients", url: "/clients", icon: User },
    { title: "Services", url: "/services", icon: FileText },
  ];
  
  const managementItems = [
    { title: "Working Hours", url: "/working-hours", icon: Clock },
    { title: "Payments", url: "/payments", icon: CreditCard },
    { title: "Settings", url: "/settings", icon: Settings },
  ];

  /* helpers */
  const isActive = (path: string) => currentPath === path;
  const isMainExpanded = mainItems.some((i) => isActive(i.url));
  const isManagementExpanded = managementItems.some((i) => isActive(i.url));
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-primary-foreground font-medium" : 
    "hover:bg-sidebar-accent/50 hover:text-primary-foreground transition-all";

  return (
    <Sidebar
      className={collapsed ? "w-14 transition-all" : "w-60 transition-all"}
      collapsible
    >
      {/* Logo and fallback trigger */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h2 className="text-xl font-bold text-primary-foreground">ServiceHub</h2>
        )}
        <SidebarTrigger className="self-end" />
      </div>

      <SidebarContent>
        {/* Main navigation group */}
        <SidebarGroup
          open={isMainExpanded}
          defaultOpen={true}
        >
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Main
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Management navigation group */}
        <SidebarGroup
          open={isManagementExpanded}
          defaultOpen={false}
        >
          <SidebarGroupLabel className="text-sidebar-foreground/70">
            Management
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="mr-2 h-5 w-5" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User account section at bottom */}
      <div className="mt-auto p-4">
        <div className="flex items-center gap-2 text-primary-foreground">
          {!collapsed && (
            <>
              <div className="h-8 w-8 rounded-full bg-white text-brand-blue flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <p className="text-sm font-medium">Admin User</p>
                <p className="text-xs opacity-70">admin@company.com</p>
              </div>
            </>
          )}
          {collapsed && (
            <div className="h-8 w-8 rounded-full bg-white text-brand-blue flex items-center justify-center font-bold">
              A
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
