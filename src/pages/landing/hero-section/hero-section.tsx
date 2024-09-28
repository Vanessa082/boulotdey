interface STATS {
  label: string,
  icon: any;
};

const STATS: STATS[] = [
  // {
  // label,
  // icon
  // },
];

export default function HeroSection() {

  return (
    <div className="w-full min-h-screen  bg-hero-banner bg-cover bg-center">
      <div>
        <h1>Secure Connections, Real Opportunities</h1>
        <p>BoulotDey (par pour les&apos;anglophones) connects job seekers and employers in Cameroon&apos;s petite métier sector through a trusted and secure platform. Every profile and job listing is verified, ensuring peace of mind for both workers and businesses.</p>
      </div>

      <div>
        <button>Find Job</button>
      </div>
      <div></div>
    </div>
  )