import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Amenities } from "@/components/sections/Amenities";
import { HorizontalGallery } from "@/components/sections/HorizontalGallery";
import { MediaGrid } from "@/components/sections/MediaGrid";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Amenities />
      <HorizontalGallery />
      <MediaGrid />
      <Location />
    </>
  );
}
