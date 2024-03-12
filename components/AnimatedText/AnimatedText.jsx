import { motion } from "framer-motion";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      once: true,
    },
  },
};

const AnimatedText = ({ text, el: Wrapper = "p", className }) => {
  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {text.split(" ").map((word, index) => (
          <span key={index}>
            {word.split("").map((char, i) => (
              <motion.span
                key="i"
                className="inline-block"
                variants={defaultAnimations}
              >
                {char}
              </motion.span>
            ))}{" "}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
