"use client";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { useGSAP } from "@gsap/react";
import { useFormik } from "formik";
import gsap from "gsap";
import React, { useRef } from "react";
import * as Yup from "yup";

const ForthSection = () => {
  const { toast } = useToast();

  const containerRef = useRef(null);
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".heading",
          start: "-70% top",
          end: "bottom bottom",
          scrub: 5,
          toggleActions: "play reverse play reverse",
        },
      });
      tl.fromTo(
        ".letter",
        {
          opacity: 0,
          y: "-30px",
        },
        {
          opacity: 1,
          y: "0px",
          color: "white",
          stagger: 0.5,
          ease: "power1.inOut",
        }
      );
    },
    { scope: containerRef }
  );

  // Yup validation schema
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    subject: Yup.string()
      .required("Subject is required")
      .min(2, "Subject must be at least 2 characters")
      .max(50, "Subject must be less than 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .matches(emailRegex, "Email is not valid"),
    message: Yup.string()
      .min(3, "Message must be at least 3 characters")
      .max(500, "Message must be less than 500 characters"),
  });

  const sendMail = async (data) => {
    formik.setSubmitting(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast({
        title: "Email sent Successfully",
        description: "Your Email Has Been Sent successfully",
      });
      formik.resetForm();
    } else {
      toast({
        title: "Failed to send message",
        description: "Failed To send Your Email",
      });
    }
    formik.setSubmitting(false);
  };

  // formk
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendMail(values);
    },
  });

  return (
    <div
      ref={containerRef}
      className="w-full flex flex-col justify-start  relative h-screen bg-[#000000]"
    >
      <h1 className="text-white text-[12vw] uppercase heading whitespace-nowrap gap-x-10 font-medium  leading-normal">
        <span className="letter">C</span>
        <span className="letter">o</span>
        <span className="letter">n</span>
        <span className="letter">t</span>
        <span className="letter">a</span>
        <span className="letter">c</span>
        <span className="letter">t</span>
      </h1>

      {/* form */}
      <div className="w-[50%]  self-center letter relative p-8 bg-transparent border  rounded-lg shadow-[#ffffff] shadow-lg">
        {/* name */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white ">Your Name</label>
          <input
            type="text"
            id="email"
            className={`  bg-[#080808] placeholder-gray-500 text-white text-sm rounded-lg block w-full p-2.5 ${
              formik?.errors.name &&
              formik.touched.name &&
              "border border-red-600"
            }`}
            placeholder="John doe"
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            onBlur={() => formik.setFieldTouched("name")}
          />
          {formik?.errors.name && formik.touched.name && (
            <p className="text-sm text-red-600">{formik?.errors.name}</p>
          )}
        </div>
        {/* Subject */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white ">Subject</label>
          <input
            type="text"
            id="text"
            className={`  bg-[#080808] placeholder-gray-500 text-white text-sm rounded-lg block w-full p-2.5 ${
              formik?.errors.subject &&
              formik.touched.subject &&
              "border border-red-600"
            }`}
            placeholder="Your Subject"
            value={formik.values.subject}
            onChange={formik.handleChange("subject")}
            onBlur={() => formik.setFieldTouched("subject")}
          />
          {formik?.errors.subject && formik.touched.subject && (
            <p className="text-sm text-red-600">{formik?.errors.subject}</p>
          )}
        </div>
        {/* email */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white ">Email</label>
          <input
            type="email"
            id="email"
            className={`  bg-[#080808] placeholder-gray-500 text-white text-sm rounded-lg block w-full p-2.5 ${
              formik?.errors.email &&
              formik.touched.email &&
              "border border-red-600"
            }`}
            placeholder="name@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange("email")}
            onBlur={() => formik.setFieldTouched("email")}
          />
          {formik?.errors.email && formik.touched.email && (
            <p className="text-sm text-red-600">{formik?.errors.email}</p>
          )}
        </div>
        {/* message */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white ">Your Message</label>
          <textarea
            id="message"
            rows="4"
            className={`block p-2.5 w-full text-sm placeholder-gray-500 text-white bg-[#080808] rounded-lg  ${
              formik?.errors.message &&
              formik.touched.message &&
              "border border-red-600"
            } `}
            placeholder="Type Your Message..."
            value={formik.values.message}
            onChange={formik.handleChange("message")}
            onBlur={() => formik.setFieldTouched("message")}
          ></textarea>
          {formik?.errors.message && formik.touched.message && (
            <p className="text-sm text-red-600">{formik?.errors.message}</p>
          )}
        </div>

        {/* button */}
        <Button onClick={formik.handleSubmit}>
          <span>{formik?.isSubmitting ? "Sending..." : "Send"}</span>
        </Button>
      </div>

      {/* svg */}
      <svg className="w-full absolute bottom-0 letter" viewBox="0 0 1640 100">
        <path
          fill="white"
          fill-opacity="1"
          d="M0,32L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default ForthSection;
