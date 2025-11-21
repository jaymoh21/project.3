import heroBg from "../assets/images/1.jpeg";
import Button from "./Button";

function Hero() {
  const scrollToAllFeatures = () => {
    const el = document.getElementById("allfeatures");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header
      className="relative bg-cover bg-center text-white shadow-lg h-[90vh]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* NAVBAR */}
      <div className="relative container mx-auto flex items-center justify-between py-6 px-8">
        <h1 className="text-2xl font-bold tracking-wide">Anime Emporium</h1>

        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <li>
              <a href="#home" className="hover:text-pink-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-pink-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#collections" className="hover:text-pink-400 transition">
                Collections
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* HERO SECTION */}
      <div className="relative container mx-auto text-center px-8 mt-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Step Into the World of Anime Magic
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-200 mb-6">
          Exclusive figures, apparel, and collectibles inspired by your favorite
          anime adventures crafted for true fans.
        </p>

        <Button
          onClick={scrollToAllFeatures}
          className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-3"
          ariaLabel="Shop Now"
        >
          Shop Now
        </Button>
      </div>

      {/* STATS — positioned at bottom */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-50px] 
                      bg-white text-black rounded-xl shadow-xl 
                      grid grid-cols-3 md:grid-cols-4 gap-6 
                      px-8 py-6 w-[85%] md:w-[60%] text-center"
      >
        <div>
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-600 text-sm">Anime Products</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-600 text-sm">Exclusive Collections</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">5k+</h3>
          <p className="text-gray-600 text-sm">Happy Customers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-gray-600 text-sm">Shop Anytime</p>
        </div>
      </div>
    </header>
  );
}

export default Hero;
