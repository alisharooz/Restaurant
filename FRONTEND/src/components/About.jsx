import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Hot and Fast is a casual, friendly restaurant that specializes in Asian fusion cuisine. Our dishes are inspired by the flavors and traditions of China, Japan, Thailand, and Vietnam, and are prepared with fresh vegetables, lean meats, and aromatic spices. Try our signature sushi rolls, noodle bowls, stir-fries, and salads, or create your own combination from our buffet. Bamboo Garden is a great spot to enjoy a quick and healthy meal, or to relax with a cup of tea and a fortune cookie.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
