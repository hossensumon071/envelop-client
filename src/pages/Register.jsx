import React, { useState } from "react";
import Button from "../components/Button";
import FromControl from "../components/FromControl";
import SectionTitle from "../components/SectionTitle";

const Register = () => {
  const [fromFields, setFromFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = (e) => {
    e.preventDefault();

    console.log(fromFields);

    // clear state
    setFromFields({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="register flex flex-col justify-center items-center mt-20">
      <form onSubmit={handleRegister} className="flex flex-col gap-5 ">
        <SectionTitle title={"Register..."} />
        <FromControl
          label="name"
          labelInner="Name"
          inputType="text"
          placeholder="write your name"
          fromFields={fromFields}
          setFromFields={setFromFields}
        />

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
        <Button text="Register" submit />
      </form>
    </div>
  );
};

export default Register;
