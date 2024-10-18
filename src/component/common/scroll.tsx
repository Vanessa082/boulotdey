import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className="fixed bottom-10 right-10 bg-primary rounded-full text-3xl text-white p-4"
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>
  );
}
