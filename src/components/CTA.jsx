import ctaBg from "../assets/images/download.jpeg";

function CTA() {
  return (
    <section
      className="relative py-24 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center text-[#f8f3e7] max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#d4af37] drop-shadow-sm">
          Join the Anime Fans’ Circle
        </h2>

        <p className="mt-4 text-[#e7dfd1] text-lg">
          Be the first to access new arrivals, limited editions, and exclusive
          anime-inspired deals crafted for true fans.
        </p>

        {/* Input + Button */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-black w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
          />

          <button
            className="
              bg-gradient-to-r from-pink-600 to-purple-500
              px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none
              font-semibold text-white
              transition-all duration-200
              hover:from-pink-700 hover:to-purple-600
              hover:shadow-md
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;