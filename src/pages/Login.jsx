import React, { useState } from "react";
import Button from "../components/Button";
import FromControl from "../components/FromControl";
import SectionTitle from "../components/SectionTitle";

const Login = () => {
  const [fromFields, setFromFields] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(fromFields);

    // clear state
    setFromFields({
      email: "",
      password: "",
    });
  };
  return (
    <div className="login flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5 ">
        <SectionTitle title={"Login..."} />
        <FromControl
          label="email"
          labelInner="Email Address"
          inputType="email"
          placeholder="write your email"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

        <FromControl
          label="password"
          labelInner="password"
          inputType="password"
          placeholder="write your password"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />
        <Button text="Login" submit />
      </form>
    </div>
  );
};

export default Login;
