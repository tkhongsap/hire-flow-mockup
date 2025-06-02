import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ResumeScorerPage from "@/pages/resume-scorer";
import InterviewCopilotPage from "@/pages/interview-copilot";
import DecisionAssistantPage from "@/pages/decision-assistant";
import OfferCraftPage from "@/pages/offercraft";
import PulseDashboardPage from "@/pages/pulse-dashboard";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/resume-scorer" component={ResumeScorerPage} />
      <Route path="/interview-copilot" component={InterviewCopilotPage} />
      <Route path="/decision-assistant" component={DecisionAssistantPage} />
      <Route path="/offercraft" component={OfferCraftPage} />
      <Route path="/pulse-dashboard" component={PulseDashboardPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
