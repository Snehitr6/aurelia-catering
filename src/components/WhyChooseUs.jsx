import {
  Award,
  ChefHat,
  Clock3,
  Leaf,
  Users,
  UtensilsCrossed,
  ArrowUpRight,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: ChefHat,
      number: "01",
      title: "Expert Chefs",
      description:
        "Our experienced chefs bring authentic flavours, modern presentation and consistent quality to every event.",
    },
    {
      icon: Leaf,
      number: "02",
      title: "Fresh Ingredients",
      description:
        "We carefully select fresh, quality ingredients to ensure every dish tastes as good as it looks.",
    },
    {
      icon: Clock3,
      number: "03",
      title: "On-Time Service",
      description:
        "From preparation to serving, our team is organised to deliver a smooth and punctual catering experience.",
    },
    {
      icon: Users,
      number: "04",
      title: "Trained Staff",
      description:
        "Our professional service team takes care of your guests with warmth, attention and hospitality.",
    },
    {
      icon: UtensilsCrossed,
      number: "05",
      title: "Custom Menus",
      description:
        "Choose from traditional favourites or create a personalised menu based on your event and guests.",
    },
    {
      icon: Award,
      number: "06",
      title: "Trusted Quality",
      description:
        "With years of catering experience, we focus on quality, presentation and memorable experiences.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#2a1d15] py-24 text-white lg:py-32"
    >
      
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#c99b6b]/10" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full border border-[#c99b6b]/10" />

      <div className="container-main relative z-10">

        
        <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:items-end">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7a875] sm:text-xs">
              Why Savoria
            </p>

            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              More than catering.
              <span className="block italic text-[#d7a875]">
                We create experiences.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            From the first menu discussion to the final plate served,
            our team focuses on every detail that makes your celebration
            special.
          </p>

        </div>

        
        <div className="mt-14 grid grid-cols-2 border-y border-white/10 sm:grid-cols-4">

          <div className="border-r border-white/10 px-5 py-7 text-center sm:px-8">
            <p className="font-serif text-3xl text-[#d7a875] sm:text-4xl">
              12+
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
              Years Experience
            </p>
          </div>

          <div className="px-5 py-7 text-center sm:border-r sm:border-white/10 sm:px-8">
            <p className="font-serif text-3xl text-[#d7a875] sm:text-4xl">
              500+
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
              Events Catered
            </p>
          </div>

          <div className="border-r border-t border-white/10 px-5 py-7 text-center sm:border-t-0 sm:px-8">
            <p className="font-serif text-3xl text-[#d7a875] sm:text-4xl">
              50+
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
              Menu Choices
            </p>
          </div>

          <div className="border-t border-white/10 px-5 py-7 text-center sm:border-t-0 sm:px-8">
            <p className="font-serif text-3xl text-[#d7a875] sm:text-4xl">
              100%
            </p>

            <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45">
              Commitment
            </p>
          </div>

        </div>

        
        <div className="mt-14 grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group border-b border-r border-white/10 p-7 transition duration-500 hover:bg-white/[0.04] sm:p-8"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center border border-[#d7a875]/30 text-[#d7a875] transition duration-300 group-hover:border-[#d7a875] group-hover:bg-[#d7a875] group-hover:text-[#2a1d15]">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-bold tracking-widest text-white/25">
                    {feature.number}
                  </span>

                </div>

                <h3 className="mt-10 font-serif text-2xl text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

        
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="max-w-xl text-sm leading-6 text-white/50">
            Planning something special? Let us create a catering
            experience around your celebration.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 bg-[#bd814a] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#d19a63]"
          >
            Plan Your Event
            <ArrowUpRight size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;