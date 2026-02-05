import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
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
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <motion.form
          ref={formRef}
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className='mt-12 flex flex-col gap-8'
          onSubmit={handleSubmit}
        >
          <div className='flex gap-x-6 w-full'>
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex-1'
              disabled={isLoading}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Your Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium flex-1'
              disabled={isLoading}
              required
            />
          </div>

          <input
            type='text'
            name='subject'
            placeholder='Subject'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            disabled={isLoading}
            required
          />

          <textarea
            rows={7}
            name='message'
            placeholder='Your Message'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            disabled={isLoading}
            required
          />

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-all duration-300 flex items-center justify-center gap-2 hover:bg-accent group disabled:opacity-50'
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
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

const ContactWrapped = SectionWrapper(Contact, "contact");
ContactWrapped.displayName = "Contact";
export default ContactWrapped;
