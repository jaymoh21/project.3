import React, { useState } from "react";
import testimonialImg from "../assets/images/16.jpeg";

function Testimonials() {
  const testimonials = [
    {
      name: "Alicia M.",
      role: "Anime Collector",
      image: testimonialImg,
      quote:
        "The Emporium is my go-to for authentic figures and collectibles. Every item feels magical and true to the series.",
    },
    {
      name: "Daniel K.",
      role: "Cosplay Enthusiast",
      image: testimonialImg,
      quote:
        "Their apparel and accessories bring my favorite characters to life. The quality and detail are unmatched.",
    },
    {
      name: "Martha W.",
      role: "Gift Shopper",
      image: testimonialImg,
      quote:
        "I always find the perfect anime-inspired gifts here. The variety and creativity make shopping effortless.",
    },
    {
      name: "Leo S.",
      role: "Anime Artist",
      image: testimonialImg,
      quote:
        "As a creator, I love how the Emporium celebrates anime culture. It’s a space where fans and artists connect.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const t = testimonials[index];

  return (
    <section className="w-full bg-neutral-50 py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          What Fans Are Saying About Us
        </h2>

        {/* Client */}
        <div className="flex items-center gap-4 mb-4 transition-all">
          <img
            src={t.image}
            alt={t.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{t.name}</h3>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        </div>

        {/* Quote */}
        <p className="text-gray-700 leading-relaxed max-w-lg">“{t.quote}”</p>

        {/* Arrows */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
          >
            →
          </button>
        </div>
      </div>

      <div>
        <img
          src={testimonialImg}
          alt="anime shop showcase"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Testimonials;
