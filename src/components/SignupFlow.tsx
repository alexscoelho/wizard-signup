import { useState } from "react";
import { User } from "../IUser";
import { UserStepForm } from "./UserStepForm";
import { WizardStepForm } from "./WizardStepForm";
import { SidekickStepForm } from "./SidekickStepForm";
import { ConfirmationStep } from "./ConfirmationStep";

const formFlow = ["user", "wizard", "sidekick", "confirm"];

export const SignupFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [user, setUser] = useState<User>();

  const onComplete = ({
    email,
    password,
    confirmPassword,
    terms,
    newsletter,
    wizard,
    sidekick,
  }: User): void => {
    setUser({
      ...user,
      email: email || user?.email || "",
      password: password || user?.password || "",
      confirmPassword: confirmPassword || user?.confirmPassword || "",
      terms: terms || user?.terms || false,
      newsletter: newsletter || user?.newsletter || false,
      wizard: wizard || user?.wizard,
      sidekick: sidekick || user?.sidekick,
    });
    setCurrentStep(currentStep + 1);
  };

  return (
    <div>
      <h1>Wizard Signup Wizard</h1>
      {formFlow[currentStep] === "user" && (
        <UserStepForm onComplete={onComplete} />
      )}
      {formFlow[currentStep] === "wizard" && (
        <WizardStepForm onComplete={onComplete} />
      )}
      {formFlow[currentStep] === "sidekick" && (
        <SidekickStepForm onComplete={onComplete} />
      )}
      {formFlow[currentStep] === "confirm" && <ConfirmationStep user={user} />}
    </div>
  );
};
