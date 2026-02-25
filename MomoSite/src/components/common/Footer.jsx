import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" flex flex-col items-center pt-[156px] pb-[55px]  px-[206px] gap-[30px]">
        {/*informational stuffs  */}
        <div className="flex w-full justify-between">
          {/* Left section: Brand logo and company description */}
          <div className="flex flex-col pr-4 pb-4 gap-3 w-[408px]">
            <div className="flex gap-2">
              <img src="images/logo.png" alt="logo" className="w-10 h-10" />
              <h4 className="font-bold text-[31px] text-[#0C6967]">momos</h4>
            </div>

            <p className="text-[#6B788E] font-normal text-[16px] w-[392px] h-[116px] ">
              Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
              molestie. Volutpat quis egestas porttitor turpis sit in. Lorem
              nunc nullam morbi urna amet suspendisse nullam ac vivamus.
            </p>
          </div>

          {/* Right section: Footer navigation columns */}
          <div className="flex gap-[48px]">
            {/* Column 1: Main navigation links */}
            <div className="flex flex-col gap-4 w-[168px] ">
              <h4 className="font-bold text-[31px] text-[#0C6967]">momos</h4>
              <div className="flex flex-col gap-3">
                <Link
                  to="/about"
                  className="hover:font-semibold hover:underline hover:text-[#D95103]" 
                >
                  About Us
                </Link>

                <Link
                  to="/menu"
                  className="hover:font-semibold hover:underline hover:text-[#D95103]" 
                >
                  Our Menu
                </Link>

                <Link
                  to="/service"
                  className="hover:font-semibold hover:underline hover:text-[#D95103]" 
                >
                  Our Services
                </Link>
              </div>
            </div>

            {/* Column 2: Legal and support links */}
            <div className="flex flex-col gap-4 w-[168px] ">
              <h4 className="font-bold text-[31px] text-[#0C6967]">Legals</h4>
              <div className="flex flex-col gap-3">
                <Link to="/"  className="hover:font-semibold hover:underline hover:text-[#D95103]" >Terms & Conditions</Link>

                <Link to="/"  className="hover:font-semibold hover:underline hover:text-[#D95103]" >Privacy Policy</Link>
              

                <Link to="/"  className="hover:font-semibold hover:underline hover:text-[#D95103]" >Support</Link>
              </div>
            </div>

            {/* Column 3: Social media links (icons only) */}
            <div className="flex flex-col gap-4 w-[168px] ">
              <h4 className="font-bold text-[31px] text-[#0C6967]">
                Follow Us
              </h4>
              <div className="flex  gap-4">
                <img
                  src="/images/footer-icon1.png"
                  alt="social-media-icon"
                  className="w-10 h-10 
                "
                />
                <img
                  src="/images/footer-icon2.png"
                  alt="social-media-icon"
                  className="w-10 h-10"
                />
                <img
                  src="/images/footer-icon3.png"
                  alt="social-media-icon"
                  className="w-10 h-10"
                />
              </div>
              <div className="flex  gap-4 w-[168px] ">
                <img
                  src="/images/footer-icon4.png"
                  alt="social-media-icon"
                  className="w-10 h-10 
                "
                />
                <img
                  src="/images/footer-icon5.png"
                  alt="social-media-icon"
                  className="w-10 h-10 
                "
                />
                <img
                  src="/images/footer-icon6.png"
                  alt="social-media-icon"
                  className="w-10 h-10 
                "
                />
              </div>
            </div>
          </div>
        </div>

        <img src="/images/footerline.png" alt="" />

        {/*Absolute-bottom copyright section */}
        <div className="text-[#6B788E] text-[16px] font-normal">
          Copyright ©️2026 Momo & Cuisines Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
