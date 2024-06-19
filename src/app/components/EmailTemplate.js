import * as React from "react";

export const EmailTemplate = ({ firstName, message }) => (
  <div>
    <h1 className="text-lg text-black ">My Name is, {firstName}!</h1>
    <p className="mt-5 text-md text-black">{message}</p>
  </div>
);
