import bestImage from "../assets/images/8.jpeg";

function Gallery() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">
          A Showcase of Anime Treasures
        </h2>

        <p className="text-stone-600 max-w-md mx-auto md:mx-0 text-lg">
          Each product in our Emporium is carefully selected for its creativity,
          fandom spirit, and unique design. From detailed figures to stylish
          apparel  we help you find the perfect piece to celebrate your anime
          journey.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={bestImage}
          alt="Anime Product Showcase"
          className="rounded-2xl shadow-xl w-full max-w-md md:max-w-lg object-cover h-96"
        />
      </div>
    </section>
  );
}

export default Gallery;
