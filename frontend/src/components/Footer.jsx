import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F1115] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              src="https://customer-assets.emergentagent.com/job_build-marble/artifacts/fr2rv7oy_Color%20logo%20-%20no%20background.png"
              alt="Oracle Project Group"
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Oracle Project Group delivers turnkey construction, fit-outs, and specialty marble craftsmanship across the GTA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#C6A45B] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A45B] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C6A45B] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#C6A45B]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-[#C6A45B] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Marble Ave, Toronto, ON M5V 2T6
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-[#C6A45B] flex-shrink-0" />
                <a href="tel:+14165550123" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +1 (416) 555-0123
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-[#C6A45B] flex-shrink-0" />
                <a href="mailto:sarangan@oracleprojectgroup.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  sarangan@oracleprojectgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Oracle Project Group. All rights reserved.
            </p>
            <Link
              to="/contact"
              className="mt-4 md:mt-0 px-6 py-2 bg-[#0074D9] text-white rounded-md hover:bg-[#0062b8] transition-colors btn-transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;