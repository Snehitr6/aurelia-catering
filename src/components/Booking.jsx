import { useState } from "react";
import {
  CheckCircle2,
  CalendarDays,
  Send,
} from "lucide-react";

function Booking() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSent(true);

    e.target.reset();

    setTimeout(() => {
      setSent(false);
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="bg-[#292019] py-24 text-white lg:py-32"
    >
      <div className="container-main">

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d0a373]">
              Let's Celebrate
            </p>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl">
              Tell us about
              <span className="block italic text-[#d6ad7d]">
                your event.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
              Share a few details and our team will get in touch to
              discuss menus, guest count, location and your requirements.
            </p>

            <div className="mt-9 space-y-4 text-sm text-white/70">
              <a
                href="tel:+919876543210"
                className="block hover:text-white"
              >
                +91 98765 43210
              </a>

              <a
                href="mailto:hello@savoriacatering.com"
                className="block hover:text-white"
              >
                hello@aureliacatering.com
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bengaluru+Karnataka"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Bengaluru, Karnataka
              </a>
            </div>

          </div>

          <div className="bg-[#f8f5ef] p-6 text-[#35251b] sm:p-9">

            {sent && (
              <div className="mb-6 flex gap-3 border border-green-200 bg-green-50 p-4 text-green-700">
                <CheckCircle2 size={20} />

                <div>
                  <p className="font-bold">
                    Request received!
                  </p>

                  <p className="mt-1 text-xs">
                    Our team will contact you shortly.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Name
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Phone
                  </label>

                  <input
                    required
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Event Type
                  </label>

                  <select
                    required
                    defaultValue=""
                    className="w-full border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  >
                    <option value="" disabled>
                      Select event
                    </option>
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Birthday</option>
                    <option>Traditional Function</option>
                    <option>Private Celebration</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Event Date
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7664]"
                    />

                    <input
                      required
                      type="date"
                      className="w-full border border-[#d9cdbc] bg-white py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#9d6435]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Guests
                  </label>

                  <input
                    required
                    type="number"
                    min="1"
                    placeholder="100"
                    className="w-full border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider">
                    Tell Us More
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Location, menu preferences, special requirements..."
                    className="w-full resize-none border border-[#d9cdbc] bg-white px-4 py-3.5 text-sm outline-none focus:border-[#9d6435]"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 bg-[#6f4328] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4f2e1d]"
              >
                Send Enquiry
                <Send size={15} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Booking;