

import { useState, useEffect } from "react";
import Circles from "/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { TiPhone } from "react-icons/ti"; 
import { HiOutlineMail } from "react-icons/hi"; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Automatically hide success and error messages after 3 seconds
  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [success, error]);

  return (
    <div className="h-full bg-primary/30">
      <div
        className="container mx-auto py-32 text-center xl:text-left 
        flex items-center justify-center h-full"
      >
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mt-12"
          >
            {"Let's"} <span className="text-accent">connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-2 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
           
            <textarea
  name="message"
  placeholder="Message"
  className="textarea h-20"
  value={formData.message}
  onChange={handleChange}
  required
></textarea>

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={loading}
            >
              <span
                className={`group ${loading ? "hidden" : "hover:translate-y-[120%] group-hover:opacity-0 translate-all duration-500"}`}
              >
                {loading ? "Sending..." : "Let's talk"}
              </span>
              <BsArrowRight
                className={`translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]`}
              />
            </button>
            <div className="flex flex-col ">
      {/* Phone */}
      <div className="flex flex-col md:flex-row  md:gap-x-8">
  <div className="flex items-center space-x-2">
    <TiPhone className="text-xl md:text-2xl text-accent" />
    <span className="text-white">
      Phone: <a href="tel://+2348065844484">+234-8065844484</a>
    </span>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-2">
    <HiOutlineMail className="text-xl md:text-2xl text-accent" />
    <span className="text-white">
      Email:{" "}
      <a href="mailto://petergyang82@gmail.com">petergyang82@gmail.com</a>
    </span>
  </div>
</div>

    </div>
            {/* Success and Error messages */}
            {success && (
              <div className="text-green-500 mt-2">
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="text-red-500 mt-2 flash-fade">
                Failed to send message. Try again later.
              </div>
            )}
          </motion.form>
        </div>
        
        <Circles />
      </div>
     
    </div>
  );
};

export default Contact;






