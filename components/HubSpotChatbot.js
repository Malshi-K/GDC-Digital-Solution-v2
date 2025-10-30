"use client";
import { useEffect } from 'react';

const HubSpotChatbot = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const loadHubSpotChat = () => {
      // Check if script already exists
      if (document.getElementById('hs-script-loader')) {
        console.log('HubSpot script already loaded');
        return;
      }

      console.log('Loading HubSpot chatbot script...');
      
      const script = document.createElement('script');
      script.id = 'hs-script-loader';
      script.src = 'https://js.hs-scripts.com/6187835.js';
      script.async = true;
      script.defer = true;
      
      script.onload = () => {
        console.log('HubSpot script loaded successfully');
        
        // Function to initialize the chat widget
        const initializeChat = () => {
          if (window.HubSpotConversations && window.HubSpotConversations.widget) {
            console.log('Initializing HubSpot chat widget...');
            try {
              window.HubSpotConversations.widget.load({
                chatflowId: 51899598,
                portalId: 6187835,
              });
              console.log('HubSpot chat widget initialized successfully');
            } catch (error) {
              console.error('Error initializing HubSpot chat widget:', error);
            }
          } else {
            console.log('HubSpot Conversations not ready yet, retrying...');
            setTimeout(initializeChat, 1000);
          }
        };

        // Start initialization with a delay to ensure everything is loaded
        setTimeout(initializeChat, 2000);
      };

      script.onerror = (error) => {
        console.error('Failed to load HubSpot script:', error);
      };

      // Append to head for better loading
      document.head.appendChild(script);
    };

    // Load the chat widget
    loadHubSpotChat();

    // Cleanup function
    return () => {
      // Optional: Remove the script when component unmounts
      // const script = document.getElementById('hs-script-loader');
      // if (script) {
      //   script.remove();
      // }
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default HubSpotChatbot;