import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Linkup from "@/components/linkup";
import AboutLinkUp from "@/components/aboutlinkup";

export default function Home() {
  return (
    <>
    <HeroSection />
    <Linkup />
    <AboutLinkUp />
    </>
  );
}
