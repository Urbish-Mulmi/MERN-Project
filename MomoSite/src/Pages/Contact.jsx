import React from "react";
import Map from "../components/common/Map";

import GetForm from "../components/common/GetForm";

const Contact = () => {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">

          {/* Top Script Image */}
          <div className="w-80 pt-10">
            <img
              src="/images/Contact-text.png"
              alt="Our contact cursive text"
              className="w-full object-contain"
            />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-4">
            <p className="font-light text-xl text-[#6B788E] tracking-[0.12em]">
              GET IN TOUCH
            </p>

            <h4 className="text-[#101828] font-bold text-3xl leading-snug">
              <span className="text-[#D95103]">Our Friendly Team </span>
              would love to hear from you
            </h4>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

            {/* LOCATION */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-8 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <img src="/images/Contact-image1.png" alt="" className="w-8 h-8" />
                <p className="font-semibold text-sm">LOCATION</p>
              </div>
              <p className="italic font-semibold text-[#252D43]">
                New Baneshwor - 41201 <br />
                Kathmandu, Bagmati, Nepal
              </p>
            </div>

            {/* PHONE */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-8 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <img src="/images/Contact-image2.png" alt="" className="w-8 h-8" />
                <p className="font-semibold text-sm">PHONE</p>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between">
                  <p className="text-[#0C6967] font-semibold">Mobile:</p>
                  <div className="flex flex-col text-right italic text-[#252D43]">
                    <p>(+977) 980 5689789</p>
                    <p>(+977) 9841 275897</p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="text-[#0C6967] font-semibold">Tel:</p>
                  <p className="italic text-[#252D43]">01-4783972</p>
                </div>
              </div>
            </div>

            {/* SERVICE TIME */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col gap-8 hover:shadow-lg transition">
              <div className="flex items-center gap-3">
                <img src="/images/Contact-image3.png" alt="" className="w-8 h-8" />
                <p className="font-semibold text-sm">SERVICE TIME</p>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between">
                  <p className="text-[#0C6967] font-semibold">MON - FRI</p>
                  <p className="italic text-[#252D43]">8 am - 8 pm</p>
                </div>

                <div className="flex justify-between">
                  <p className="text-[#0C6967] font-semibold">SAT - SUN</p>
                  <p className="italic text-[#252D43]">Closed</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAP + FORM SECTION ================= */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Map */}
          <div className="w-full  rounded-2xl overflow-hidden shadow-md">
            <Map />
          </div>

          {/* Form */}
          <div className="w-full">
            <GetForm />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;