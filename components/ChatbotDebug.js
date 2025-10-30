"use client";
import { useEffect } from 'react';

const ChatbotDebug = () => {
  useEffect(() => {
    // Clear any existing HubSpot localStorage data that might cause full-screen issues
    const clearHubSpotCache = () => {
      try {
        // Clear HubSpot related localStorage items
        Object.keys(localStorage).forEach(key => {
          if (key.includes('hubspot') || key.includes('hs-') || key.includes('conversations')) {
            localStorage.removeItem(key);
            console.log('Cleared localStorage item:', key);
          }
        });

        // Clear HubSpot related sessionStorage items
        Object.keys(sessionStorage).forEach(key => {
          if (key.includes('hubspot') || key.includes('hs-') || key.includes('conversations')) {
            sessionStorage.removeItem(key);
            console.log('Cleared sessionStorage item:', key);
          }
        });

        console.log('HubSpot cache cleared');
      } catch (error) {
        console.error('Error clearing HubSpot cache:', error);
      }
    };

    // Run cache clearing only once
    clearHubSpotCache();

    // Add some CSS to ensure the chatbot appears as a small widget
    const addChatbotStyles = () => {
      const style = document.createElement('style');
      style.id = 'hubspot-chatbot-fix';
      style.textContent = `
        /* Ensure HubSpot chat widget stays in bottom corner */
        #hubspot-conversations-inline-parent {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          width: auto !important;
          height: auto !important;
          max-width: 400px !important;
          max-height: 600px !important;
          z-index: 9999 !important;
        }
        
        /* Override any full-screen styles */
        iframe[id*="hubspot-conversations"] {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          width: 400px !important;
          height: 600px !important;
          max-width: 400px !important;
          max-height: 600px !important;
        }
        
        /* Small launcher button */
        .hs-conversations-widget-launcher {
          position: fixed !important;
          bottom: 20px !important;
          right: 20px !important;
          width: 60px !important;
          height: 60px !important;
        }
      `;
      
      if (!document.getElementById('hubspot-chatbot-fix')) {
        document.head.appendChild(style);
        console.log('Added HubSpot chatbot styles');
      }
    };

    // Add styles after a short delay
    setTimeout(addChatbotStyles, 1000);

    // Monitor for HubSpot widget changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes) {
          mutation.addedNodes.forEach((node) => {
            if (node.id && (node.id.includes('hubspot') || node.id.includes('conversations'))) {
              console.log('HubSpot element detected:', node.id);
              // Re-apply styles when widget elements are added
              setTimeout(addChatbotStyles, 500);
            }
          });
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default ChatbotDebug;