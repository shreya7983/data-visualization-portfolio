import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams } from 'react-router-dom';
import Navigation from './components/Navigation';
import FloatingRightNav from './components/FloatingRightNav';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

import HomePage from './pages/HomePage';
import DashboardsPage from './pages/DashboardsPage';
import DashboardDetailPage from './pages/DashboardDetailPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import DataStoriesPage from './pages/DataStoriesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import { getWorkById } from './data/workLibraryData';

// Universal Case Study / Dashboard Route Resolver
function UniversalWorkDetail() {
  const { id } = useParams();
  const work = getWorkById(id);
  if (
    work &&
    work.projectType === 'Dashboard' &&
    [
      'india-paper-leaks',
      'superstore-sales',
      'placement-analysis',
      'study-habits-analysis',
      'healthcare-er-wait-times',
      'urban-air-quality-trends',
      'superstore-management',
      'superstore-sales-manager',
      'superstore-regional-manager'
    ].includes(work.id)
  ) {
    return <DashboardDetailPage />;
  }
  return <CaseStudyDetailPage />;
}

// Scroll restoration component
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Desktop Custom Cursor */}
      <CustomCursor />

      {/* Main Minimal Header */}
      <Navigation />

      {/* Premium Floating Right-Side Navigation (Appears on Scroll) */}
      <FloatingRightNav />

      {/* Page Routing */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboards" element={<DashboardsPage />} />
        <Route path="/dashboards/:id" element={<UniversalWorkDetail />} />
        <Route path="/work" element={<DashboardsPage />} />
        <Route path="/work/:id" element={<UniversalWorkDetail />} />
        <Route path="/assignments/:id" element={<CaseStudyDetailPage />} />
        <Route path="/labs/:id" element={<CaseStudyDetailPage />} />
        <Route path="/projects/:id" element={<UniversalWorkDetail />} />
        <Route path="/data-stories" element={<DataStoriesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Minimal 2026 Footer */}
      <Footer />
    </BrowserRouter>
  );
}
