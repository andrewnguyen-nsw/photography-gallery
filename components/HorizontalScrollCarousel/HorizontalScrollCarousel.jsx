import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'

import tour01 from '@public/assets/images/tour01.jpg';
import tour02 from '@public/assets/images/tour02.jpg';
import tour03 from '@public/assets/images/tour03.jpg';
import tour04 from '@public/assets/images/tour04.jpg';
import tour05 from '@public/assets/images/tour05.jpg';

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-[100vh] items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[400px] w-[600px] overflow-hidden bg-neutral-200"
    >
      <Image src={card.url} alt={card.title} height={600} className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.009]"/>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: tour01,
    title: "Title 1",
    id: 1,
  },
  {
    url: tour02,
    title: "Title 2",
    id: 2,
  },
  {
    url: tour03,
    title: "Title 3",
    id: 3,
  },
  {
    url: tour04,
    title: "Title 4",
    id: 4,
  },
  {
    url: tour05,
    title: "Title 5",
    id: 5,
  },
  {
    url: tour01,
    title: "Title 6",
    id: 6,
  },
  {
    url: tour02,
    title: "Title 7",
    id: 7,
  },
];