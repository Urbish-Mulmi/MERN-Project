import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth0();

  return (
    <nav className="flex items-center justify-between py-4 px-16 shadow-md h-20 fixed w-full z-50 bg-white">
      {/* Logo & Main Links */}
      <div className="flex items-center gap-6">
        <div
          className="flex items-center gap-2 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <NavLink to="./" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
            <h5 className="text-[#0C6967] font-bold text-2xl">momos</h5>
          </NavLink>
        </div>

        <div className="flex gap-4 text-[#6B788E] font-medium">
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./about">
            About Us
          </NavLink>
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./menu ">
            Our Menu
          </NavLink>
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./service ">
            Our Services
          </NavLink>
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./allergy-advice ">
            Allergy Advice
          </NavLink>
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./cart ">
            Cart
          </NavLink>
          <NavLink className="py-2 px-3   hover:text-[#0C6967]" to="./profile ">
            Profile
          </NavLink>
        </div>
      </div>

      {/* Social Icons & Buttons */}
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <FaFacebook size={32} className="text-[#A6AEBB] rounded-full
           hover:text-blue-500 transition-all duration-300" />
          <FaTiktok size={32} className="bg-[#A6AEBB] text-white p-1.5 rounded-full
           hover:bg-black transition-all duration-300" />
          <FaInstagram size={32} className="bg-[#A6AEBB] text-white p-1.5 rounded-full hover:text-white 
          hover:bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5]  transition-all duration-300 " />
        </div>


        



















        {/* Contact Us Button */}
        <NavLink
          to="./contact"
          className="bg-[#D95103] px-8 py-3 text-white text-base font-semibold rounded-full whitespace-nowrap flex items-center justify-center hover:bg-[#b84302] transition-all duration-200"
        >
          Contact Us
        </NavLink>

        {/* Login / Logout Button */}
        <div>
          {isAuthenticated ? (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
              className="bg-[#D95103] px-8 py-3 text-white text-base font-semibold rounded-full whitespace-nowrap flex items-center justify-center hover:bg-[#b84302] transition-all duration-200"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="./login"
              className="bg-[#D95103] px-8 py-3 text-white text-base font-semibold rounded-full whitespace-nowrap flex items-center justify-center hover:bg-[#b84302] transition-all duration-200"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
