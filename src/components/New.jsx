import artwork1 from "../assets/images/7.jpeg";
import artwork2 from "../assets/images/8.jpeg";
import artwork3 from "../assets/images/10.jpeg";
import artwork4 from "../assets/images/11.jpeg";
import artwork5 from "../assets/images/12.jpeg";
import artwork6 from "../assets/images/13.jpeg";
import artwork7 from "../assets/images/14.jpeg";
import artwork8 from "../assets/images/15.jpeg";

function New() {
  const products = [
    {
      img: artwork1,
      name: "Naruto Action Figure",
      beforePrice: "$45",
      price: "$60",
    },
    {
      img: artwork2,
      name: "Attack on Titan Hoodie",
      beforePrice: "$55",
      price: "$75",
    },
    {
      img: artwork3,
      name: "One Piece Poster",
      beforePrice: "$20",
      price: "$30",
    },
    {
      img: artwork4,
      name: "Demon Slayer Katana Replica",
      beforePrice: "$90",
      price: "$120",
    },
    {
      img: artwork5,
      name: "My Hero Academia Keychain Set",
      beforePrice: "$15",
      price: "$25",
    },
    {
      img: artwork6,
      name: "Tokyo Revengers T-Shirt",
      beforePrice: "$30",
      price: "$45",
    },
    {
      img: artwork7,
      name: "Sailor Moon Necklace",
      beforePrice: "$40",
      price: "$55",
    },
    {
      img: artwork8,
      name: "Dragon Ball Z Mug",
      beforePrice: "$18",
      price: "$25",
    },
  ];

  return (
    <section
      id="allfeatures"
      className="bg-neutral-50 py-16 px-6 md:px-16 text-center"
    >
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Featured Anime Merchandise
      </h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-10">
        Explore our latest arrivals  figures, apparel, and collectibles crafted
        for true anime fans. Each item brings your favorite series to life.
      </p>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 p-4 flex flex-col items-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-800 font-bold">{product.price}</span>
              <span className="text-gray-400 line-through">
                {product.beforePrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default New;
