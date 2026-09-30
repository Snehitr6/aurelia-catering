import { ArrowRight, CalendarDays, Play } from "lucide-react";
import cateringHeroVideo from "../assets/catering-hero.mp4";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#1b120c]"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-center pointer-events-none"
        src={cateringHeroVideo}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/45" />

      {/* Warm Overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#160d08]/85 via-[#1d1109]/45 to-transparent" />

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 z-[2] h-48 bg-gradient-to-t from-[#1b120c] to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container-main w-full">
          <div className="max-w-3xl pt-20 md:pt-24">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d1a06a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e0b77f]">
                Premium Catering & Events
              </span>
            </div>

            <h1 className="font-serif text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Crafted for
              <span className="block italic text-[#dfb27b]">
                unforgettable
              </span>
              moments.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Exceptional food, beautiful presentation and thoughtful service
              for weddings, celebrations, corporate events and every special
              occasion.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#bd8954] px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#d29a64]"
              >
                Plan Your Event
                <ArrowRight size={15} />
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 border border-white/30 bg-black/10 px-7 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition duration-300 hover:border-[#d1a06a] hover:text-[#e0b77f]"
              >
                Explore Our Menus
                <Play size={14} />
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/60">
              <div>
                <p className="font-serif text-2xl text-white">10+</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em]">
                  Years Experience
                </p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="font-serif text-2xl text-white">500+</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em]">
                  Events Served
                </p>
              </div>

              <div className="h-9 w-px bg-white/20" />

              <div>
                <p className="font-serif text-2xl text-white">50+</p>
                <p className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em]">
                  Signature Dishes
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="h-8 w-px bg-white/40" />
      </a>
    </section>
  );
}

export default Hero;
