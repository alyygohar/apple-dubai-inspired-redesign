import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConsultationProvider } from "@/components/ConsultationProvider";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Sell from "./pages/Sell";
import PropertyLanding from "./pages/PropertyLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ConsultationProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/blog" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ConsultationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
