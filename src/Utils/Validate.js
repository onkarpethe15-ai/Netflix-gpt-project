export const checkValidata = (email, password, name) => {
  const isEmailvalid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordvalid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  const isNamevalid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
  if (!isEmailvalid) return "Email is not valid";
  if (!isPasswordvalid) return "password is not valid";
  if (!isNamevalid) return "Please enter the name in valid format";
  return null;
};
