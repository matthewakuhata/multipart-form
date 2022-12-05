import React, { useState } from "react";

import Input from "../Form/Input";
import Step from "./Step/Step";

import "./StepForm.css";

const STEPS = [
  {
    title: "Your Info",
    isActive: true,
  },
  {
    title: "Select Plan",
    isActive: false,
  },
  {
    title: "Add Ons",
    isActive: false,
  },
  {
    title: "Summary",
    isActive: false,
  },
];

const StepForm = () => {
  const [activeForm, setActiveForm] = useState("Your Info");
  const step = getStep(activeForm);

  return (
    <div className="step-form">
      <aside className="step-form__sidemenu">
        {STEPS.map((step, index) => (
          <div
            onClick={() => {
              setActiveForm(step.title);
            }}
            className="step-form__sidemenu__content "
            key={step.title}
          >
            <div
              className={`step-form__icon ${
                step.title === activeForm && "step-form__icon--active"
              }`}
            >
              {index + 1}
            </div>
            <div>
              <p>STEP {index + 1}</p>
              <h3>{step.title.toUpperCase()}</h3>
            </div>
          </div>
        ))}
      </aside>
      <>{step}</>
    </div>
  );
};

const getStep = (activeForm: string) => {
  switch (activeForm) {
    case "Your Info":
      return (
        <Step
          heading="Personal Info"
          description="Please provide your name, email and phone number."
        >
          <Input type="text" placeholder="Vanessa Mint" title="Name" />
          <Input
            type="email"
            placeholder="vanessa.mint@gmail.com"
            title="Email Address"
          />
          <Input
            type="text"
            placeholder="e.g. +1 234 567 890"
            title="Phone Number"
          />
        </Step>
      );
    case "Select Plan":
      return (
        <Step
          heading="Select You Plan"
          description="You have the option of yearly or monthly"
        >
          <Input type="text" placeholder="Vanessa Mint" title="Name" />
          <Input
            type="email"
            placeholder="vanessa.mint@gmail.com"
            title="Email Address"
          />
          <Input
            type="text"
            placeholder="e.g. +1 234 567 890"
            title="Phone Number"
          />
        </Step>
      );
    default:
      return <></>;
  }
};

export default StepForm;
