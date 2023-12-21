import React from "react";
import img from "../assets/contact.svg";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import { CustomForm } from "../layout/CustomForm";

const Contact = () => {
  const dataFormContact = [
    {
      label: "Your Name",
      type: "text",
      name: "userName",
      id: "userName",
      placeholder: "enter your name",
    },
    {
      label: "Your Email",
      type: "email",
      name: "userEmail",
      id: "userEmail",
      placeholder: "enter your email",
    },
    {
      label: "Your Number",
      type: "text",
      name: "userNumber",
      id: "userNumber",
      placeholder: "enter your number",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />

      <div className=" flex flex-col md:flex-row justify-between w-full">
        <form className=" w-full md:w-2/5 space-y-5 pt-20">
          {dataFormContact.map((data, i) => (
            <CustomForm
              type={data.type}
              id={data.id}
              name={data.label}
              label={data.label}
              placeholder={data.placeholder}
            />
          ))}

          <div className=" flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className=" w-full md:w-2/4">
          <img src={img} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
