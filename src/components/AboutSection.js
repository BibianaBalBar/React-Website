import React from "react";
import home1 from "../img/home1.png";
import { StyledAbout, StyledDescription, StyledImg, StyledHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: {opacity: 0},
  //   show: { opacity: 1, transition:{duration: 2} }
  // };
  // const container = {
  //   hidden: {x: 100},
  //   show: {
  //     x:0, 
  //     transition: {
  //       duration: 0.75, 
  //       ease: "easeOut", 
  //       staggerChildren:1, 
  //       when: "afterChildren"
  //     },
  //   } 
  // };


  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              We work to make
            </motion.h2> 
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come 
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              true.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We 
          have professionals with amazing skil.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </StyledDescription>
      <StyledImg>
        <motion.img variants={photoAnim} src={home1} alt="guy with camera"/>
      </StyledImg>
      <Wave />
    </StyledAbout>
  );
};



export default AboutSection;