import { useState } from "react";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import HeroCounter from "./components/HeroCounter";
import SkewerSection from "./components/SkewerSection";
import MenuCounter from "./components/MenuCounter";
import FireSection from "./components/FireSection";
import StorySection from "./components/StorySection";
import RestaurantGallery from "./components/RestaurantGallery";
import HungerSlider from "./components/HungerSlider";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import ReservationModal, { type ModalMode } from "./components/ReservationModal";

function App() {
  useSmoothScroll();
  const [modalMode, setModalMode] = useState<ModalMode>(null);

  return (
    <>
      <CustomCursor />
      <Navigation onOpenModal={setModalMode} />

      <main className="relative">
        <HeroCounter />
        <SkewerSection />
        <MenuCounter onOpenModal={setModalMode} />
        <FireSection />
        <StorySection />
        <RestaurantGallery />
        <HungerSlider />
        <LocationSection />
        <FinalCTA onOpenModal={setModalMode} />
      </main>

      <ReservationModal mode={modalMode} onClose={() => setModalMode(null)} />
    </>
  );
}

export default App;
