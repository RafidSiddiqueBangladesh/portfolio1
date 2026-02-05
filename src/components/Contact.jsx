import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Thank you. I will get back to you ASAP.");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌ Oops, something went wrong. Please try again.");
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-full`}>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='w-full xl:flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.form
          ref={formRef}
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-6 w-full'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='w-full bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
              disabled={isLoading}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='w-full bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
              disabled={isLoading}
              required
            />
          </div>

          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='w-full bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            disabled={isLoading}
            required
          />

          <textarea
            rows={5}
            name='message'
            placeholder='Your Message'
            className='w-full bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base resize-none'
            disabled={isLoading}
            required
          />

          <button
            type='submit'
            className='bg-tertiary py-3 px-6 sm:px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent group disabled:opacity-50 text-sm sm:text-base'
            disabled={isLoading}
          >
            {isLoading ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send</span>
                <span className='group-hover:translate-x-1 transition-all duration-300'>→</span>
              </>
            )}
          </button>
        </motion.form>
      </motion.div>

      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='hidden lg:flex lg:flex-1 lg:h-auto items-center justify-center'
      >
        <div className='bg-black-100 p-8 rounded-2xl border border-tertiary w-full max-w-sm'>
          <h3 className='text-white text-[24px] font-bold mb-6'>Contact Info</h3>
          
          <div className='space-y-4'>
            <div>
              <p className='text-secondary text-sm mb-1'>Email</p>
              <a href='mailto:your-email@example.com' className='text-white hover:text-[#915EFF] transition'>
                rafidsiddique.bd@gmail.com
              </a>
            </div>
            
            <div>
              <p className='text-secondary text-sm mb-1'>LinkedIn</p>
              <a href='https://www.linkedin.com/in/rafid-siddique-3131b9216/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-[#915EFF] transition'>
                linkedin.com/in/rafid-siddique
              </a>
            </div>
            
            <div>
              <p className='text-secondary text-sm mb-1'>GitHub</p>
              <a href='https://github.com/RafidSiddiqueBangladesh' target='_blank' rel='noopener noreferrer' className='text-white hover:text-[#915EFF] transition'>
                github.com/RafidSiddiqueBangladesh
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ContactWrapped = SectionWrapper(Contact, "contact");
ContactWrapped.displayName = "Contact";
export default ContactWrapped;
