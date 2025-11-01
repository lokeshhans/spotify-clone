import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#121212]  text-gray-300 py-10 px-6 md:px-16 border-t-2">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">For the Record</a></li>
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h3 className="text-white font-semibold mb-4">Communities</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">For Artists</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Advertising</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Vendors</a></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Free Mobile App</a></li>
            <li><a href="#" className="hover:underline">Popular by Country</a></li>
            <li><a href="#" className="hover:underline">Import your music</a></li>
          </ul>
        </div>

        {/* Spotify Plans */}
        <div>
          <h3 className="text-white font-semibold mb-4">Spotify Plans</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Premium Individual</a></li>
            <li><a href="#" className="hover:underline">Premium Duo</a></li>
            <li><a href="#" className="hover:underline">Premium Family</a></li>
            <li><a href="#" className="hover:underline">Premium Student</a></li>
            <li><a href="#" className="hover:underline">Spotify Free</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <p className="text-xs text-gray-400 mb-4 md:mb-0">© 2025 Spotify AB</p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
            <FaInstagram size={16} />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
            <FaTwitter size={16} />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
            <FaFacebookF size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
