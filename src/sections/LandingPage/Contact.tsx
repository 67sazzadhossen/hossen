"use client";
import { contact } from "@/const/index.const";
import React, { useState, useLayoutEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email Me",
      value: "sazzadhossen010@gmail.com",
      link: "mailto:sazzadhossen010@gmail.com",
      color: "hover:text-blue-400",
    },
    {
      icon: FaPhone,
      title: "Call Me",
      value: "+8801772731958",
      link: "tel:+8801772731958",
      color: "hover:text-green-400",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Mymensingh, Bangladesh",
      link: null,
      color: "hover:text-red-400",
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  useLayoutEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="contact" className="min-h-screen py-20 lg:py-28 bg-black">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-white/10 rounded w-32 mx-auto mb-4"></div>
              <div className="h-12 bg-white/10 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-white/10 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen py-20 lg:py-28 bg-black">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-white/5 rounded-full text-sm font-medium text-gray-300 tracking-wide mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Feel free to
            reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8">
                I&apos;m always excited to work on new projects and meet new
                people. Whether you have a question or just want to say hi,
                I&apos;ll try my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:translate-x-2"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                    transform: "translateX(-30px)",
                  }}
                >
                  <div className="p-3 bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <info.icon
                      className={`text-2xl text-gray-400 group-hover:${info.color} transition-colors`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white font-medium hover:text-blue-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {contact.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1 + 0.3}s forwards`,
                      opacity: 0,
                      transform: "translateY(20px)",
                    }}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fadeIn">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-green-500 text-3xl" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 text-sm font-medium"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:ring-blue-500 focus:border-transparent"
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 text-sm font-medium"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:ring-blue-500 focus:border-transparent"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 mb-2 text-sm font-medium"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:ring-blue-500 focus:border-transparent"
                    }`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 text-sm font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-white/20 focus:ring-blue-500 focus:border-transparent"
                    }`}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
