"use client";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HubSpotChatbot from "@/components/HubSpotChatbot";
import { useState, useEffect } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Function to dynamically add margin to <div> elements with a specific id
    const specificDivs = document.querySelectorAll("#move-down");
    specificDivs.forEach((div) => {
      div.style.marginTop = isDropdownOpen ? "150px" : "0px";
      div.style.transition = "margin-top 0.3s ease";
    });
  }, [isDropdownOpen]);

  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <HubSpotChatbot />
        <Header
          setIsDropdownOpen={setIsDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}