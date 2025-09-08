import React, { useState, useEffect, useRef } from "react";
import { 
  FaSearch, 
  FaFacebook, 
  FaPrint,
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle
} from "react-icons/fa";

// Icon mapping
const iconComponents = {
  FaSearch: FaSearch,
  FaFacebook: FaFacebook,
  FaPrint: FaPrint
};

const AdditionalServicesSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!data || !data.sections || data.sections.length === 0) {
      return;
    }

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
  }, [data]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // If no additional services data is available, return early
  if (!data || !data.sections || data.sections.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto">
        <div 
          ref={sectionRef}
          className={`transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-customYellow mb-6">
              {data.title}
            </h2>
            {data.introduction && (
              <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
                {data.introduction}
              </p>
            )}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {data.sections.map((service, index) => {
              const IconComponent = iconComponents[service.icon] || FaSearch;
              const isExpanded = expandedSections[service.id];
              
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                    isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  } overflow-hidden`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-customYellow bg-opacity-15 p-4 rounded-full">
                        <IconComponent className="text-customYellow text-2xl" />
                      </div>
                      <button
                        onClick={() => toggleSection(service.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                      >
                        {isExpanded ? (
                          <FaChevronUp className="text-gray-500" />
                        ) : (
                          <FaChevronDown className="text-gray-500" />
                        )}
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {service.subtitle && (
                      <p className="text-gray-700 text-sm mt-3 font-medium">
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Expandable Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out ${
                      isExpanded 
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 pt-0">
                      <div className="space-y-4">
                        {service.items.map((item, itemIndex) => (
                          <div 
                            key={itemIndex}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="flex-shrink-0 mt-1">
                              <FaCheckCircle className="text-customYellow text-sm" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm mb-1">
                                {item.title}
                              </h4>
                              <p className="text-gray-600 text-xs leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-4">
                    <div className="text-center">
                      <span className="text-xs text-gray-500">
                        {service.items.length} {service.items.length === 1 ? 'service' : 'services'} included
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalServicesSection;