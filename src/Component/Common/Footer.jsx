import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import headerLogo from '../../assets/logo/headerlogo.png'

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
               <Link to="/" className="flex items-center">
                         <img 
                           src={headerLogo} 
                           alt="Dobhi Premium Laundry" 
                           className="h-10 w-auto"
                         />
                       </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional laundry and dry cleaning services at your doorstep. Quality care for your clothes with eco-friendly products.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="tel:+919257479576" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  +91 92574 79576
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:support@dobhi.com" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                  support@dobhi.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                 <a target="_blank"  href="https://maps.google.com/?q=D-153,+Hanuman+Nagar,+Amerpali+Circle,+Vaishali+Nagar,+Jaipur" className="text-gray-300 text-sm hover:text-blue-400 transition-colors">
                 Dobhi Headquarters<br />
                  Jaipur, Rajasthan, India
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/About" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/How-to-work" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/Pricing" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Subscription
                </Link>
              </li>
              <li>
                <Link to="/Service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/Service" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 text-sm hover:text-blue-400 transition-colors">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-5 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-6">Follow Us</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Dobhi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <span className="text-red-500">❤</span> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
