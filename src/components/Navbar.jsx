import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Menus", "#menu"],
    ["Gallery", "#gallery"],
    ["Testimonials", "#testimonials"],
  ];

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#1d1712]/95 text-white backdrop-blur-xl">

      <div className="container-main">

        

        <div className="flex h-[76px] items-center justify-between">

         

          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >

            <div className="relative flex h-10 w-10 items-center justify-center border border-[#c59a69] text-[#e4c399] transition duration-300 group-hover:bg-[#c59a69] group-hover:text-[#211711]">

              <span className="font-serif text-lg">
                A
              </span>

            </div>


            <div>

              <p className="text-[21px] font-bold tracking-wide">
                AURELIA
              </p>

              <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#cba77b]">
                Premium Catering
              </p>

            </div>

          </a>


          

          <nav className="hidden items-center gap-7 lg:flex">

            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="group relative py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70 transition duration-300 hover:text-[#e5bf91]"
              >

                {name}
{/* Hover Line */}

                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-[#c59a69] transition-all duration-300 group-hover:w-full" />

              </a>
            ))}

          </nav>


        
          <a
            href="#contact"
            className="hidden items-center gap-2 border border-[#c49a6b] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-[#f1d6b4] transition duration-300 hover:bg-[#c49a6b] hover:text-[#25170f] lg:flex"
          >

            Plan Your Event

            <ArrowUpRight size={14} />

          </a>


          

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition duration-300 hover:border-[#c59a69] hover:text-[#e5bf91] lg:hidden"
          >

            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>


        
                

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[500px] border-t border-white/10 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <nav className="flex flex-col py-3">

            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/10 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/75 transition duration-300 hover:pl-2 hover:text-[#e5bf91]"
              >

                {name}

                <ArrowUpRight
                  size={14}
                  className="text-[#c59a69]"
                />

              </a>
            ))}


            

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 bg-[#bd8954] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#d19a64]"
            >

              Plan Your Event

              <ArrowUpRight size={15} />

            </a>

          </nav>

        </div>

      </div>

    </header>
  );
}

export default Navbar;