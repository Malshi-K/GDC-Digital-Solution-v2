"use client";
import { useEffect } from 'react';

const HubSpotChatbot = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check if script already exists
    if (document.getElementById('hs-script-loader')) {
      console.log('HubSpot script already loaded');
      return;
    }

    console.log('Loading HubSpot chatbot script...');
    
    // Create script element for HubSpot
    const script = document.createElement('script');
    script.id = 'hs-script-loader';
    script.src = 'https://js.hs-scripts.com/6187835.js';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('HubSpot script loaded successfully');
    };

    script.onerror = (error) => {
      console.error('Failed to load HubSpot script:', error);
    };

    // Append to document head
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove script when component unmounts if needed
      const existingScript = document.getElementById('hs-script-loader');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HubSpotChatbot;