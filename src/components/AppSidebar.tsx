
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
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-primary-foreground font-medium" : 
    "hover:bg-sidebar-accent/50 hover:text-primary-foreground transition-all";

  return (
    <Sidebar
      className={`transition-all duration-300 ${collapsed ? "w-16" : "w-64"}`}
      collapsible="icon"
    >
      {/* Logo and fallback trigger */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <h2 className="text-xl font-bold text-primary-foreground truncate">ServiceHub</h2>
        )}
        <SidebarTrigger className={collapsed ? "mx-auto" : "ml-auto"} />
      </div>

      <SidebarContent>
        {/* Main navigation group */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-sidebar-foreground/70">
              Principal
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `
                        flex items-center gap-3 px-3 py-2 rounded-md ${getNavCls({ isActive })}
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Management navigation group */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-sidebar-foreground/70">
              Gestion
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `
                        flex items-center gap-3 px-3 py-2 rounded-md ${getNavCls({ isActive })}
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="truncate">{item.title}</span>}
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
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
          <div className="h-8 w-8 rounded-full bg-white text-brand-blue flex items-center justify-center font-bold shrink-0">
            A
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-medium text-primary-foreground">Admin User</p>
              <p className="text-xs text-primary-foreground/70">admin@company.com</p>
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
