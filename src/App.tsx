/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import LeadershipSlider from './components/LeadershipSlider';
import AboutSection from './components/AboutSection';
import ImageGallery from './components/ImageGallery';
import BoardingSection from './components/BoardingSection';
import PavnaPromise from './components/PavnaPromise';
import DistinguishedGuests from './components/DistinguishedGuests';
import FooterBanner from './components/FooterBanner';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <LeadershipSlider />
        <AboutSection />
        <ImageGallery />
        <BoardingSection />
        <PavnaPromise />
        <DistinguishedGuests />
        <FooterBanner />
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}
