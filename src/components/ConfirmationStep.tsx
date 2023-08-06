import { User } from "../IUser";

interface Props {
  user: User | undefined;
}

export const ConfirmationStep = ({ user }: Props) => {
  return (
    <>
      {user &&
        Object.entries(user).map(([key, value]) => {
          return (
            <div key={key}>
              {typeof value === "object" ? (
                <>
                  <h3>{key}</h3>
                  <ConfirmationStep user={value} />
                </>
              ) : (
                <span>
                  {key === "email" && <h3>User details</h3>}
                  {key}: {value}
                </span>
              )}
            </div>
          );
        })}
    </>
  );
};
