"use client";
import { useRef, useState, useEffect } from "react";
import {
  ArrowPathIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ExpertiseSection() {
  // State to track visibility
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Setup intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2, // Animation will trigger when 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Array of expertise items with icons and descriptions
  const expertiseItems = [
    {
      title: "Business Process Mapping & Re-engineering",
      description:
        "We analyse workflows to uncover inefficiencies and recommend improvements that align with your objectives.",
      icon: ArrowPathIcon,
    },
    {
      title: "Customer Experience & Journey Mapping",
      description:
        "We focus on the customer experience, designing tailored solutions to improve engagement, satisfaction, and loyalty.",
      icon: UserGroupIcon,
    },
    {
      title: "Technology & Systems Review",
      description:
        "Our team evaluates your current systems, providing recommendations to optimise or replace them to ensure maximum value.",
      icon: ComputerDesktopIcon,
    },
    {
      title: "Project & Programme Management Support",
      description:
        "We offer end-to-end support, from requirement gathering and business case development to project delivery, ensuring successful outcomes.",
      icon: ClipboardDocumentCheckIcon,
    },
    {
      title: "Agile & Traditional Methodologies",
      description:
        "Whether your projects are agile, waterfall, or hybrid, our team is experienced in working with the methodology that best suits your needs.",
      icon: RocketLaunchIcon,
    },
  ];

  return (
    <section className="relative bg-black py-12 text-white" ref={sectionRef}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/services/6.webp')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          } transition-all duration-800 ease-out`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-customYellow">Our Expertise</span> Includes
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Unlock the power of flexibility and performance. Manage your
            business with a mature strategy, develop your business so that it
            grows rapidly.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className={`bg-gray-900 bg-opacity-60 rounded-xl p-6 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ 
                transitionDuration: "600ms", 
                transitionTimingFunction: "ease-out",
                transitionDelay: `${index * 100}ms`,
                transitionProperty: "all"
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <item.icon className="h-12 w-12 text-customYellow" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Call to Action */}
        <div
          className={`text-center mt-12 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          } transition-all duration-800 ease-out`}
          style={{ transitionDelay: "600ms" }}
        >
          <Link href="/about">
            <button className="bg-customYellow text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition duration-300">
              Find More About Our Expertise
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}