import { FaPinterest, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="w-6 h-6 rounded-full bg-green-800 inline-block"></span>
            <h2 className="font-bold text-xl">I'm Available to Work</h2>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Find me online.</h3>
            <p className="text-gray-400 text-sm">
              Thoughts, Tips, and General Life Updates.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-start text-xl">
            <a href="#" className="hover:text-gray-300"><FaPinterest /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-6 md:mt-0">
          <button className="px-6 py-2 border border-purple-600 rounded-full hover:bg-purple-600/10 transition">
            Get in touch
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-400">
        © Cyber Rebel 2025
      </div>
    </footer>
  );
}
