import { MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Brand Info */}
        <div>
          <h1 className="text-xl font-bold mb-2">Mariner's First Choice</h1>
          <div className="flex items-center">
            <MapPin className="w-10 h-8 " />
            <div className="text-sm text-gray-400 leading-snug">
              1st Floor, City Center Mall<br />
              Beside Bata, Patna
            </div>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div className="">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm text-gray-400">Email: support@baazar.com</p>
          <p className="text-sm text-gray-400">Phone: +91 - 9617966188 </p>
          <h2 className="text-lg mt-6 font-semibold mb-2">Follow Us</h2>
          <div className="social flex ">
            <a href="https://www.instagram.com/marinersfirstchoice?utm_source=ig_web_button_share_sheet&igsh=MWtjZ3d0dXg1M2Nndg==">
              <FaInstagram className="text-lg" />
            </a>

            <FaFacebook className="mx-2 text-lg" />
            <FaYoutube className=" text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-4 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Mariner's First Choice. All rights
        reserved.
        <p className="mt-2">Crafted with ❤️ by Nilkamal</p>
      </div>
    </footer>
  );
}
