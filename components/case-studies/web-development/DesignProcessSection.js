"use client";
import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, 
  FaSitemap, 
  FaPalette, 
  FaCode, 
  FaRocket,
  FaLightbulb,
  FaUserFriends,
  FaClipboardCheck,
  FaCogs,
  FaChartLine
} from "react-icons/fa";

// Icon mapping
const iconComponents = {
  FaSearch: FaSearch,
  FaSitemap: FaSitemap,
  FaPalette: FaPalette,
  FaCode: FaCode,
  FaRocket: FaRocket,
  FaLightbulb: FaLightbulb,
  FaUserFriends: FaUserFriends,
  FaClipboardCheck: FaClipboardCheck,
  FaCogs: FaCogs,
  FaChartLine: FaChartLine
};

const DesignProcessSection = ({ data }) => {
  // Always declare hooks at the top level, before any conditional logic
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only run the observer logic if we have data to display
    if (!data || !data.steps || data.steps.length === 0) {
      return;
    }

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    if (contentRef.current) {
      contentObserver.observe(contentRef.current);
    }

    return () => {
      if (headerRef.current) {
        headerObserver.unobserve(headerRef.current);
      }
      if (contentRef.current) {
        contentObserver.unobserve(contentRef.current);
      }
    };
  }, [data]);

  // If no design process data is available, return early
  if (!data || !data.steps || data.steps.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-500 ${
            isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-customYellow mb-6">
            Our Design Process
          </h2>
          {data.introduction && (
            <p className="text-gray-700 max-w-3xl mx-auto">
              {data.introduction}
            </p>
          )}
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data.steps.map((step, index) => {
            // Get the icon component or default to FaLightbulb
            const IconComponent = iconComponents[step.icon] || FaLightbulb;
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-8 flex flex-col items-start hover:shadow-lg transition-all duration-500 transform ${
                  isContentVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center justify-between w-full mb-4">
                  <span className="text-4xl font-bold text-customYellow opacity-30">
                    {step.number}
                  </span>
                  <div className="bg-customYellow bg-opacity-10 p-3 rounded-full">
                    <IconComponent className="text-customYellow text-xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <div className="text-gray-600 text-sm">
                  {step.number === "06" && step.title === "Features and Functionality" ? (
                    <div>
                      <p className="mb-4 font-medium">
                        The features and functionality section includes several key components that enhance user experience and business operations.
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">About Section</span>
                            <span className="ml-1">– Highlights Kandy Mechanical's history, international experience across Sri Lanka, Qatar, and Kuwait, and 8 years serving Hamilton, NZ. Reinforces their credibility and industry expertise.</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Services Page</span>
                            <span className="ml-1">– Clear breakdown of diagnostics, engine repairs, fleet servicing and transport solutions.</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Vehicle Sale Section</span>
                            <span className="ml-1">– Dedicated page showcasing available vehicles for sale, complete with specifications, pricing, and images. Helps potential customers browse inventory directly on-site and acts as a powerful lead generator for sales inquiries.</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Spare Parts Sale Section</span>
                            <div className="ml-1 mt-2 space-y-2">
                              <div>
                                <span className="font-medium text-gray-700">Extensive Product Range:</span>
                                <span className="ml-1">The page offers a diverse inventory of spare parts, including engine components, suspension systems, electrical parts, and more, ensuring that customers can find the exact parts they need for various vehicle repairs and upgrades.</span>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">User-Friendly Navigation:</span>
                                <span className="ml-1">Products are organized into clearly labeled categories, allowing users to quickly locate specific parts based on their vehicle's requirements or the type of repair needed.</span>
                              </div>
                              <div>
                                <span className="font-medium text-gray-700">Local Expertise:</span>
                                <span className="ml-1">As a New Zealand-based business, Kandy Mechanical offers local knowledge and support, ensuring that customers receive parts that are suitable for local vehicles and driving conditions.</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Contact Form</span>
                            <span className="ml-1">– Easy-to-use inquiry form with integrated email notifications.</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Testimonials</span>
                            <span className="ml-1">– The website showcases positive feedback from customers to reinforce their reputation.</span>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <span className="text-customYellow mr-3 text-lg">❖</span>
                          <div>
                            <span className="font-semibold text-gray-800">Interactive Location Map</span>
                            <span className="ml-1">– Embedded Google Map to help clients easily locate the Hamilton workshop.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : step.description.length > 400 && (step.description.includes('Section') || step.description.includes('Page') || step.description.includes('Form')) ? (
                    <div>
                      {/* Split content into sentences and group related content */}
                      {(() => {
                        const text = step.description;
                        const sentences = text.split('. ');
                        const introduction = sentences[0] + '.';
                        const remainingText = sentences.slice(1).join('. ');
                        
                        // Find sections by looking for patterns like "The [Name] Section"
                        const sections = [];
                        const sectionMatches = remainingText.match(/The [A-Z][^.]*?(?:Section|Page|Form|Map)[^.]*?\./g) || [];
                        
                        sectionMatches.forEach(match => {
                          const titleMatch = match.match(/The ([^–]+?)(?:\s+–|\s+provides|\s+offers|\s+features|\s+with|\s+includes)/i);
                          if (titleMatch) {
                            const title = titleMatch[1].trim();
                            const description = match.replace(titleMatch[0], '').trim();
                            sections.push({ title, description });
                          }
                        });
                        
                        // If no sections found, try splitting by capital letters after periods
                        if (sections.length === 0) {
                          const parts = remainingText.split(/(?=\s[A-Z][a-z]+\s(?:Section|Page|Form|Features?))/);
                          parts.forEach(part => {
                            const trimmed = part.trim();
                            if (trimmed) {
                              const firstSentence = trimmed.split('.')[0];
                              const title = firstSentence.split(/\s+(?:highlights|provides|offers|features|includes)/i)[0];
                              sections.push({ 
                                title: title.replace(/^The\s+/i, ''), 
                                description: trimmed 
                              });
                            }
                          });
                        }
                        
                        return (
                          <div>
                            <p className="mb-4 font-medium">{introduction}</p>
                            {sections.length > 0 ? (
                              sections.map((section, idx) => (
                                <div key={idx} className="mb-3 pl-4">
                                  <div className="flex items-start">
                                    <span className="text-customYellow mr-2 mt-1 text-lg">•</span>
                                    <div>
                                      <span className="font-semibold text-gray-800 block mb-1">
                                        {section.title}
                                      </span>
                                      <span className="text-gray-600 text-sm leading-relaxed">
                                        {section.description}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              ))
                            ) : (
                              // Fallback: split by sentences and group every 2-3 sentences
                              remainingText.split(/(?<=\.)\s+(?=[A-Z])/).map((part, idx) => (
                                <div key={idx} className="mb-2 pl-4">
                                  <div className="flex items-start">
                                    <span className="text-customYellow mr-2 mt-1">•</span>
                                    <span className="text-gray-600 text-sm">{part.trim()}</span>
                                  </div>
                                </div>
                              ))
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  ) : (
                    <p>{step.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;