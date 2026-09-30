import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya & Arjun",
      role: "Wedding Celebration",
      review:
        "The food was absolutely wonderful and every detail was handled beautifully. Our guests couldn't stop talking about the biryani and desserts. The entire team made our wedding feel truly special.",
    },
    {
      name: "Rahul Mehta",
      role: "Corporate Event",
      review:
        "From planning the menu to the final service, everything was extremely professional. The food was fresh, beautifully presented and served right on time. Highly recommended for corporate events.",
    },
    {
      name: "Ananya Sharma",
      role: "Birthday Celebration",
      review:
        "We wanted something elegant but still warm and traditional, and the team delivered exactly that. The presentation was beautiful and the food tasted even better. Everyone loved it!",
    },
    {
      name: "Vikram & Family",
      role: "Family Celebration",
      review:
        "Excellent service from beginning to end. The team was polite, organised and very attentive to our guests. The customised menu was exactly what we wanted.",
    },
  ];

  const [active, setActive] = useState(0);

  const nextTestimonial = () => {
    setActive((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const previousTestimonial = () => {
    setActive((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      className="bg-[#2a1d15] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="container-main">

    
        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7a875] sm:text-xs">
            Kind Words
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Loved by people who
            <span className="block italic text-[#d7a875]">
              celebrate with us.
            </span>
          </h2>

        </div>

        
        <div className="mx-auto mt-14 max-w-5xl">

          <div className="relative border border-white/10 bg-white/[0.03] px-6 py-10 sm:px-12 sm:py-14 lg:px-20">

            {/* QUOTE ICON */}
            <div className="absolute left-6 top-6 text-[#d7a875]/30 sm:left-10 sm:top-10">
              <Quote size={42} strokeWidth={1} />
            </div>

            
            <div className="flex justify-center gap-1">

              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill="currentColor"
                  className="text-[#d7a875]"
                />
              ))}

            </div>

            
            <blockquote className="mx-auto mt-8 max-w-3xl text-center font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-4xl">
              “{testimonial.review}”
            </blockquote>

            
            <div className="mt-9 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a875] font-serif text-lg text-[#2a1d15]">
                {testimonial.name.charAt(0)}
              </div>

              <h3 className="mt-4 font-serif text-xl">
                {testimonial.name}
              </h3>

              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#d7a875]">
                {testimonial.role}
              </p>

            </div>

            
            <div className="mt-10 flex items-center justify-center gap-3">

              <button
                onClick={previousTestimonial}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#d7a875] hover:bg-[#d7a875] hover:text-[#2a1d15]"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={17} />
              </button>

              
              <div className="mx-3 flex gap-2">

                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === active
                        ? "w-8 bg-[#d7a875]"
                        : "w-2 bg-white/25"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}

              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition hover:border-[#d7a875] hover:bg-[#d7a875] hover:text-[#2a1d15]"
                aria-label="Next testimonial"
              >
                <ArrowRight size={17} />
              </button>

            </div>

          </div>

        </div>

    
        <div className="mt-12 text-center">

          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
            500+ celebrations · Countless happy guests
          </p>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;