import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { DepthBackground } from "./components/depth-background";
import { ScrollToTop } from "./components/scroll-to-top";
import { Home } from "./pages/home";
import { ServicesMain } from "./pages/services-main";
import { ServiceMovieConversion } from "./pages/service-movie-conversion";
import { ServiceShortFilms } from "./pages/service-short-films";
import { ServiceReels } from "./pages/service-reels";
import { ServiceAdvertising } from "./pages/service-advertising";
import { ServiceDepthCompositing } from "./pages/service-depth-compositing";
import { ServiceVRPrep } from "./pages/service-vr-prep";
import { IndustriesMain } from "./pages/industries-main";
import { IndustryFilmStudios } from "./pages/industry-film-studios";
import { IndustryOTT } from "./pages/industry-ott";
import { IndustryCreators } from "./pages/industry-creators";
import { IndustryAgencies } from "./pages/industry-agencies";
import { IndustryMusicLabels } from "./pages/industry-music-labels";
import { IndustryDocumentaries } from "./pages/industry-documentaries";
import { Partnership } from "./pages/partnership";
import { Work } from "./pages/work";
import { About } from "./pages/about";
import { Careers } from "./pages/careers";
import { Contact } from "./pages/contact";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen overflow-x-hidden bg-black">
        {/* Cinematic depth background */}
        <DepthBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesMain />} />
            <Route path="/services/movie-conversion" element={<ServiceMovieConversion />} />
            <Route path="/services/short-films" element={<ServiceShortFilms />} />
            <Route path="/services/reels" element={<ServiceReels />} />
            <Route path="/services/advertising" element={<ServiceAdvertising />} />
            <Route path="/services/depth-compositing" element={<ServiceDepthCompositing />} />
            <Route path="/services/vr-prep" element={<ServiceVRPrep />} />
            <Route path="/industries" element={<IndustriesMain />} />
            <Route path="/industries/film-studios" element={<IndustryFilmStudios />} />
            <Route path="/industries/ott" element={<IndustryOTT />} />
            <Route path="/industries/creators" element={<IndustryCreators />} />
            <Route path="/industries/agencies" element={<IndustryAgencies />} />
            <Route path="/industries/music-labels" element={<IndustryMusicLabels />} />
            <Route path="/industries/documentaries" element={<IndustryDocumentaries />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}