import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    guests: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventType: "",
      eventDate: "",
      guests: "",
      service: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section
      id="contact"
      className="bg-[#f8f5ef] py-24 sm:py-28 lg:py-32"
    >
      <div className="container-main">

        
        <div className="mx-auto max-w-3xl text-center">

          <p className="section-label">
            Let's Celebrate
          </p>

          <h2 className="section-title mt-5">
            Tell us about your
            <span className="block text-[#a66a38]">
              special occasion.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#756557] sm:text-base">
            Share a few details about your event and our team will
            get back to you with menu ideas, pricing and availability.
          </p>

        </div>

        
        <div className="mx-auto mt-14 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* ================= CONTACT INFO ================= */}
          <div className="bg-[#2a1d15] p-7 text-white sm:p-9 lg:p-10">

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d7a875]">
              Get In Touch
            </p>

            <h3 className="mt-5 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
              Let's make your
              <span className="block italic text-[#d7a875]">
                event memorable.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              Whether it's an intimate family gathering or a large
              celebration, we're here to make every detail delicious.
            </p>

            
            <div className="mt-10 space-y-6">

              <a
                href="tel:+919876543210"
                className="flex items-start gap-4 transition hover:text-[#d7a875]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-[#d7a875]">
                  <Phone size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm">
                    +91 98765 43210
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@savoria.com"
                className="flex items-start gap-4 transition hover:text-[#d7a875]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-[#d7a875]">
                  <Mail size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    hello@savoria.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-[#d7a875]">
                  <MapPin size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                    Location
                  </p>

                  <p className="mt-1 max-w-[220px] text-sm leading-6">
                    Bengaluru, Karnataka
                    <br />
                    Serving events across the city
                  </p>
                </div>

              </div>

            </div>

            
            <div className="mt-10 grid grid-cols-2 border-t border-white/10 pt-7">

              <div>
                <p className="font-serif text-2xl text-[#d7a875]">
                  12+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
                  Years Experience
                </p>
              </div>

              <div>
                <p className="font-serif text-2xl text-[#d7a875]">
                  500+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/35">
                  Events Served
                </p>
              </div>

            </div>

          </div>

        
          <div className="bg-white p-6 shadow-sm sm:p-8 lg:p-10">

            {submitted ? (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eee3d4] text-[#9a5e31]">
                  <CheckCircle2 size={32} />
                </div>

                <h3 className="mt-6 font-serif text-3xl text-[#35251b]">
                  Thank you!
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#756557]">
                  We've received your enquiry. Our catering team will
                  review your requirements and get in touch with you
                  shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 border-b border-[#a66a38] pb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8f572e]"
                >
                  Submit Another Enquiry
                </button>

              </div>
            ) : (
              <form onSubmit={handleSubmit}>

                <div className="mb-8">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a5e31]">
                    Event Enquiry
                  </p>

                  <h3 className="mt-3 font-serif text-3xl text-[#35251b]">
                    Plan your celebration
                  </h3>

                </div>

              
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="form-label">
                      Your Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="form-input"
                    />
                  </div>

                </div>

                
                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="form-label">
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label className="form-label">
                      Event Type *
                    </label>

                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">
                        Select event type
                      </option>
                      <option value="Wedding">
                        Wedding
                      </option>
                      <option value="Birthday">
                        Birthday
                      </option>
                      <option value="Corporate">
                        Corporate Event
                      </option>
                      <option value="Engagement">
                        Engagement
                      </option>
                      <option value="Family">
                        Family Gathering
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>

                
                <div className="mt-5 grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="form-label">
                      Event Date *
                    </label>

                    <div className="relative">

                      <CalendarDays
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9a806c]"
                      />

                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        required
                        className="form-input pl-10"
                      />

                    </div>
                  </div>

                  <div>
                    <label className="form-label">
                      Number of Guests *
                    </label>

                    <div className="relative">

                      <Users
                        size={16}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#9a806c]"
                      />

                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="e.g. 150"
                        min="1"
                        required
                        className="form-input pl-10"
                      />

                    </div>
                  </div>

                </div>

                
                <div className="mt-5">

                  <label className="form-label">
                    Catering Service
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">
                      Select preferred service
                    </option>
                    <option value="Full Catering">
                      Full Event Catering
                    </option>
                    <option value="Buffet">
                      Buffet Service
                    </option>
                    <option value="Live Counters">
                      Live Food Counters
                    </option>
                    <option value="Drop Off">
                      Food Delivery / Drop-off
                    </option>
                    <option value="Custom">
                      Custom Requirement
                    </option>
                  </select>

                </div>

                
                <div className="mt-5">

                  <label className="form-label">
                    Tell Us More
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your event, menu preferences or any special requirements..."
                    className="form-input resize-none"
                  />

                </div>

                
                <button
                  type="submit"
                  className="mt-7 flex w-full items-center justify-center gap-3 bg-[#6f4328] px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#4f2e1d]"
                >
                  Send Enquiry
                  <ArrowUpRight size={16} />
                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-[#9a8a7d]">
                  By submitting this form, you agree to be contacted
                  regarding your catering enquiry.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;