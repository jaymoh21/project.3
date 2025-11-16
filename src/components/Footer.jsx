import {
  FaInstagram,
  FaTwitter,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-16">
        {/* Top: Shop Name + Social Icons */}
        <div className="flex justify-between items-center border-b border-gray-600 pb-6">
          {/* Shop Name */}
          <h1 className="text-2xl font-bold">Anime Emporium</h1>

          {/* Social Icons */}
          <div className="flex space-x-6 text-xl">
            <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
            <FaTwitter className="hover:text-pink-400 transition-colors duration-300" />
            <FaPinterest className="hover:text-pink-400 transition-colors duration-300" />
            <FaLinkedin className="hover:text-pink-400 transition-colors duration-300" />
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 text-sm">
          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              {["Figures", "Apparel", "Posters", "Accessories"].map((item) => (
                <li key={item} className="hover:text-pink-400 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-bold mb-4">Collections</h3>
            <ul className="space-y-2">
              {[
                "New Arrivals",
                "Limited Editions",
                "Best Sellers",
                "Gift Ideas",
              ].map((item) => (
                <li key={item} className="hover:text-pink-400 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              {["Our Story", "Community", "Careers", "Contact"].map((item) => (
                <li key={item} className="hover:text-pink-400 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {["FAQs", "Shipping", "Returns", "Help Center"].map((item) => (
                <li key={item} className="hover:text-pink-400 transition">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm border-t border-gray-600 pt-6">
          © Anime Emporium {new Date().getFullYear()} | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
