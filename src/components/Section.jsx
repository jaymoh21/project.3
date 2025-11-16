import aboutImg from "../assets/images/2.jpeg";

function Section() {
  return (
    <section className="py-20 w-full px-6 md:px-12 bg-[#F4EDE2]">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={aboutImg}
          alt="Anime Merchandise Showcase"
          className="rounded-xl shadow-xl object-cover w-full h-full"
        />

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3B2F2F] mb-6 leading-tight">
            Celebrating Anime Worlds With Style & Magic
          </h2>

          <p className="text-[#4F5D4E] mb-8 text-lg leading-relaxed">
            Every item in our Emporium is chosen with passion  blending fandom,
            creativity, and vibrant design to bring your favorite anime stories
            into everyday life.
          </p>

          <ul className="space-y-8">
            <li>
              <h3 className="font-semibold text-xl text-[#3B2F2F] flex items-center gap-2">
                <span className="text-[#C6A675] text-2xl">•</span> Authentic
                Collectibles
              </h3>
              <p className="text-[#4F5D4E]">
                Figures, posters, and décor crafted to capture the spirit of
                beloved anime series.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-xl text-[#3B2F2F] flex items-center gap-2">
                <span className="text-[#C6A675] text-2xl">•</span> Everyday
                Anime Gear
              </h3>
              <p className="text-[#4F5D4E]">
                Apparel and accessories designed to let you carry anime magic
                wherever you go.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-xl text-[#3B2F2F] flex items-center gap-2">
                <span className="text-[#C6A675] text-2xl">•</span> Limited
                Edition Treasures
              </h3>
              <p className="text-[#4F5D4E]">
                Rare and exclusive items for collectors who want something truly
                special in their collection.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Section;
