import React, { useState } from "react";
import { FaMessage, FaPaperPlane } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import emailjs from '@emailjs/browser';
import ShinyText from "../ShinyText/ShinyText";
import AnimatedEnvelope from "../AnimatedEnvelope/AnimatedEnvelope";
import AnimatedContent from "../AnimatedContent/AnimatedContent";

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_jckl8u8';
const EMAILJS_TEMPLATE_ID = 'template_bzgix4t';
const EMAILJS_PUBLIC_KEY = 'WX_GRXsHQdR4UYvTI';

const Contact = ({ ref }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus('error');
      setStatusMessage('Please fix the errors in the form');
      return;
    }

    setLoading(true);
    setStatus(null);
    setStatusMessage('');

    try {
      // Get current timestamp in a readable format
      const now = new Date();
      const time = now.toLocaleString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });

      // Prepare template parameters matching EmailJS template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: time,
        reply_to: formData.email // This allows you to reply directly to the sender
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! I\'ll get back to you soon.');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
        setErrors({});

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus(null);
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={ref} className="max-w-[1240px] mx-auto mt-[30px] mb-12">
      {/* Heading */}
      <div className="mb-8">
        <div className="w-fit mx-auto py-[6px] px-[20px] flex items-center justify-center bg-[#282732] gap-2 rounded-[16px]">
          <div>
            <FaMessage />
          </div>
          <h3>Have questions or ideas? Let's talk! 🚀</h3>
        </div>
        <h1 className="text-[28px] md:text-[48px] text-center font-bold mt-2">
          Get in Touch – Let's Connect
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-8">
        {/* Left Column: Contact Form */}
        <div className="md:w-1/2 w-full bg-[#0E0E10] py-[40px] px-[30px] rounded-xl border border-gray-700/30">
          <form onSubmit={handleSubmit} className="flex flex-col gap-[30px]">
            {/* Name Field */}
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0}
            >
              <div className="flex flex-col">
                <label className="text-[#D9ECFF] mb-2 font-medium" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`bg-[#2D2D38] text-[#D9ECFF] placeholder:text-[#839CB5] p-[17px] rounded-lg border-2 transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-transparent focus:border-[#7C3AED]'
                  } outline-none`}
                  placeholder="What's your good name?"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
            </AnimatedContent>

            {/* Email Field */}
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.1}
            >
              <div className="flex flex-col">
                <label className="text-[#D9ECFF] mb-2 font-medium" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`bg-[#2D2D38] text-[#D9ECFF] placeholder:text-[#839CB5] p-[17px] rounded-lg border-2 transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-transparent focus:border-[#7C3AED]'
                  } outline-none`}
                  placeholder="What's your email address?"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </AnimatedContent>

            {/* Message Field */}
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.2}
            >
              <div className="flex flex-col">
                <label className="text-[#D9ECFF] mb-2 font-medium" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can I help you?"
                  className={`bg-[#2D2D38] text-[#D9ECFF] placeholder:text-[#839CB5] p-[17px] rounded-lg border-2 transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-transparent focus:border-[#7C3AED]'
                  } outline-none`}
                  cols={30}
                  rows={5}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
            </AnimatedContent>

            {/* Submit Button */}
            <AnimatedContent
              distance={50}
              direction="vertical"
              duration={0.6}
              ease="power2.out"
              delay={0.3}
            >
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#EBF3FA] hover:bg-white px-6 py-3 w-fit text-center flex items-center gap-2 rounded-lg transition-all duration-300 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'
                }`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-black border-t-transparent rounded-full" />
                    <span className="text-black font-medium">Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-black" />
                    <ShinyText
                      text="Send Message"
                      disabled={false}
                      speed={3}
                      className="custom-class"
                      size={14}
                      textColor="black"
                    />
                  </>
                )}
              </button>
            </AnimatedContent>

            {/* Status Message */}
            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`p-4 rounded-lg border-2 ${
                    status === 'success'
                      ? 'bg-[#10B981]/20 border-[#10B981] text-[#10B981]'
                      : 'bg-[#EF4444]/20 border-[#EF4444] text-[#EF4444]'
                  }`}
                >
                  <p className="font-medium">{statusMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>

        {/* Right Column: Animated Illustration */}
        <div className="md:w-1/2 w-full">
          <AnimatedContent
            distance={100}
            direction="horizontal"
            duration={0.8}
            ease="power2.out"
            delay={0.2}
          >
            <div className="bg-white/5 backdrop-blur-sm border-2 border-gray-400/30 rounded-xl p-6">
              <AnimatedEnvelope sending={loading} />
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default Contact;
