import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./shared/components/Form/Button";
import Input from "./shared/components/Form/Input";
import Step from "./shared/components/StepForm/Step/Step";
import StepForm from "./shared/components/StepForm/StepForm";

function App() {
  return (
    <div style={{ backgroundColor: "black" }} className="App">
      <StepForm />
    </div>
  );
}

export default App;
