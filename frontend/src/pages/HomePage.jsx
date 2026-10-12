import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WorkspaceHero from '../components/WorkspaceHero';
import LabWorkSection from '../components/LabWorkSection';
import EditorialDashboards from '../components/EditorialDashboards';
import ShortAboutSection from '../components/ShortAboutSection';
import DashboardImageModal from '../components/DashboardImageModal';
import DashboardDetailModal from '../components/DashboardDetailModal';
import AssignmentDetailModal from '../components/AssignmentDetailModal';
import { getDashboards } from '../services/api';

export default function HomePage() {
  const navigate = useNavigate();
  const [dashboards, setDashboards] = useState([]);
  const [imageModalDashboard, setImageModalDashboard] = useState(null);
  const [detailModalDashboard, setDetailModalDashboard] = useState(null);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getDashboards()
      .then((data) => {
        if (isMounted) setDashboards(data);
      })
      .catch((err) => {
        console.warn('Dashboard fetch fallback:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main style={{ backgroundColor: '#F7F7F4', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <WorkspaceHero />

      {/* SECTION 1: LAB WORK */}
      <LabWorkSection />

      {/* SECTION 2: DASHBOARDS */}
      <EditorialDashboards
        dashboards={dashboards}
        onOpenImage={(d) => setImageModalDashboard(d)}
        onOpenDetail={(d) => {
          if (d.detailUrl) {
            navigate(d.detailUrl);
          } else {
            navigate(`/dashboards/${d.id}`);
          }
        }}
      />

      {/* ABOUT SECTION */}
      <ShortAboutSection />

      {/* Lightbox / High-Res Image Modal */}
      <DashboardImageModal
        dashboard={imageModalDashboard}
        onClose={() => setImageModalDashboard(null)}
      />

      {/* Detailed Project Information Dossier Modal */}
      <DashboardDetailModal
        dashboard={detailModalDashboard}
        onClose={() => setDetailModalDashboard(null)}
      />

      {/* Dedicated Academic Assignment & Document Case Study Modal */}
      <AssignmentDetailModal
        assignment={selectedAssignment}
        onClose={() => setSelectedAssignment(null)}
      />
    </main>
  );
}
