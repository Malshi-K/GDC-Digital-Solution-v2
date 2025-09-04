"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaBuilding,
  FaWrench,
  FaWater,
  FaBolt,
  FaCogs,
  FaClipboardList,
  FaGlobe,
  FaHome,
  FaTools,
  FaHammer,
  FaSink,
  FaTree,
  FaShieldAlt,
  FaStore,
  FaBell,
  FaLock,
  FaVideo,
  FaComments,
  FaProjectDiagram,
  FaPencilRuler,
  FaFileContract,
  FaSearchPlus,
  FaHardHat,
  FaGasPump,
  FaCar,
  FaTruck,
  FaCube,
  FaCircle,
  FaSearch,
} from "react-icons/fa";
import Link from "next/link";

// Icon mapping for dynamic rendering
const iconMap = {
  FaBuilding: FaBuilding,
  FaWrench: FaWrench,
  FaWater: FaWater,
  FaBolt: FaBolt,
  FaCogs: FaCogs,
  FaClipboardList: FaClipboardList,
  FaGlobe: FaGlobe,
  FaHome: FaHome,
  FaTools: FaTools,
  FaHammer: FaHammer,
  FaSink: FaSink,
  FaTree: FaTree,
  FaShieldAlt: FaShieldAlt,
  FaStore: FaStore,
  FaBell: FaBell,
  FaLock: FaLock,
  FaVideo: FaVideo,
  FaComments: FaComments,
  FaProjectDiagram: FaProjectDiagram,
  FaPencilRuler: FaPencilRuler,
  FaFileContract: FaFileContract,
  FaSearchPlus: FaSearchPlus,
  FaHardHat: FaHardHat,
  FaGasPump:FaGasPump,
  FaCar:FaCar,
  FaTruck:FaTruck,
  FaCube:FaCube,
  FaCircle:FaCircle,
  FaSearch:FaSearch,
};

const ClientOverview = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

  return (
    <section
      className="flex flex-col md:flex-row items-start justify-center py-16 px-6 md:px-20"
      ref={sectionRef}
    >
      {/* Left Side - Services */}
      <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4 items-start justify-center">
        {data.services.map((service, index) => {
          const IconComponent = iconMap[service.icon];
          return (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-32 h-32 border-2 border-customYellow rounded-full shadow-md p-2 mx-auto transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-15 h-15">
                {IconComponent && (
                  <IconComponent size={24} className="text-customYellow" />
                )}
              </div>
              <div className="pb-6">
                <p className="text-center font-semibold text-gray-800 text-sm mt-2">
                  {service.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Side - Overview Details */}
      <div
        className={`w-full md:w-1/2 p-4 md:p-8 flex flex-col items-start space-y-4 mt-8 md:mt-0 transition-all duration-700 transform ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transitionDelay: "300ms" }}
      >
        <h2 className="text-2xl font-bold text-customYellow mb-4">
          CLIENT OVERVIEW
        </h2>
        <p>
          <span className="font-semibold">Company:</span> {data.companyName}
        </p>
        <p>
          <span className="font-semibold">Industry:</span> {data.industry}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{" "}
          <Link
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            {data.website.replace("https://", "")}
          </Link>
        </p>
        <p
          className="text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
    </section>
  );
};

export default ClientOverview;
