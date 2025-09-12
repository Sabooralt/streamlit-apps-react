
import type React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PitcherListDashboard from "./pages/PitcherListDashboard";
import { AppViewerSkeleton } from "./components/LoadingStates";
import { NoApplicationsSelected } from "./components/EmptyState";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<AppViewerSkeleton />}>
          <Routes>
            <Route path="/" element={<NoApplicationsSelected />} />
            <Route
              path="/apps/pitcher-dashboard"
              element={
                <ErrorBoundary fallbackMessage="Failed to load PitcherList dashboard">
                  <PitcherListDashboard />
                </ErrorBoundary>
              }
            />
            <Route path="*" element={<NoApplicationsSelected />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
