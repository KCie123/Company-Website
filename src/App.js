import React from "react";
import {
  ShieldCheckIcon,
  SparklesIcon,
  FireIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

// Temporary image for the hero section (replace with your own)
const heroImageUrl =
  "https://junklabllc47.com/wp-content/uploads/2024/07/before-after-garage-1-1024x431.png";

export default function App() {
  return (
    <div className="font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-[#4D4D4D] border-b border-gray-600">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Left nav items */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-[#FF6600]">
              Services
            </a>
            <a href="#about" className="text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-[#FF6600]">
              About
            </a>
          </nav>

          {/* Center logo */}
          <div className="flex items-center">
            {/* Simple circular logo placeholder */}
            <div className="rounded-full border border-white flex items-center justify-center h-10 w-10 mr-2">
              <span className="font-bold text-sm text-white">JK</span>
            </div>
            <span className="font-bold text-lg tracking-wide text-white">
              JK Improvement
            </span>
          </div>

          {/* Right nav items */}
          <nav className="hidden md:flex space-x-6">
            <a href="#why-choose-us" className="text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-[#FF6600]">
              Why Us
            </a>
            <a href="#contact" className="text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-[#FF6600]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION - Two Column Layout */}
      <section className="bg-[#4D4D4D] py-20 px-4" id="services">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Left image with border, rounded corners, and hover scale */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
            <img
              src={heroImageUrl}
              alt="JK Improvement Services"
              className="rounded-lg shadow-lg border border-gray-600 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right text */}
          <div className="md:w-1/2 md:pl-8 text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Junkyard Removal
            </h1>
            <p className="mb-6">
              Transform cluttered or hazardous areas into safe, sustainable
              spaces. Our experienced team specializes in demolition, site
              clearance, and eco-friendly removal solutions for both residential
              and commercial clients.
            </p>
            <a
              href="#about"
              className="inline-block bg-[#FF6600] text-[#000000] px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 hover:text-[#FF6600]"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="bg-[#FF6600] border-t border-b border-black py-20 px-4"
      >
        <div className="container mx-auto text-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About JK Improvement</h2>
          <p className="mb-6">
            With years of experience in junkyard removal and demolition, we
            pride ourselves on efficient service, safety, and sustainability.
            Our mission is to provide a hassle-free solution for all your
            clearance and demolition needs, ensuring minimal environmental
            impact and maximum satisfaction.
          </p>

          {/* Additional About Content */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="mb-4">
                To create safe, eco-friendly spaces by responsibly managing
                demolition and junk removal projects. We focus on reducing waste
                through recycling and reusing materials whenever possible.
              </p>
              <ul className="list-disc list-inside">
                <li>Community-driven approach</li>
                <li>Top-notch safety standards</li>
                <li>Eco-friendly disposal methods</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="mb-4">
                We envision a future where demolition and removal services
                support, rather than harm, the environment and local
                communities—where every project is an opportunity to recycle,
                repurpose, and revitalize.
              </p>
              <ul className="list-disc list-inside">
                <li>Innovative solutions</li>
                <li>Client-focused operations</li>
                <li>Building a cleaner, safer tomorrow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JK IMPROVEMENT? */}
      <section id="why-choose-us" className="bg-[#4D4D4D] py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Why Choose JK Improvement?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            We pride ourselves on delivering top-notch demolition and removal
            services, ensuring your property is handled with care and expertise.
          </p>

          {/* Simple placeholders for icons—replace with actual icons if desired */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center justify-center mb-2">
                <ShieldCheckIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold">Safety First</h3>
              <p className="text-sm text-gray-300 mt-1">
                Strict safety protocols on every site.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <SparklesIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold">Eco-Friendly</h3>
              <p className="text-sm text-gray-300 mt-1">
                We recycle debris and reduce waste.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <FireIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold">On-Time Projects</h3>
              <p className="text-sm text-gray-300 mt-1">
                Efficient work ensures timely completion.
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <BoltIcon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold">Trusted Team</h3>
              <p className="text-sm text-gray-300 mt-1">
                Experienced staff you can rely on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#4D4D4D] border-t border-gray-600 py-8 mt-8">
        <div className="container mx-auto px-4 text-center text-white">
          <p className="mb-2">Contact us at (123) 456-7890</p>
          <p className="mb-2">Email: info@jkimprovementcorp.com</p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} JK Improvement Corp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
