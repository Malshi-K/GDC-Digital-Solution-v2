"use client";
import React from "react";
import CaseStudiesHero from './CaseStudiesHero';
import ChallengesSection from './ChallengesSection';
import ClientOverview from './ClientOverview';
import OurApproachSection from './OurApproachSection';
import KeyAchievements from './KeyAchievements';
import GallerySection from './GallerySection';
import { getCaseStudyById } from "@/data/caseStudiesData";
import DesignProcessSection from "./DesignProcessSection";
import AdditionalServicesSection from "./AdditionalServicesSection";

const WebsiteDevelopmentCaseStudy = ({ caseStudyId }) => {
  // Get the case study data based on the ID
  const caseStudyData = getCaseStudyById(caseStudyId);
  
  // If there's no caseStudyData, return null or a fallback UI
  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  // Check if design process data exists
  const hasDesignProcess = caseStudyData.designProcess && 
                           caseStudyData.designProcess.steps && 
                           caseStudyData.designProcess.steps.length > 0;

  return (
    <section>
      <CaseStudiesHero data={caseStudyData.hero} />
      <ClientOverview data={caseStudyData.clientOverview} />
      <ChallengesSection data={caseStudyData.challenges} />
      <OurApproachSection data={caseStudyData.approach} />
      {hasDesignProcess && <DesignProcessSection data={caseStudyData.designProcess} />}      
      <AdditionalServicesSection data={caseStudyData.additionalServices} />      
      <GallerySection data={caseStudyData.gallery} />
      <KeyAchievements data={caseStudyData.achievements} />
    </section>
  );
};

export default WebsiteDevelopmentCaseStudy;