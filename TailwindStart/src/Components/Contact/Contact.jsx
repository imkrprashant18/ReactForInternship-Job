import React from "react";
import Input from "../Input";

function Contact() {
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full">
        <div className="min-w-24">
          <Input lText="Your Name" type="text" placeText="Enter Your Name" />
          <Input lText="Your Name" type="text" placeText="Enter Your Name" />
          <Input lText="Your Name" type="text" placeText="Enter Your Name" />
          <Input lText="Your Name" type="text" placeText="Enter Your Name" />
        </div>
      </div>
    </>
  );
}

export default Contact;
