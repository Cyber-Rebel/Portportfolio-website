import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    alert("Message Sent Successfully!");
    reset();
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        {/* Inputs in a row */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 text-white placeholder-gray-400 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 text-white placeholder-gray-400 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <input
            type="text"
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
            className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 text-white placeholder-gray-400 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="text-right py-2.5 ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-16 py-2 bg-blue-600 hover:bg-blue-700  text-white font-medium rounded-lg transition disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
