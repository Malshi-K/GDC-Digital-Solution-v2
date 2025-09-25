// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import TrackedPhoneLink from "./TrackedPhoneLink";

export default function Footer() {
  return (
    <>
      {/* Main Footer Section - Dark Background */}
      <footer className="bg-white text-customGray py-8 sm:py-10 md:py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Three Columns Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: Let's start working together */}
            <div className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Let&apos;s start working together get in touch!
              </h2>
              <div className="mt-4 sm:mt-6">
                <Link
                  href="/schedule-consultation"
                  className="inline-block bg-customYellow hover:bg-yellow-500 text-dark-blue font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            {/* Column 2: Contact information */}
            <div className="mb-6 sm:mb-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact information
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaMapMarkedAlt className="text-lg sm:text-xl mt-1" />
                  </div>
                  <span className="text-sm sm:text-base">
                    89 Church Road, Pukete, Hamilton 3200
                  </span>
                </li>
                <li className="flex items-center">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaPhoneAlt className="text-lg sm:text-xl" />
                  </div>
                  <TrackedPhoneLink
                    phoneNumber="0212463988"
                    className="hover:text-customYellow transition-colors text-sm sm:text-base"
                  >
                    021 246 3988
                  </TrackedPhoneLink>
                </li>
                <li className="flex items-center">
                  <div className="text-customYellow mr-3 flex-shrink-0">
                    <FaEnvelope className="text-lg sm:text-xl" />
                  </div>
                  <Link
                    href="mailto:digital@gdcgroup.co.nz"
                    className="hover:text-customYellow transition-colors text-sm sm:text-base"
                  >
                    digital@gdcgroup.co.nz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Subscribe newsletter */}
            <div className="sm:col-span-2 md:col-span-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Subscribe newsletter
              </h2>
              <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                Get our latest news and ideas to your inbox
              </p>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-2 sm:p-3 bg-transparent border border-gray-500 rounded-md focus:outline-none focus:border-customYellow text-white text-sm sm:text-base"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-customYellow hover:bg-yellow-500 text-dark-blue font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-md transition-colors duration-300 text-sm sm:text-base"
                >
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Logo Section - White Background */}
      <div className="bg-white py-6 sm:py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0">
              <a
                href="https://www.gdcdigital.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/images/Digital Solution.webp"
                  alt="GDC Digital Solutions Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0">
              <a
                href="https://www.gdcgroup.co.nz/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/images/GDC LOGOS 2024 BLUE.webp"
                  alt="GDC Consultants Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto mb-4 sm:mb-0">
              <a
                href="https://www.gdcrecruit.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/images/Recruit Logo.png"
                  alt="GDC Recruitment Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16"
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src="/assets/images/properties logo.png"
                  alt="GDC Properties Logo"
                  width={180}
                  height={60}
                  className="object-contain h-12 sm:h-16"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section - White Background */}
      <div className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="text-xs sm:text-sm">
              Copyright © 2025 GDC Digital Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}