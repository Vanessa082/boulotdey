import { useAppContext } from "../../providers/context/app-context/app-context";
import HeroSection from "./hero-section/hero-section";

export default function LandingPage() {
  const { currentUser } = useAppContext();

  return (
    <main>
      <HeroSection />

      <pre>
        {JSON.stringify(currentUser, null, 4)}
      </pre>
    </main>
  );
}
