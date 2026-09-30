import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Phone,
} from "lucide-react";

import cateringHeroVideo from "../assets/catering-hero.mp4";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#17100c] text-white"
    >
      {/* =====================================================
          HERO VIDEO BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover object-center"
          src={cateringHeroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#120c08]/95 via-[#1c130d]/70 to-[#1c130d]/35" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#120c08] to-transparent" />

        {/* Subtle overall overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-main w-full pb-10 pt-28">
          <div className="max-w-4xl">

            {/* Small label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#d5a36e]" />

              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#e2bb8d] sm:text-xs">
                Premium Catering · Bengaluru
              </p>
            </div>

            {/* Main heading */}
            <h1 className="mt-7 max-w-4xl font-serif text-[3.7rem] leading-[0.88] tracking-[-0.04em] sm:text-7xl lg:text-[6.8rem]">
              Crafted

              <span className="block">
                flavours.
              </span>

              <span className="block italic text-[#dfb27d]">
                Cherished
              </span>

              <span className="block italic text-[#dfb27d]">
                celebrations.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Thoughtfully crafted menus, beautiful presentation and
              effortless hospitality for weddings, corporate gatherings,
              traditional functions and life's most memorable occasions.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* MENU BUTTON */}
              <a
                href="#menu"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-[#bd814a]
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  hover:bg-[#d19a63]
                "
              >
                Explore Our Menus

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              {/* BOOKING BUTTON */}
              <a
                href="#contact"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/40
                  bg-black/10
                  px-7
                  py-4
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  text-white
                  backdrop-blur-sm
                  hover:border-white
                  hover:bg-white
                  hover:text-[#251810]
                "
              >
                <CalendarDays size={15} />

                Book Your Event
              </a>
            </div>
          </div>

          {/* =====================================================
              HERO STATS
          ====================================================== */}
          <div className="mt-16 border-t border-white/20 pt-6">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-12">

                {/* STAT 1 */}
                <div>
                  <p className="font-serif text-2xl sm:text-3xl">
                    500+
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                    Events Catered
                  </p>
                </div>

                {/* STAT 2 */}
                <div>
                  <p className="font-serif text-2xl sm:text-3xl">
                    50+
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                    Menu Options
                  </p>
                </div>

                {/* STAT 3 */}
                <div>
                  <p className="font-serif text-2xl sm:text-3xl">
                    12+
                  </p>

                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                    Years Experience
                  </p>
                </div>
              </div>

              {/* DISCOVER STORY */}
              <a
                href="#about"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  self-start
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-white/65
                  hover:text-white
                  sm:self-auto
                "
              >
                Discover Our Story

                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    group-hover:border-white
                  "
                >
                  <ArrowDown
                    size={14}
                    className="transition-transform group-hover:translate-y-1"
                  />
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE CALL BUTTON
      ====================================================== */}
      <a
        href="tel:+919876543210"
        aria-label="Call Savoria Catering"
        title="Call Savoria Catering"
        className="
          fixed
          bottom-5
          right-5
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#bd814a]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-105
          hover:bg-[#d19a63]
          active:scale-95
          sm:hidden
        "
      >
        <Phone
          size={20}
          strokeWidth={2}
        />
      </a>
    </section>
  );
}

export default Hero;