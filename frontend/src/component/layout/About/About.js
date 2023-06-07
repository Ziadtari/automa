import React from "react";
import "./about.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import ProfileHead from "../../../images/ziad.png";

const About = () => {
  const visitLinkedin = () => {
    window.location = "/";
  };
  return (
    <div className="aboutContainer">
      <Typography component="h1">About Us</Typography>
      <div className="aboutProfile">
        <Avatar
          style={{ width: "15vmax", height: "15vmax" }}
          src={ProfileHead}
          alt="Founder"
        />
        <h1>Ziad Bin Tariq</h1>
        <h3>(Head of Auto Mania)</h3>
        <Button onClick={visitLinkedin} color="primary">
          Visit My Linkedin
        </Button>
        <span>
          About Auto Mania
        </span>
        <span>
        About Auto Mania
        </span>
        <span>
        About Auto Mania
        </span>
        <span>
        About Auto Mania
        </span>
      </div>
      <div className="aboutDeatils">
        <div className="inspiration">
          <h4>Our Inspiration</h4>
          <p>
            Few Lines About Your Store
          </p>
        </div>
        <div className="philosophy">
          <h4>Our Design Philosophy</h4>
          <p>
          Few Lines About Your Design 
          </p>
        </div>
        <div className="craft">
          <h4>Our Crafts and Textiles</h4>
          <p>
          Few Lines About Your Store
          </p>
        </div>
        <div className="mission">
          <h4>Our Mission</h4>
          <p>
          Automania acts as a key factor in providing the user with top-quality automotive products within lower price. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
