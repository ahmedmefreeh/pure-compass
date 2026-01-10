import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/contexts/LanguageContext";
import "@/i18n";

import Index from "./pages/Index";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import BlogPage from "./pages/BlogPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ar" element={<HomePage />} />
              <Route path="/en" element={<HomePage />} />
              <Route path="/ar/about" element={<HomePage />} />
              <Route path="/en/about" element={<HomePage />} />
              <Route path="/ar/portfolio" element={<HomePage />} />
              <Route path="/en/portfolio" element={<HomePage />} />
              <Route path="/ar/blog" element={<HomePage />} />
              <Route path="/en/blog" element={<HomePage />} />
              <Route path="/ar/contact" element={<HomePage />} />
              <Route path="/en/contact" element={<HomePage />} />
              <Route path="/ar/services" element={<HomePage />} />
              <Route path="/en/services" element={<HomePage />} />
              <Route path="/ar/services/:slug" element={<ServicePage />} />
              <Route path="/en/services/:slug" element={<ServicePage />} />
              <Route path="/ar/blog/:slug" element={<BlogPage />} />
              <Route path="/en/blog/:slug" element={<BlogPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
