"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  FaUsers,
  FaGlobe,
  FaDesktop,
  FaChartLine,
  FaComments,
  FaServer,
  FaEnvelope,
  FaPalette,
  FaMobile,
  FaCompass,
  FaImage,
  FaWordpress,
  FaPuzzlePiece,
  FaWpforms,
  FaPaperPlane,
  FaBuilding,
  FaShieldAlt,
  FaUserCheck,
  FaLock,
  FaAward,
  FaListUl,
  FaImages,
  FaBullseye,
  FaSearch,
} from "react-icons/fa";
import { SiNextdotjs, SiHubspot, SiGithub, SiNetlify } from "react-icons/si";

// Icon mapping for dynamic rendering
const iconMap = {
  FaUsers: FaUsers,
  FaGlobe: FaGlobe,
  FaDesktop: FaDesktop,
  FaChartLine: FaChartLine,
  FaComments: FaComments,
  FaServer: FaServer,
  FaEnvelope: FaEnvelope,
  FaPalette: FaPalette,
  FaMobile: FaMobile,
  FaImage: FaImage,
  FaCompass: FaCompass,
  SiNextdotjs: SiNextdotjs,
  SiHubspot: SiHubspot,
  SiGithub: SiGithub,
  SiNetlify: SiNetlify,
  FaWordpress: FaWordpress,
  FaPuzzlePiece: FaPuzzlePiece,
  FaWpforms: FaWpforms,
  FaPaperPlane: FaPaperPlane,
  FaBuilding: FaBuilding,
  FaShieldAlt: FaShieldAlt,
  FaUserCheck: FaUserCheck,
  FaLock: FaLock,
  FaAward:FaAward,
  FaListUl:FaListUl,
  FaImages:FaImages,
  FaBullseye:FaBullseye,
  FaSearch:FaSearch,
};

const OurApproachSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Check if design objectives exist and have data
  const hasDesignObjectives = data.designObjectives && data.designObjectives.length > 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
    <section className="py-12 px-4 md:px-20 bg-gray-100" ref={sectionRef}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-customYellow text-3xl md:text-4xl font-bold text-center mb-10 flex flex-wrap justify-center">
          <span
            className={`ml-2 text-customGray transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            OUR&nbsp;
          </span>
          {"APPROACH".split("").map((letter, index) => (
            <span
              key={`approach-${index}`}
              className={`transform transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {letter}
            </span>
          ))}
          <span
            className={`mx-1 transition-opacity duration-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${8 * 100}ms` }}
          >
            &nbsp;
          </span>
        </h2>

        {/* Introduction Paragraph */}
        <p
          className={`text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {data.introduction}
        </p>

        {/* Technical Overview Grid */}
        <h2
          className={`text-3xl font-bold text-customGray mb-6 transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          Technical Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {data.technicalObjectives.map((objective, index) => {
            const IconComponent = iconMap[objective.icon];
            return (
              <div
                key={index}
                className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  objective.bgColor
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                <div className="bg-white p-4 rounded-full mb-4">
                  {IconComponent && (
                    <IconComponent
                      size={40}
                      className={
                        objective.bgColor === "bg-customYellow"
                          ? "text-customGray"
                          : "text-customYellow"
                      }
                    />
                  )}
                </div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    objective.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.title}
                </h3>
                <p
                  className={`text-center ${
                    objective.bgColor === "bg-customYellow"
                      ? "text-white"
                      : "text-customGray"
                  }`}
                >
                  {objective.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Design Overview Grid - Only render if data exists */}
        {hasDesignObjectives && (
          <>
            <h2
              className={`text-3xl font-bold text-customGray mb-6 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: `${
                  400 + data.technicalObjectives.length * 200 + 100
                }ms`,
              }}
            >
              Design Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {data.designObjectives.map((keyObj, index) => {
                const IconComponent = iconMap[keyObj.icon];
                return (
                  <div
                    key={index}
                    className={`flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                      keyObj.bgColor
                    } ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{
                      transitionDelay: `${
                        400 +
                        data.technicalObjectives.length * 200 +
                        200 +
                        index * 200
                      }ms`,
                    }}
                  >
                    <div className="bg-white p-4 rounded-full mb-4">
                      {IconComponent && (
                        <IconComponent
                          size={40}
                          className={
                            keyObj.bgColor === "bg-customYellow"
                              ? "text-customGray"
                              : "text-customYellow"
                          }
                        />
                      )}
                    </div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        keyObj.bgColor === "bg-customYellow"
                          ? "text-white"
                          : "text-customGray"
                      }`}
                    >
                      {keyObj.title}
                    </h3>
                    <p
                      className={`text-center ${
                        keyObj.bgColor === "bg-customYellow"
                          ? "text-white"
                          : "text-customGray"
                      }`}
                    >
                      {keyObj.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default OurApproachSection;