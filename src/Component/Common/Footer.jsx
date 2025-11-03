import { Mail, MapPinCheck, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 grid grid-flow-cols grid-cols-4 gap-4">
        <div className="p-9">
          <h6 className="text-white">Dobhi</h6>
          <p className="text-gray-300 text-sm">
            Professional laundry and dry cleaning services at your doorstep.
            Quality care for your clothes with eco-friendly products.
          </p>
          <div className="flex">
            <span className="text-blue-500 pe-3 mt-3">
              <Phone size={20} />
            </span>
            <p className="text-gray-300 text-sm pt-3">+91 92574 79576</p>
          </div>
          <div className="flex">
            <span className="text-blue-500 pe-3 mt-3">
              <Mail size={20} />
            </span>
            <p className="text-gray-300 text-sm pt-3">support@dobhi.com</p>
          </div>
          <div className="flex">
            <span className="text-blue-500 pe-3 mt-3">
              <MapPinCheck size={20} />
            </span>
            <p className="text-gray-400 text-sm pt-3">
              Dobhi Headquarters Jaipur, Rajasthan, India
            </p>
          </div>
        </div>
        <div className="p-9">
          <h6 className="text-white">Company</h6>
          <ul className="gap-3">
            <li className="text-gray-400 text-sm">
                About Us
            </li>
            <li className="text-gray-400 text-sm">
                About Us
            </li>
            <li className="text-gray-400 text-sm">
                About Us
            </li>
            <li className="text-gray-400 text-sm">
                About Us
            </li>
          </ul>

        </div>
        <div className="p-9">
          <h6 className="text-white">Dobhi</h6>
          <p className="text-gray-300 text-sm">
            Professional laundry and dry cleaning services at your doorstep.
            Quality care for your clothes with eco-friendly products.
          </p>
        </div>
        <div className="p-9">
          <h6 className="text-white">Dobhi</h6>
          <p className="text-gray-300 text-sm">
            Professional laundry and dry cleaning services at your doorstep.
            Quality care for your clothes with eco-friendly products.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
