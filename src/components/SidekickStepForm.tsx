import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../IUser";
import { FormInput } from "./FormInput";

interface Props {
  onComplete: (user: User) => void;
}

export const SidekickStepForm = ({ onComplete }: Props) => {
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
      <h3>Your Sidekick</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <FormInput
          label="Name"
          hasError={errors.sidekick?.name?.type === "required"}
          errorMsg="Name is required"
        >
          <input
            type="text"
            {...register("sidekick.name", {
              required: true,
            })}
            aria-invalid={errors.sidekick?.name ? "true" : "false"}
          />
        </FormInput>
        <FormInput
          label="Skill (Optional)"
          hasError={errors.sidekick?.skill?.type === "required"}
          errorMsg="Skill is required"
        >
          <input
            type="text"
            {...register("sidekick.skill", {
              required: true,
            })}
            aria-invalid={errors.sidekick?.skill ? "true" : "false"}
          />
        </FormInput>

        <input type="submit" value="Finish" />
      </form>
    </>
  );
};
