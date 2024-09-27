"use client";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { contactEmailTemplate } from "@/emailTemplate/contactTemplate";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setStatus("Sending...");

    const emailBody = contactEmailTemplate(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          emailBody,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }

    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5 font-geistMono"
      >
        <div className="flex flex-col gap-y-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-900 text-white p-3"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-900 text-white p-3"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="flex flex-col gap-y-2">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-slate-900 text-white p-3"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button className="flex items-center gap-x-2 py-2 px-5 border border-slate-400 hover:border-slate-400 hover:border-2">
            <FaPaperPlane />
            Send
          </button>
        </div>
        {status && <p className="text-center mt-4">{status}</p>}
      </form>
    </>
  );
}
