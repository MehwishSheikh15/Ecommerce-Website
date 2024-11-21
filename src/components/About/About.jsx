import React from "react";

const About = () => {
  return (
    <div className="bg-orange-400 text-white py-10">
      <div className="container">
        <div data-aos="zoom-in" className="text-center mb-10">
          <h1 className="text-4xl font-bold text-black-100">About Our Clothing Store</h1>
          <p className="text-gray-400 mt-2">
            Learn more about us, our mission, and what makes us stand out in the fashion world.
          </p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Section - Store Mission */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
              Our Mission
            </h2>
            <p className="text-black-400 mb-6">
              At our online clothing store, we are dedicated to offering the latest
              and most fashionable clothing at affordable prices. Our mission is to
              help you feel confident and stylish, no matter your occasion. We believe
              that fashion should be accessible, fun, and tailored to your unique style.
            </p>
            <p className="text-black-400 mb-6">
              We carefully curate our collections to bring you a wide range of options,
              from casual wear to formal attire. Whether you're shopping for everyday
              essentials or that special outfit, we aim to provide you with the best
              selection, top quality, and the latest trends.
            </p>
          </div>

          {/* Right Section - Vision */}
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">
              Our Vision
            </h2>
            <p className="text-black-400 mb-6">
              Our vision is to be the leading online fashion retailer, offering not
              just clothes, but an experience. We aspire to create a shopping
              destination where our customers can find the perfect pieces to
              express their individuality.
            </p>
            <p className="text-black-400 mb-6">
              Sustainability, inclusivity, and community are at the heart of our
              brand. We strive to support local artisans, and we aim to offer fashion
              that is both stylish and responsible. Join us in embracing a world of
              fashion that cares for people, planet, and style.
            </p>
          </div>
        </div>

        {/* Additional Section - Why Choose Us */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-100 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-black-400 mb-4">
            We’re not just another clothing store. Our commitment to quality,
            customer satisfaction, and sustainable fashion sets us apart. Here’s
            why our customers love us:
          </p>
          <ul className="text-black-400 list-disc list-inside">
            <li>Wide selection of high-quality clothing for all occasions.</li>
            <li>Affordable pricing without compromising on style or quality.</li>
            <li>Sustainable and ethical sourcing of materials and production.</li>
            <li>Exceptional customer service and easy returns.</li>
            <li>Exclusive collections and limited-edition releases.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

