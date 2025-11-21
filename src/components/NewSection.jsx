import new1 from "../assets/images/3.jpeg";
import new2 from "../assets/images/4.jpeg";
import new3 from "../assets/images/5.jpeg";
import new4 from "../assets/images/6.jpeg";
import Button from "./Button";

function NewSection() {
  const scrollToAllFeatures = () => {
    const el = document.getElementById("allfeatures");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="bg-neutral-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
      {/* TEXT */}
      <div className="md:w-1/3 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Fresh Arrivals in the Emporium
        </h2>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0 leading-relaxed">
          Check out our newest anime-inspired treasures figures, apparel, and
          collectibles designed to bring your favorite worlds closer than ever.
        </p>

        <Button
          onClick={scrollToAllFeatures}
          className="bg-pink-600 hover:bg-pink-700 transition px-8 py-3 text-white"
          ariaLabel="Shop New Arrivals"
        >
          Shop New Arrivals
        </Button>
      </div>

      {/* IMAGES */}
      <div className="md:w-2/3 mt-12 md:mt-0 flex justify-center items-center gap-4">
        <img
          src={new1}
          alt="New Anime Product 1"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new2}
          alt="New Anime Product 2"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new3}
          alt="New Anime Product 3"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
        <img
          src={new4}
          alt="New Anime Product 4"
          className="rounded-xl shadow-lg object-cover w-1/4 h-64 border border-neutral-200"
        />
      </div>
    </section>
  );
}

export default NewSection;
