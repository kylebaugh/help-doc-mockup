import React from 'react';

const HelpCategoryCard = ({ title, description, icon, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        textAlign: "center",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>{icon}</div>
      <h3 style={{ fontSize: "18px", margin: "8px 0" }}>{title}</h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
    </div>
  );
};

export default HelpCategoryCard;

// Example usage:
// <HelpCategoryCard
//   title="Hazard Classification"
//   description="Learn how to classify hazards."
//   icon="⚠️"
//   onClick={() => alert('Clicked!')}
// />
