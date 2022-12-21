import React, { useEffect, useState } from "react";
import { CustomForm } from "../../Components/CustomForm";
import "./Register.css";

export default function Register() {
  const [data, setData] = useState();
  const FormAttributes = {
    TextFields: [
      {
        id: "vendor_name",
        name: "vendor_name",
        label: "Enter your Company's Name",
      },
      {
        id: "vendor_phone",
        name: "vendor_phone",
        label: "Enter your Company's Phone Number",
      },
      {
        id: "vendor_address",
        name: "vendor_address",
        label: "Enter your Company's Location",
      },
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
    formType: "Sign Up/Register",
    submitLabel: "Register",
    navigate: "/login",
    navigateLabel: "Already have a account?",
  };
  useEffect(() => {
    if (data) {
      console.log("Register data", data);
    }
  }, [data]);
  return (
    <div className="register-container">
      <CustomForm setData={setData} FormAttributes={FormAttributes} />
    </div>
  );
}
