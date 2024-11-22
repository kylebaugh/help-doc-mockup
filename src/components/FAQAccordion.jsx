import React, { useState } from 'react';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "8px 0",
        padding: "8px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 style={{ margin: 0 }}>{question}</h4>
        <span style={{ fontSize: "18px" }}>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div style={{ marginTop: "8px", fontSize: "14px", color: "#555" }}>
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;

// Example usage:
// <FAQAccordion
//   question="How do I classify a material?"
//   answer="Refer to the hazard classification guide."
// />
