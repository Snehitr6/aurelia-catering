import { useState } from "react";
import {
  Heart,
  BriefcaseBusiness,
  CakeSlice,
  Home,
  Users,
  Sparkles,
  ArrowUpRight,
  X,
} from "lucide-react";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: Heart,
      number: "01",
      title: "Weddings",
      subtitle: "A feast worthy of your special day",
      description:
        "From intimate ceremonies to grand wedding receptions, we create memorable food experiences tailored to your celebration.",
      details: [
        "Welcome drinks & refreshments",
        "Traditional wedding feast",
        "Live counters",
        "Dessert & sweet selections",
        "Professional serving staff",
      ],
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=90",
    },

    {
      icon: BriefcaseBusiness,
      number: "02",
      title: "Corporate Events",
      subtitle: "Professional food for professional occasions",
      description:
        "Reliable catering for meetings, conferences, product launches, office celebrations and corporate gatherings.",
      details: [
        "Breakfast meetings",
        "Working lunches",
        "Conference catering",
        "Tea & coffee breaks",
        "Corporate buffet setup",
      ],
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1600&q=90",
    },

    {
      icon: CakeSlice,
      number: "03",
      title: "Celebrations",
      subtitle: "Make every milestone delicious",
      description:
        "Birthdays, anniversaries and family celebrations deserve food that brings everyone together.",
      details: [
        "Birthday celebrations",
        "Anniversary events",
        "Family gatherings",
        "Custom food stations",
        "Dessert counters",
      ],
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=90",
    },

    {
      icon: Home,
      number: "04",
      title: "Housewarming",
      subtitle: "Celebrate your new beginning",
      description:
        "Traditional and contemporary catering designed for housewarming ceremonies and intimate family gatherings.",
      details: [
        "Traditional breakfast",
        "Lunch & dinner menus",
        "South Indian specials",
        "Traditional sweets",
        "Beverage service",
      ],
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=90",
    },

    {
      icon: Users,
      number: "05",
      title: "Traditional Events",
      subtitle: "Honouring food and tradition",
      description:
        "Authentic recipes and traditional serving styles for cultural functions and family occasions.",
      details: [
        "Traditional banana-leaf meals",
        "Authentic South Indian dishes",
        "Festival menus",
        "Traditional sweets",
        "Experienced serving team",
      ],
      image:
        "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1600&q=90",
    },

    {
      icon: Sparkles,
      number: "06",
      title: "Custom Events",
      subtitle: "Your occasion. Your menu.",
      description:
        "Have something unique in mind? We build custom catering experiences around your guests, theme and requirements.",
      details: [
        "Custom menu planning",
        "Theme-based food stations",
        "Special dietary requirements",
        "Custom presentation",
        "Personal event coordinator",
      ],
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1600&q=90",
    },
  ];

  return (
    <>
      

      <section
        id="services"
        className="w-full overflow-hidden bg-[#eee7dc] py-20 sm:py-24 lg:py-32"
      >
        <div className="container-main w-full">



          <div className="w-full">

            <p className="section-label">
              What We Cater
            </p>

            <div className="gold-line mt-5" />

            <div className="mt-6 grid w-full gap-8 xl:grid-cols-[minmax(0,1fr)_380px] xl:items-end">

              <div className="min-w-0">

                <h2 className="w-full max-w-4xl text-[2.7rem] font-extrabold leading-[0.96] tracking-[-0.045em] text-[#35251b] sm:text-[3.8rem] lg:text-[4.5rem] xl:text-[5rem]">
                  Every occasion
                  <span className="block text-[#a66a38]">
                    deserves a feast.
                  </span>
                </h2>

              </div>

              <div className="w-full xl:pb-1">

                <p className="max-w-xl text-sm leading-7 text-[#756557]">
                  From elegant weddings to intimate family gatherings,
                  our catering experiences are carefully designed around
                  your occasion, your guests and your vision.
                </p>

              </div>

            </div>
          </div>



          <div
            className="
              mt-12
              grid
              w-full
              grid-cols-1
              gap-4
              sm:mt-14
              sm:grid-cols-2
              sm:gap-5
              xl:grid-cols-3
            "
          >

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <button
                  type="button"
                  key={service.title}
                  onClick={() => setSelectedService(service)}
                  className="
                    group
                    relative
                    h-[390px]
                    w-full
                    overflow-hidden
                    text-left
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#a66a38]
                    focus:ring-inset
                    sm:h-[420px]
                    lg:h-[440px]
                  "
                >


                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                      object-center
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-105
                    "
                  />



                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#160e09]/95
                      via-[#1c120c]/45
                      to-[#1c120c]/20
                      transition-all
                      duration-500
                      group-hover:from-[#160e09]/90
                      group-hover:via-[#1c120c]/35
                    "
                  />



                  <div className="absolute inset-0 bg-[#7b4b2c]/0 transition-all duration-500 group-hover:bg-[#7b4b2c]/10" />



                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-full
                      w-full
                      flex-col
                      p-6
                      sm:p-7
                      lg:p-9
                    "
                  >


                    <div className="flex items-start justify-between">

                      {/* ICON BOX */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          border
                          border-[#e0b77f]
                          bg-[#251810]/20
                          text-[#e7bd89]
                          backdrop-blur-[2px]
                          transition-all
                          duration-300
                          group-hover:bg-[#bd814a]
                          group-hover:text-white
                        "
                      >
                        <Icon size={21} strokeWidth={1.8} />
                      </div>


                      <span
                        className="
                          pt-1
                          text-xs
                          font-bold
                          tracking-[0.08em]
                          text-[#efc58f]
                        "
                      >
                        {service.number}
                      </span>

                    </div>


                    

                    <div className="mt-auto max-w-full">

                      

                      <h3
                        className="
                          font-serif
                          text-[2rem]
                          leading-[1]
                          text-white
                          sm:text-[2.2rem]
                          lg:text-[2.4rem]
                        "
                      >
                        {service.title}
                      </h3>


                      {/* SUBTITLE */}

                      <p
                        className="
                          mt-3
                          max-w-md
                          text-sm
                          leading-6
                          text-white/80
                          sm:text-[15px]
                        "
                      >
                        {service.subtitle}
                      </p>


                      {/* CTA */}

                      <div
                        className="
                          mt-5
                          inline-flex
                          items-center
                          gap-2
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#e8b87f]
                        "
                      >
                        Explore Service

                        <ArrowUpRight
                          size={14}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                          "
                        />
                      </div>

                    </div>

                  </div>

                </button>
              );
            })}

          </div>

        </div>
      </section>



      {selectedService && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            overflow-y-auto
            bg-black/70
            p-4
            backdrop-blur-sm
            sm:p-6
          "
          onClick={() => setSelectedService(null)}
        >

          <div
            className="
              relative
              my-auto
              w-full
              max-w-5xl
              overflow-hidden
              bg-[#f8f5ef]
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >


            <button
              type="button"
              aria-label="Close service details"
              onClick={() => setSelectedService(null)}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                bg-white/90
                text-[#35251b]
                shadow-lg
                transition-all
                duration-300
                hover:bg-[#6f4328]
                hover:text-white
              "
            >
              <X size={19} />
            </button>



            <div className="grid md:grid-cols-2">


              <div className="h-[280px] md:h-[600px]">

                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="h-full w-full object-cover"
                />

              </div>


              <div className="p-7 sm:p-10 lg:p-12">

                <p className="section-label">
                  Service {selectedService.number}
                </p>

                <div className="gold-line mt-4" />

                <h3 className="mt-5 font-serif text-4xl leading-tight text-[#35251b] sm:text-5xl">
                  {selectedService.title}
                </h3>

                <p className="mt-4 text-sm font-semibold text-[#a66a38]">
                  {selectedService.subtitle}
                </p>

                <p className="mt-5 text-sm leading-7 text-[#756557]">
                  {selectedService.description}
                </p>



                <div className="mt-7 border-t border-[#ddd0c0] pt-6">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8b6c55]">
                    What's Included
                  </p>

                  <div className="mt-4 space-y-3">

                    {selectedService.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-start gap-3 text-sm text-[#493326]"
                      >

                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a66a38]" />

                        <span>{detail}</span>

                      </div>
                    ))}

                  </div>

                </div>



                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    bg-[#6f4328]
                    px-6
                    py-4
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#4f2e1d]
                    hover:shadow-lg
                  "
                >
                  Plan This Event

                  <ArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>

              </div>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default Services;