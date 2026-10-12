import React from 'react';
import AboutSection from '../components/AboutSection';
import ToolsSection from '../components/ToolsSection';
import ContactSection from '../components/ContactSection';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '130px' }}>
      <AboutSection />
      <ToolsSection />
      <ContactSection />
    </main>
  );
}
