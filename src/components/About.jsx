import { ArrowUpRight, Check, Sparkles } from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f5ef] py-24 lg:py-32"
    >
      <div className="container-main">

        
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">

          

          <div className="relative">

            {/* Decorative border */}

            <div className="absolute -left-3 -top-3 hidden h-full w-full border border-[#c6a27c]/40 sm:block" />

            <div className="relative overflow-hidden bg-[#e8ded2]">

              <img
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1400&q=90"
                alt="Elegant catering table with beautifully presented food"
                className="h-[460px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[570px] lg:h-[620px]"
              />

             

              <div className="absolute inset-0 bg-gradient-to-t from-[#211711]/30 via-transparent to-transparent" />

            </div>


            <div className="absolute -bottom-7 right-4 bg-[#2a1e16] px-7 py-6 text-white shadow-2xl sm:-right-6 sm:px-8">

              <div className="flex items-center gap-3">

                <Sparkles
                  size={16}
                  className="text-[#d7a875]"
                />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Since 2012
                </span>

              </div>

              <p className="mt-2 font-serif text-4xl text-[#d7a875]">
                12+
              </p>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                Years of Experience
              </p>

            </div>

          </div>


         

          <div className="lg:pl-3">

           

            <p className="section-label">
              Our Story
            </p>

            <div className="gold-line mt-5" />


           

            <h2 className="section-title mt-6 max-w-xl">
              Food made with
              <span className="block text-[#a66a38]">
                purpose & passion.
              </span>
            </h2>


           

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#6f5e51] sm:text-[15px]">
              At Aurelia, we believe exceptional catering is about
              more than great food. It is about creating an atmosphere,
              bringing people together and turning important moments
              into lasting memories.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f5e51] sm:text-[15px]">
              From intimate family celebrations to grand weddings and
              corporate occasions, our team takes care of every detail
              with warmth, precision and genuine hospitality.
            </p>


            

            <div className="mt-9 grid gap-x-8 gap-y-5 sm:grid-cols-2">

            

              <div className="group flex items-center gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-[#9a5e31] transition duration-300 group-hover:bg-[#6f4328] group-hover:text-white">
                  <Check size={15} />
                </span>

                <span className="text-sm font-semibold text-[#493326]">
                  Fresh Ingredients
                </span>

              </div>


             

              <div className="group flex items-center gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-[#9a5e31] transition duration-300 group-hover:bg-[#6f4328] group-hover:text-white">
                  <Check size={15} />
                </span>

                <span className="text-sm font-semibold text-[#493326]">
                  Expert Chefs
                </span>

              </div>


             

              <div className="group flex items-center gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-[#9a5e31] transition duration-300 group-hover:bg-[#6f4328] group-hover:text-white">
                  <Check size={15} />
                </span>

                <span className="text-sm font-semibold text-[#493326]">
                  Custom Menus
                </span>

              </div>


              

              <div className="group flex items-center gap-3">

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eadbc9] text-[#9a5e31] transition duration-300 group-hover:bg-[#6f4328] group-hover:text-white">
                  <Check size={15} />
                </span>

                <span className="text-sm font-semibold text-[#493326]">
                  Reliable Service
                </span>

              </div>

            </div>


            

            <div className="mt-9 flex flex-col gap-5 border-t border-[#d9cfc3] pt-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="font-serif text-2xl text-[#35251b]">
                  500+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a7768]">
                  Celebrations Served
                </p>

              </div>


              <div>

                <p className="font-serif text-2xl text-[#35251b]">
                  50+
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a7768]">
                  Signature Dishes
                </p>

              </div>


              <div>

                <p className="font-serif text-2xl text-[#35251b]">
                  100%
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8a7768]">
                  Personalised Service
                </p>

              </div>

            </div>


          

            <a
              href="#services"
              className="group mt-9 inline-flex items-center gap-3 bg-[#6f4328] px-6 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[#4f2e1d] hover:shadow-lg"
            >

              View Our Services

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;