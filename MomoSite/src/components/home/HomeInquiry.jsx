import React from "react";
import { FaClock, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const HomeInquiry = () => {
  return (
    <div className="px-[156px] py-[64px] flex flex-col items-center gap-[56px] bg-white">

      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h3 className="font-bold text-[39px] text-[#101828]">
          Get <span className="text-[#D95103]">In Touch</span>
        </h3>
        <h5 className="text-[#0C6967] text-[25px] font-bold">
          Our Friendly team would love to hear from you
        </h5>
      </div>

      {/* Main Container */}
      <div className="flex justify-evenly w-[1128px] rounded-3xl p-[20px] gap-[40px] bg-[#f1f3f4e5] shadow-md">

        {/* LEFT PANEL */}
        <div className="flex flex-col w-[461px] rounded-[16px] p-8 bg-[#0C6967] gap-[40px] text-white">

          {/* Address */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <FaLocationDot size={20} />
              Our Address
            </p>
            <p className="italic">
              New Baneshwor, Kathmandu, Bagmati, Nepal
            </p>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <IoIosCall size={20} />
              Our Contacts
            </p>

            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">Mobile</p>
                <p className="italic">980-5689789</p>
                <p className="italic">9841-275897</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">Landline</p>
                <p className="italic">01-4783972</p>
              </div>
            </div>
          </div>

          {/* Service Time */}
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-2 text-[20px] font-semibold">
              <FaClock size={20} />
              Our Service Time
            </p>

            <div className="flex gap-[56px]">
              <div className="flex flex-col gap-2">
                <p className="font-semibold">MON - FRI</p>
                <p className="italic">10 am - 8 pm</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">SAT - SUN</p>
                <p className="italic">Closed</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-6 pt-6">
            <p className="italic">Get in touch in social networks</p>
            <div className="flex gap-4">
              <FaFacebook size={28} className="cursor-pointer hover:text-[#D95103] transition" />
              <FaInstagram size={28} className="cursor-pointer hover:text-[#D95103] transition" />
              <FaTiktok size={28} className="cursor-pointer hover:text-[#D95103] transition" />
            </div>
          </div>

        </div>

        {/* RIGHT PANEL (FORM) */}

        <div>
        <form className="flex flex-col flex-1 bg-white rounded-2xl py-10 px-8 gap-8">

          {/* Name Row */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">First Name</label>
              <input
                type="text"
                className="h-12 border border-gray-200 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-[#0C6967]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700">Last Name</label>
              <input
                type="text"
                className="h-12 border border-gray-200 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-[#0C6967]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              className="h-12 border border-gray-200 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-[#0C6967]"
            />
          </div>

          {/* Service Dropdown */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">
              What can we do for you
            </label>
            <select className="h-12 border border-gray-200 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-[#0C6967]">
              <option>Choose</option>
              <option>Customer Support</option>
              <option>Sales Inquiry</option>
              <option>General Feedback</option>
            </select>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Phone</label>
            <input
              type="tel"
              className="h-12 border border-gray-200 rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-[#0C6967]"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows="4"
              className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#0C6967]"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[#D95103] text-white py-5 px-10 rounded-full font-semibold hover:bg-[#b84202] transition
            w-[256px]"
          >
            Send Message
          </button>

        </form>
        </div>
      </div>
    </div>
  );
};

export default HomeInquiry;