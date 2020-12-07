import React from "react";
import home1 from "../img/home1.png";
import { StyledAbout, StyledDescription, StyledImg, StyledHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

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
            <motion.h2>
              We work to make
            </motion.h2> 
          </StyledHide>
          <StyledHide>
            <motion.h2>
              your <span>dreams</span> come 
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2>
              true.
            </motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We 
          have professionals with amazing skil.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImg>
        <img src={home1} alt="guy with camera"/>
      </StyledImg>
    </StyledAbout>
  );
};



export default AboutSection;