"use client"
import { useState } from "react";

const slides = [
  {
    title: "Fresh Products Delivered to your Door",
    subtitle: "Get 20% off your first order"
  },
  {
    title: "Fast & Free Delivery",
    subtitle: "Same day delivery available"
  },
  {
    title: "Premium Quality Guaranyeed",
    subtitle: "Fresh farm to your table"
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-100 overflow-hidden m-0">

      {/* SLIDES */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full relative"
            style={{
              backgroundImage: `url(${'\hero.png'})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-green-600/90 via-green-700/80 to-green-800/60"></div>

            {/* content */}
            <div className="relative z-10 text-white p-20 flex flex-col justify-center h-full max-w-xl">
              <h1 className="text-3xl font-bold mb-3">
                {slide.title}
              </h1>
              <p className="mb-5">{slide.subtitle}</p>

              <div className="flex gap-3">
                <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium">
                  Shop Now
                </button>
                <button className="border border-white px-4 py-2 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#00C950] w-10 h-10 rounded-full shadow flex items-center justify-center"
      >
        <svg data-prefix="fas" data-icon="chevron-left" className="w-2 svg-inline--fa fa-chevron-left text-lg" role="img" viewBox="0 0 320 512" aria-hidden="true"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" /></svg>
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#00C950] w-10 h-10 rounded-full shadow flex items-center justify-center"
      >
        <svg data-prefix="fas" data-icon="chevron-right" className="w-2 svg-inline--fa fa-chevron-right text-lg" role="img" viewBox="0 0 320 512" aria-hidden="true"><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
      </button>

      {/* DOTS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition ${
              current === i ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}