import React from "react";
import Button from "../../Form/Button";

import "./Step.css";

interface StepProps {
  heading: string;
  description: string;
  children: JSX.Element | JSX.Element[];
}
const Step: React.FC<StepProps> = ({ heading, description, children }) => {
  return (
    <div className="step">
      <h2>{heading}</h2>
      <p>{description}</p>
      {children}
      <Button className="step__button" onClick={() => {}} title="Next Step" />
    </div>
  );
};

export default Step;
