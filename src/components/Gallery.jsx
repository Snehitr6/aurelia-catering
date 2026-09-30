import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      title: "Wedding Celebration",
      category: "Weddings",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=90",
      size: "large",
    },
    {
      title: "Beautiful Presentation",
      category: "Food",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=90",
      size: "small",
    },
    {
      title: "Elegant Dining",
      category: "Events",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1000&q=90",
      size: "small",
    },
    {
      title: "Traditional Flavours",
      category: "Cuisine",
      image:
        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=90",
      size: "medium",
    },
    {
      title: "Corporate Gathering",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=90",
      size: "medium",
    },
    {
      title: "Dessert Table",
      category: "Desserts",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
      size: "small",
    },
  ];

  const fallbackImage =
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90";

  return (
    <>
      <section
        id="gallery"
        className="bg-[#f8f5ef] py-24 sm:py-28 lg:py-32"
      >
        <div className="container-main">

          
          <div className="grid gap-7 lg:grid-cols-[1fr_420px] lg:items-end">

            <div>
              <p className="section-label">
                Our Gallery
              </p>

              <h2 className="section-title mt-5 max-w-3xl">
                Moments made
                <span className="block text-[#a66a38]">
                  memorable.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#756557]">
              A glimpse into the celebrations, flavours and beautiful
              moments we've had the pleasure of being part of.
            </p>

          </div>

          
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {gallery.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden text-left ${
                  index === 0
                    ? "h-[420px] sm:col-span-2 lg:row-span-2 lg:h-[620px]"
                    : index === 3 || index === 4
                    ? "h-[300px] sm:h-[360px]"
                    : "h-[300px]"
                }`}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                />

                
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

                
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">

                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#e0b586]">
                    {item.category}
                  </p>

                  <div className="mt-2 flex items-end justify-between gap-4">

                    <h3 className="font-serif text-xl text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={15} />
                    </span>

                  </div>

                </div>

              </button>
            ))}

          </div>

         
          <div className="mt-10 flex flex-col gap-5 border-t border-[#d8cdbd] pt-7 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs uppercase tracking-[0.15em] text-[#8c7b6b]">
              Food · Weddings · Corporate · Celebrations
            </p>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f572e] transition hover:text-[#593621]"
            >
              Plan Your Celebration
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>
      </section>

      
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#35251b] shadow-lg transition hover:bg-[#bd814a] hover:text-white"
            aria-label="Close gallery"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="mx-auto max-h-[80vh] w-auto max-w-full object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImage;
              }}
            />

            <div className="mt-4 text-center">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7a875]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                {selectedImage.title}
              </h3>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Gallery;