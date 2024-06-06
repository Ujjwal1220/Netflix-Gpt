export const validate = (email, Password) => {
  email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  Password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    Password
  );
  if (!email) return "Email is not Valid";
  if (!Password) return "Password is not valid";

  return null;
};
