import React, { useState, useEffect } from "react";
import { CustomForm } from "../../Components/CustomForm";
import "./Login.css";
export default function Login() {
  const [data, setData] = useState();
  const FormAttributes = {
    TextFields: [
      {
        id: "email",
        name: "email",
        autoComplete: "email",
        label: "Enter Address",
      },
      {
        id: "password",
        name: "password",
        autoComplete: "password",
        type: "password",
        label: "Enter Password",
      },
    ],
    formType: "Sign In/Login",
    submitLabel: "Login",
    navigate: "/register",
    navigateLabel: "Dont't have an account ?",
  };
  useEffect(() => {
    if (data) {
      console.log("Login data", data);
    }
  }, [data]);
  return (
    <div className="login-container">
      <CustomForm setData={setData} FormAttributes={FormAttributes} />
    </div>
  );
}
