import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "../IUser";
import { FormInput } from "./FormInput";

interface Props {
  onComplete: (user: User) => void;
}

export const UserStepForm = ({ onComplete }: Props) => {
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        message: "Passwords must match",
      });
      return;
    }
    onComplete(data);
  };

  return (
    <>
      <h3>User Information</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="user-form">
        <FormInput
          label="Email"
          hasError={errors.email?.type === "required"}
          errorMsg="Email is required"
        >
          <input
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </FormInput>

        <FormInput
          label="Password"
          hasError={errors.password ? true : false}
          errorMsg="Password is required and must be 8-50 characters long"
        >
          <input
            type="password"
            {...register("password", { required: true, min: 8, max: 50 })}
            aria-invalid={errors.password ? "true" : "false"}
          />
        </FormInput>

        <FormInput
          label="Confirm Password"
          hasError={errors.confirmPassword ? true : false}
          errorMsg={
            errors.confirmPassword?.message || "Confirm Password is required"
          }
        >
          <input
            type="password"
            {...register("confirmPassword", { required: true })}
            aria-invalid={errors.confirmPassword ? "true" : "false"}
          />
        </FormInput>

        <FormInput
          label="Terms"
          hasError={errors.terms ? true : false}
          errorMsg="You must accept the terms in order to continue"
        >
          <input
            type="checkbox"
            {...register("terms", { required: true })}
            aria-invalid={errors.terms ? "true" : "false"}
          />
          <label>I accept term and conditions</label>
        </FormInput>

        <div className="input-field">
          <label>Newsletter</label>
          <input type="checkbox" {...register("newsletter")} />
          <label>I would like to recieve email updates</label>
        </div>

        <input type="submit" value="Get Started" />
      </form>
    </>
  );
};
