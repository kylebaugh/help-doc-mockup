import React from 'react';
import HelpCategoryCard from './HelpCategoryCard';
import FAQAccordion from './FAQAccordion';

const HelpLanding = () => {
  return (
    <div style={{ padding: "16px", maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <HelpCategoryCard
          title="Hazard Classification"
          description="Learn how to classify hazards."
          icon="⚠️"
          onClick={() => alert('Hazard Classification')}
        />
        <HelpCategoryCard
          title="Incident Reporting"
          description="Steps to report an incident."
          icon="📋"
          onClick={() => alert('Incident Reporting')}
        />
        <HelpCategoryCard
          title="Material Labeling"
          description="Guidelines for labeling materials."
          icon="🏷️"
          onClick={() => alert('Material Labeling')}
        />
      </div>
      <div>
        <FAQAccordion
          question="How do I classify a material?"
          answer="Refer to the hazard classification guide."
        />
        <FAQAccordion
          question="What are the reporting requirements?"
          answer="Follow the steps outlined in incident reporting."
        />
      </div>
    </div>
  )
}

export default HelpLanding