import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-orange-400 text-white py-10">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-100 mb-6">
              Contact Us
            </h1>
            <p className="text-black-400 mb-6">
              Have questions or need assistance? Feel free to get in touch with
              us! We are here to help with any inquiries you may have regarding
              our products, orders, or anything else.
            </p>

            {/* Contact Details */}
            <div className="flex items-center gap-3 mb-4">
              <FaMapMarkerAlt className="text-gray-300 text-2xl" />
              <p className="text-black-400">Karachi, Pakistan</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaPhoneAlt className="text-black-300 text-2xl" />
              <p className="text-black-400">+92 314 5531971</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <FaEnvelope className="text-black-300 text-2xl" />
              <p className="text-black-400">mehwishsheikh451sheikh@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white p-3 rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white p-3 rounded-md"
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-800 text-white p-3 rounded-md"
                rows="5"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
