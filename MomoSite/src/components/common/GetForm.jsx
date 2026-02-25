import React from 'react'

const GetForm = () => {
  return (
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
  )
}

export default GetForm  