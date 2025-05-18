
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/CalendarPage";
import TeamPage from "./pages/TeamPage";
import ClientsPage from "./pages/ClientsPage";
import ServicesPage from "./pages/ServicesPage";
import WorkingHoursPage from "./pages/WorkingHoursPage";
import PaymentsPage from "./pages/PaymentsPage";
import SettingsPage from "./pages/SettingsPage";
import DashboardLayout from "./layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/working-hours" element={<WorkingHoursPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
