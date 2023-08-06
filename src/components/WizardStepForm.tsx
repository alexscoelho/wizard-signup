import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../IUser";
import { FormInput } from "./FormInput";

interface Props {
  onComplete: (user: User) => void;
}

const WIZARD_SCHOOLS = [
  "Abjuration",
  "Conjuration",
  "Divination",
  "Enchantment",
  "Evocation",
  "Illusion",
  "Necromancy",
  "Transmutation",
];

export const WizardStepForm = ({ onComplete }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    onComplete(data);
  };

  return (
    <>
      <h3>Your Wizard</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <FormInput
          label="Name"
          hasError={errors.wizard?.name?.type === "required"}
          errorMsg="Name is required"
        >
          <input
            type="text"
            {...register("wizard.name", {
              required: true,
            })}
            aria-invalid={errors.wizard?.name ? "true" : "false"}
          />
        </FormInput>

        <FormInput
          label="Level"
          hasError={errors.wizard?.level?.type === "required"}
          errorMsg="Level is required"
        >
          <input
            type="number"
            min={1}
            max={20}
            {...register("wizard.level", {
              required: true,
              min: 1,
              max: 20,
            })}
            aria-invalid={errors.wizard?.level ? "true" : "false"}
          />
        </FormInput>

        <FormInput
          label="School"
          hasError={errors.wizard?.school?.type === "required"}
          errorMsg="School is required"
        >
          <select
            {...register("wizard.school", { required: true })}
            aria-invalid={errors.wizard?.school ? "true" : "false"}
          >
            {WIZARD_SCHOOLS.map((school) => (
              <option key={school} value={school}>
                {school}
              </option>
            ))}
          </select>
        </FormInput>

        <FormInput
          label="Alignment"
          hasError={errors.wizard?.alignment?.type === "required"}
          errorMsg="Alignment is required"
        >
           <label htmlFor="good">Good</label>
          <input
            {...register("wizard.alignment", { required: true })}
            type="radio"
            value="good"
          />
          <label htmlFor="evil">Evil</label>
          <input
            {...register("wizard.alignment", { required: true })}
            type="radio"
            value="evil"
          />
        </FormInput>

        <input type="submit" value="Next" />
      </form>
    </>
  );
};
