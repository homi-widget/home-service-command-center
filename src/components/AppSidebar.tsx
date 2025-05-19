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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function AppSidebar() {
  const sidebar = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = sidebar?.state === "collapsed";

  // Navigation items
  const mainItems = [
    { title: "Tableau de bord", url: "/", icon: Home },
    { title: "Calendrier", url: "/calendar", icon: Calendar },
    { title: "Équipe", url: "/team", icon: Users },
    { title: "Clients", url: "/clients", icon: User },
    { title: "Services", url: "/services", icon: FileText },
  ];
  
  const managementItems = [
    { title: "Heures de travail", url: "/working-hours", icon: Clock },
    { title: "Paiements", url: "/payments", icon: CreditCard },
    { title: "Paramètres", url: "/settings", icon: Settings },
  ];

  /* helpers */
  const isActive = (path: string) => currentPath === path;
  const isMainExpanded = mainItems.some((i) => isActive(i.url));
  const isManagementExpanded = managementItems.some((i) => isActive(i.url));
  
  // Updated to use yellow for active items
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-brand-yellow text-primary-foreground font-medium" 
      : "hover:bg-sidebar-accent/50 hover:text-primary-foreground transition-all";
  
  // Helper function to render menu item with tooltip when collapsed
  const renderMenuItem = (item: { title: string; url: string; icon: any }) => {
    const ItemIcon = item.icon;
    const linkContent = (
      <NavLink to={item.url} end className={getNavCls}>
        <ItemIcon className="mr-2 h-5 w-5" />
        <span>{collapsed ? "" : item.title}</span>
      </NavLink>
    );

    // When sidebar is collapsed, wrap the icon with tooltip
    if (collapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {linkContent}
          </TooltipTrigger>
          <TooltipContent side="right">
            {item.title}
          </TooltipContent>
        </Tooltip>
      );
    }
    
    // Otherwise, render normal link
    return linkContent;
  };

  return (
    <TooltipProvider delayDuration={300}>
      <Sidebar
        className={collapsed ? "w-14 transition-all" : "w-60 transition-all"}
        collapsible="icon"
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
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      {renderMenuItem(item)}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          {/* Management navigation group */}
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {managementItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      {renderMenuItem(item)}
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
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="h-8 w-8 rounded-full bg-white text-brand-blue flex items-center justify-center font-bold">
                    A
                  </div>
                </TooltipTrigger>
                <TooltipContent side="right">
                  Admin User
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </Sidebar>
    </TooltipProvider>
  );
}
