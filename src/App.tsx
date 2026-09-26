import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { LogoLab } from './components/LogoLab';
import { MisuseSection } from './components/MisuseSection';
import { ColourSection } from './components/ColourSection';
import { TypographySection } from './components/TypographySection';
import { MagnetStudio } from './components/MagnetStudio';
import { ApplicationsSection } from './components/ApplicationsSection';
import { VoiceSection } from './components/VoiceSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#0A0A0A] font-sans overflow-x-hidden selection:bg-[#B39377] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="pt-[56px] sm:pt-[60px]">
        <Hero />
        <StorySection />
        <LogoLab />
        <MisuseSection />
        <ColourSection onCopyToast={showToast} />
        <TypographySection />
        <MagnetStudio onCopyToast={showToast} />
        <ApplicationsSection />
        <VoiceSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Toast Popup */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
