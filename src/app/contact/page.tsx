'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-14">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] grid-pattern" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
              inline-flex items-center rounded-full
              bg-cyan-100 px-5 py-2 text-sm
              font-semibold text-cyan-700
            "
          >
            Contact Us
          </span>

          <h1
            className="
              mt-6 text-4xl font-black
              leading-tight text-slate-900
              md:text-6xl
            "
          >
            Let’s Build Something
            <span
              className="
                block bg-linear-to-r
                from-cyan-500 via-blue-500 to-indigo-500
                bg-clip-text text-transparent
              "
            >
              Amazing Together
            </span>
          </h1>

          <p
            className="
              mx-auto mt-6 max-w-2xl
              text-base leading-8 text-slate-500
              md:text-lg
            "
          >
            Have questions about products, orders or collaborations? Our team is
            always ready to help you with a modern shopping experience.
          </p>
        </div>

        {/* Main Grid */}
        <div
          className="
            mt-16 grid gap-10
            lg:grid-cols-2
          "
        >
          {/* Left Contact Info */}
          <div
            className="
              rounded-4xl border border-slate-100
              bg-white p-8 shadow-xl shadow-slate-100
            "
          >
            <h2 className="text-3xl font-black text-slate-900">Get In Touch</h2>

            <p className="mt-4 text-slate-500 leading-7">
              We’d love to hear from you. Reach out anytime and our support team
              will respond as quickly as possible.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-5">
              {/* Email */}
              <div
                className="
                  flex items-start gap-4 rounded-3xl
                  border border-slate-100 bg-slate-50
                  p-5 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center
                    justify-center rounded-2xl
                    bg-linear-to-r
                    from-cyan-500 to-blue-500
                    text-white
                  "
                >
                  <Mail className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Email Address
                  </h3>

                  <p className="mt-1 text-slate-500">support@shopcart.com</p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="
                  flex items-start gap-4 rounded-3xl
                  border border-slate-100 bg-slate-50
                  p-5 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center
                    justify-center rounded-2xl
                    bg-linear-to-r
                    from-pink-500 to-purple-500
                    text-white
                  "
                >
                  <Phone className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Phone Number
                  </h3>

                  <p className="mt-1 text-slate-500">+880 1234-567890</p>
                </div>
              </div>

              {/* Location */}
              <div
                className="
                  flex items-start gap-4 rounded-3xl
                  border border-slate-100 bg-slate-50
                  p-5 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center
                    justify-center rounded-2xl
                    bg-linear-to-r
                    from-orange-500 to-red-500
                    text-white
                  "
                >
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Office Location
                  </h3>

                  <p className="mt-1 text-slate-500">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Time */}
              <div
                className="
                  flex items-start gap-4 rounded-3xl
                  border border-slate-100 bg-slate-50
                  p-5 transition-all duration-300
                  hover:-translate-y-1 hover:shadow-lg
                "
              >
                <div
                  className="
                    flex h-14 w-14 items-center
                    justify-center rounded-2xl
                    bg-linear-to-r
                    from-emerald-500 to-teal-500
                    text-white
                  "
                >
                  <Clock className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Working Hours
                  </h3>

                  <p className="mt-1 text-slate-500">Mon - Sat : 9AM - 10PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex items-center gap-4">
              {[
                {
                  icon: FaFacebook,
                  label: 'Facebook'
                },
                {
                  icon: FaInstagram,
                  label: 'Instagram'
                },
                {
                  icon: FaTwitter,
                  label: 'Twitter'
                },
                {
                  icon: FaLinkedin,
                  label: 'LinkedIn'
                }
              ].map((social, index) => {
                const Icon = social.icon

                return (
                  <button
                    key={index}
                    type="button"
                    title={social.label}
                    aria-label={social.label}
                    className="
          flex h-12 w-12 items-center
          justify-center rounded-full
          border border-slate-200 bg-white
          text-slate-600 shadow-md
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-linear-to-r
          hover:from-cyan-500
          hover:to-blue-500
          hover:text-white
        "
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Form */}
          <div
            className="
              rounded-4xl border border-slate-100
              bg-white p-8 shadow-xl shadow-slate-100
            "
          >
            <h2 className="text-3xl font-black text-slate-900">Send Message</h2>

            <form className="mt-10 space-y-6">
              {/* Name */}
              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="
                    w-full rounded-2xl border
                    border-slate-200 bg-slate-50
                    px-5 py-4 outline-none
                    transition-all duration-300
                    focus:border-cyan-500
                    focus:bg-white
                    focus:ring-4 focus:ring-cyan-100
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full rounded-2xl border
                    border-slate-200 bg-slate-50
                    px-5 py-4 outline-none
                    transition-all duration-300
                    focus:border-cyan-500
                    focus:bg-white
                    focus:ring-4 focus:ring-cyan-100
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-3 block font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="
                    w-full rounded-2xl border
                    border-slate-200 bg-slate-50
                    px-5 py-4 outline-none
                    transition-all duration-300
                    focus:border-cyan-500
                    focus:bg-white
                    focus:ring-4 focus:ring-cyan-100
                  "
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
                  inline-flex items-center gap-3
                  rounded-full bg-linear-to-r
                  from-cyan-500 via-blue-500 to-indigo-500
                  px-8 py-4 text-lg font-bold text-white
                  shadow-xl shadow-cyan-200
                  transition-all duration-300
                  hover:scale-105 hover:shadow-2xl
                "
              >
                Send Message
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
