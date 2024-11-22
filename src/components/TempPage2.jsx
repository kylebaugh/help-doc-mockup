import React from "react";

const TempPage2 = () => {
  return (
    <div className="p-4 font-sans leading-6 rounded-lg my-4 background-[#f9f9f9]">
      <h1 className="text-2xl text-center font-bold">Example Page 2</h1>
      <br />

      <h1 className="text-[#5bc0de]">
        Emergency Response to Hazardous Materials
      </h1>
      <p>
        Responding to hazardous material incidents requires quick thinking and
        adherence to safety protocols. Below is a guide to help you respond
        effectively in case of an emergency.
      </p>
      <h2>Steps for Safe Response</h2>
      <ol>
        <li>
          <strong>Assess the Situation:</strong> Identify the material involved
          and evaluate the potential hazards.
        </li>
        <li>
          <strong>Evacuate the Area:</strong> Ensure all personnel are safely
          evacuated from the danger zone.
        </li>
        <li>
          <strong>Contact Emergency Services:</strong> Notify local authorities
          and provide detailed information about the incident.
        </li>
      </ol>
      <img
        src="https://images.unsplash.com/photo-1562709172-8cb2a976b9db?q=80&w=2675&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Emergency Response Diagram"
        className="w-full rounded-lg my-4"
      />
      <h2>Quick Tips for Containment</h2>
      <p>
        If safe to do so, contain the spill or leak using appropriate tools like
        absorbent materials or containment booms. Always wear protective gear to
        avoid exposure.
      </p>
    </div>
  );
};

export default TempPage2;
