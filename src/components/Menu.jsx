import { useState } from "react";
import { ArrowUpRight, Utensils, X } from "lucide-react";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("Wedding");
  const [selectedDish, setSelectedDish] = useState(null);

  const categories = [
    "Wedding",
    "South Indian",
    "Corporate",
    "Desserts",
  ];

  const fallbackImage =
    "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90";

  const menus = {
    Wedding: [
      {
        name: "Royal Biryani",
        description:
          "Aromatic basmati rice with traditional spices and rich flavours.",
        price: "₹320",
        image:
          "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Paneer Tikka",
        description:
          "Char-grilled paneer with peppers and aromatic Indian spices.",
        price: "₹280",
        image:
          "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Traditional Feast",
        description:
          "A carefully curated selection of classic celebration dishes.",
        price: "₹450",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=90",
      },
    ],

    "South Indian": [
      {
        name: "Traditional Thali",
        description:
          "A wholesome spread of authentic South Indian favourites.",
        price: "₹280",
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Masala Dosa",
        description:
          "Crispy dosa with potato masala, chutneys and sambar.",
        price: "₹160",
        image:
          "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Mini Idli Sambar",
        description:
          "Soft steamed idlis served with traditional sambar.",
        price: "₹140",
        image:
          "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=90",
      },
    ],

    Corporate: [
      {
        name: "Executive Lunch",
        description:
          "A balanced premium meal designed for corporate gatherings.",
        price: "₹380",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Business Breakfast",
        description:
          "Fresh breakfast selections with beverages for meetings.",
        price: "₹220",
        image:
          "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=90",
      },
      {
        name: "Coffee & Bites",
        description:
          "Fresh snacks, pastries and beverages for corporate breaks.",
        price: "₹180",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=90",
      },
    ],

    Desserts: [
      {
        name: "Gulab Jamun",
        description:
          "Soft milk dumplings soaked in fragrant sugar syrup and finished with pistachios.",
        price: "₹120",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_600,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/11/dc003ff7-625a-47ef-bacb-6cba0c87e3f8_51e04127-a2a8-4fd9-994f-bd56843ebff5.jpg",
      },
      {
        name: "Traditional Sweets",
        description:
          "A beautiful assortment of traditional Indian mithai prepared for celebrations.",
        price: "₹180",
        image:
          "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/fcgiokywqeiox71zwfnt",
      },
      {
        name: "Celebration Cake",
        description:
          "Beautifully finished cakes prepared specially for birthdays and celebrations.",
        price: "₹650",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1200&q=90",
      },
    ],
  };

  const dishes = menus[activeCategory];

  return (
    <>
      <section
        id="menu"
        className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28"
      >
        <div className="container-main">

          {/* ================= HEADER ================= */}
          <div className="mx-auto max-w-3xl text-center">

            <p className="section-label">
              From Our Kitchen
            </p>

            <h2 className="section-title mt-4">
              A menu made for
              <span className="block text-[#a66a38]">
                every celebration.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#756557] sm:text-base">
              Explore our carefully curated menus, prepared with
              fresh ingredients, authentic flavours and beautiful
              presentation.
            </p>

          </div>

          {/* ================= CATEGORY TABS ================= */}
          <div className="menu-categories-wrapper mx-auto mt-10 w-full max-w-4xl">

            <div className="menu-categories flex w-full items-center gap-0 overflow-x-auto border-b border-[#d8cdbd]">

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`menu-category-button relative shrink-0 whitespace-nowrap px-5 py-4 text-[9px] font-bold uppercase tracking-[0.10em] transition duration-300 sm:px-6 sm:text-[10px] sm:tracking-[0.12em] ${
                    activeCategory === category
                      ? "text-[#8f572e]"
                      : "text-[#8c7b6b] hover:text-[#4b382b]"
                  }`}
                >
                  {category}

                  {activeCategory === category && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#a66a38]" />
                  )}
                </button>
              ))}

            </div>

          </div>

          {/* ================= MENU GRID ================= */}
          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

            {dishes.map((dish) => (
              <article
                key={dish.name}
                className="group flex h-full flex-col overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* ================= IMAGE ================= */}
                <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[270px]">

                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = fallbackImage;
                    }}
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* PRICE */}
                  <div className="absolute bottom-4 left-4 bg-[#f8f5ef] px-4 py-2 shadow-md">
                    <span className="font-serif text-xl text-[#5b3824]">
                      {dish.price}
                    </span>
                  </div>

                </div>

                {/* ================= CARD CONTENT ================= */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  <div className="flex items-start justify-between gap-4">

                    <h3 className="min-h-[58px] flex-1 font-serif text-2xl leading-tight text-[#35251b]">
                      {dish.name}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eee3d4] text-[#986039]">
                      <Utensils size={15} />
                    </div>

                  </div>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-[#756557]">
                    {dish.description}
                  </p>

                  {/* VIEW BUTTON */}
                  <div className="mt-auto pt-5">

                    <button
                      type="button"
                      onClick={() => setSelectedDish(dish)}
                      className="inline-flex items-center gap-2 border-b border-[#b48761] pb-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a5e31] transition hover:border-[#593621] hover:text-[#593621]"
                    >
                      View Dish

                      <ArrowUpRight size={14} />
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

          {/* ================= CTA ================= */}
          <div className="mt-10 flex justify-center sm:mt-12">

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-[#6f4328] px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#4f2e1d] sm:px-7"
            >
              Create Your Menu

              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>
      </section>

      {/* ================= DISH MODAL ================= */}
      {selectedDish && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedDish(null)}
        >

          <div
            className="relative my-auto w-full max-w-2xl overflow-hidden bg-[#f8f5ef] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setSelectedDish(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#35251b] shadow-md transition hover:bg-[#6f4328] hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* MODAL IMAGE */}
            <div className="h-[230px] w-full sm:h-[320px]">

              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackImage;
                }}
              />

            </div>

            {/* MODAL CONTENT */}
            <div className="p-6 sm:p-9">

              <p className="section-label">
                Featured Dish
              </p>

              <div className="mt-3 flex items-start justify-between gap-4">

                <h3 className="font-serif text-3xl leading-tight text-[#35251b] sm:text-4xl">
                  {selectedDish.name}
                </h3>

                <span className="shrink-0 font-serif text-xl text-[#a66a38] sm:text-2xl">
                  {selectedDish.price}
                </span>

              </div>

              <p className="mt-5 text-sm leading-7 text-[#756557]">
                {selectedDish.description}
              </p>

              <a
                href="#contact"
                onClick={() => setSelectedDish(null)}
                className="mt-7 inline-flex items-center gap-2 bg-[#6f4328] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#4f2e1d]"
              >
                Add To Event Menu

                <ArrowUpRight size={15} />
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Menu;
