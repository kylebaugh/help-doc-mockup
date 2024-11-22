import React from "react";

const TempPage3 = () => {
  return (
    <div className="p-4 font-sans leading-6">
      <h1 className="text-2xl text-center font-bold">Example Page 3</h1>
      <br />

      <h1  className="text-[#d9534f]">Understanding Hazardous Materials</h1>

      <img
        src="https://plus.unsplash.com/premium_photo-1682146224885-7051da250554?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hazardous Materials Overview"
        className="w-full rounded-lg my-4"
      />
      <p>
        Hazardous materials, also known as HAZMAT, are substances that pose a
        risk to health, safety, or property. These materials are often used in
        industries such as manufacturing, construction, and transportation.
      </p>
      <h2>What Are the Common Types of Hazardous Materials?</h2>
      <p>
        Hazardous materials can be classified into several categories,
        including:
      </p>
      <ul>
        <li>
          <strong>Flammable substances:</strong> Gasoline, propane, and ethanol.
        </li>
        <li>
          <strong>Corrosive chemicals:</strong> Acids, bases, and cleaning
          agents.
        </li>
        <li>
          <strong>Toxic materials:</strong> Pesticides, asbestos, and lead
          compounds.
        </li>
      </ul>
      <p>
        Proper handling and storage of these materials are crucial to preventing
        accidents and protecting the environment.
      </p>
    </div>
  );
};

export default TempPage3;
