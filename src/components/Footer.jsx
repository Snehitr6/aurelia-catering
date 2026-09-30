import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-[#211711] text-white">

      

      <div className="container-main py-16 sm:py-20">

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">

         
          <div>

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="text-left"
            >
              <h2 className="font-serif text-3xl font-semibold tracking-wide">
                Aurelia
              </h2>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-[#d7a875]">
                Premium Catering
              </p>
            </button>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Exceptional food, thoughtful service and memorable
              experiences for weddings, celebrations, corporate
              events and special occasions.
            </p>

           

            <div className="mt-7 flex gap-3">

             

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition duration-300 hover:border-[#d7a875] hover:bg-[#d7a875] hover:text-[#211711]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/60 transition duration-300 hover:border-[#d7a875] hover:bg-[#d7a875] hover:text-[#211711]"
              >
                <FaFacebookF size={16} />
              </a>

            </div>

          </div>


         
          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7a875]">
              Explore
            </h3>

            <div className="mt-6 space-y-4">

              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Home
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                About Us
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Our Services
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("menu")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Our Menu
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("why-us")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Why Choose Us
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("gallery")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Gallery
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("testimonials")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Testimonials
              </button>

            </div>

          </div>


         

          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7a875]">
              Services
            </h3>

            <div className="mt-6 space-y-4">

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Wedding Catering
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Corporate Events
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Birthday Celebrations
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Private Events
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Buffet Service
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("services")}
                className="block text-sm text-white/55 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Live Counters
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 text-sm text-[#d7a875] transition duration-300 hover:text-white"
              >
                Plan Your Event
                <ArrowUpRight size={14} />
              </button>

            </div>

          </div>



          <div>

            <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7a875]">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              

              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-white/55 transition duration-300 hover:text-white"
              >

                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#d7a875]"
                />

                <span className="text-sm">
                  +91 98765 43210
                </span>

              </a>


              

              <a
                href="mailto:hello@savoria.com"
                className="flex items-start gap-3 text-white/55 transition duration-300 hover:text-white"
              >

                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#d7a875]"
                />

                <span className="text-sm">
                  hello@aurelia.com
                </span>

              </a>



              <div className="flex items-start gap-3 text-white/55">

                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#d7a875]"
                />

                <span className="text-sm leading-6">
                  Bengaluru, Karnataka
                  <br />
                  Serving events across the city
                </span>

              </div>

            </div>


            

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-7 inline-flex items-center gap-3 border border-[#d7a875]/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d7a875] transition duration-300 hover:bg-[#d7a875] hover:text-[#211711]"
            >
              Book Catering
              <ArrowUpRight size={14} />
            </button>

          </div>

        </div>



        <div className="mt-14 border-t border-white/10 pt-8">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="font-serif text-xl sm:text-2xl">
                Planning something special?
              </p>

              <p className="mt-1 text-xs text-white/40">
                Let's create a menu your guests will remember.
              </p>

            </div>


            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex w-fit items-center gap-3 bg-[#bd814a] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#d29a64]"
            >
              Start Planning
              <ArrowUpRight size={15} />
            </button>

          </div>

        </div>

      </div>


      

      <div className="border-t border-white/10">

        <div className="container-main flex flex-col gap-3 py-5 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Savoria Catering.
            All rights reserved.
          </p>

          <div className="flex gap-5">

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="transition duration-300 hover:text-white"
            >
              Back to Top
            </button>

            <span>
              Made with care
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
