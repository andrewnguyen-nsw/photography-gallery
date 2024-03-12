import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const useParallax = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const xl = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const xxl = useTransform(scrollYProgress, [0, 1], [0, -550]);
  const xxxl = useTransform(scrollYProgress, [0, 1], [0, -750]);
  return { containerRef, sm, md, lg, xl, xxl, xxxl };
};

export default useParallax;
