import React from "react";
import useFormState from "./hooks/useFormState";
const Form = () => {
  const [email, setEmail, resetEmail] = useFormState("");
  const [password, setPassword, resetPassword] = useFormState("");
  return (
    <div>
      <h1>
        Email is: {email} password is: {password}
      </h1>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={setEmail}
      />
      <button onClick={resetEmail}>resetEmail</button>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={setPassword}
      />
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  );
};

export default Form;
