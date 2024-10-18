// import { useAppContext } from "../../providers/context/app-context/app-context";
import About from "./about";
import HeroSection from "./hero-section/hero-section";
import JobSection from "./job-section";

export default function LandingPage() {
  // const { currentUser } = useAppContext();

  return (
    <main className="w-full">
      <HeroSection />
      <JobSection />
      <About />
      {/* <pre>{JSON.stringify(currentUser, null, 4)}</pre> */}
    </main>
  );
}
