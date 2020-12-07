import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../styles";
import Toggle from "./Toggle";
import { motion, AnimateSharedLayout } from "framer-motion";
import { fadeFaq } from "../animation";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout >
        <Toggle title="How Do I Start?">        
          <motion.div variants={fadeFaq} className="answer">        
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore.</p>
          </motion.div>   
        </Toggle>
        <Toggle title="Daily Schedule">          
          <motion.div variants={fadeFaq} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore.</p>
          </motion.div>       
        </Toggle>
        <Toggle title="Payment Methods">        
          <motion.div variants={fadeFaq} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore.</p>
          </motion.div>       
        </Toggle>
        <Toggle title="What Products Do You Offer?">        
          <motion.div variants={fadeFaq} className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, labore.</p>
          </motion.div>       
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};

const StyledFaq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p{
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;