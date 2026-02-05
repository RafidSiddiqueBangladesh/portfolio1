import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { technologies } from "../constants";

const ServiceCard = ({ index, title, icon, source_code_link }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full sm:w-[280px] bg-tertiary rounded-[20px] p-5 hover:shadow-xl transition-shadow duration-300 cursor-pointer'
    onClick={() => window.open(source_code_link, "_blank")}
  >
    <div className='flex flex-col items-center justify-center gap-3 h-full'>
      <img
        src={icon}
        alt={title}
        className='w-16 h-16 object-contain'
      />
      <h3 className='text-white text-[18px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tools of my trade</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className='mt-20 flex flex-row flex-wrap justify-center gap-6'>
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", Math.random() * 0.5, 0.5)}
            className='w-20 h-20 sm:w-24 sm:h-24 bg-tertiary rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300'
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-12 h-12 sm:w-14 sm:h-14 object-contain'
            />
          </motion.div>
        ))}
      </div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Tech, "tech");