import React, { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { awards } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AwardCard = ({
  index,
  title,
  issuer,
  date,
  description,
  tags,
  image,
  live_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  const cardContent = (
    <div>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='award_image'
          className='w-full h-full object-cover rounded-2xl'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(live_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition'
            title="View Link"
          >
            <span className='text-white text-[20px]'>🔗</span>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{title}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{issuer}</p>
        <p className='text-secondary text-[12px] mt-1'>{date}</p>
        <p className='mt-4 text-secondary text-[14px] leading-[24px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags && tags.map((tag, tagIndex) => (
          <p
            key={tagIndex}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-2xl transition-shadow duration-300'>
        {cardContent}
      </div>
    </motion.div>
  );
};

const Awards = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Recognition</p>
        <h2 className={`${styles.sectionHeadText}`}>Awards & Achievements.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Throughout my career, I have been recognized for my contributions in web development, innovation, and technical excellence. These awards showcase my commitment to delivering quality solutions and continuous improvement in my craft.
        </motion.p>
      </div>

      <div className='mt-20 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center'>
        {awards.map((award, index) => (
          <AwardCard key={index} index={index} {...award} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Awards, "awards");
