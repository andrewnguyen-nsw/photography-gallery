import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from 'next/image'

import PLinh01 from '@public/assets/images/PLinh01.jpg';
import PLinh02 from '@public/assets/images/PLinh02.jpg';
import PLinh03 from '@public/assets/images/PLinh03.jpg';
import ThuVu from '@public/assets/images/ThuVu.jpg';
import HuyLe from '@public/assets/images/HuyLe.jpg';
import TrieuVyTran from '@public/assets/images/TrieuVyTran.jpg';

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
      className="group relative h-[400px] w-[600px] overflow-hidden bg-neutral-200 last:h-[400px] last:w-[266px]"
    >
      <Image src={card.url} alt={card.title} height={400} quality={100} className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-[1.009]"/>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: PLinh01,
    title: "Sydney Harbour view from Mrs Macquaire's Chair",
    id: 1,
  },
  {
    url: PLinh02,
    title: "Australian Parliament House in Canberra",
    id: 2,
  },
  {
    url: PLinh03,
    title: "Australian War Memorial in Canberra",
    id: 3,
  },
  {
    url: ThuVu,
    title: "Sydney Harbour view from the North",
    id: 4,
  },
  {
    url: HuyLe,
    title: "Iris Lodge Alpacas",
    id: 5,
  },
  {
    url: TrieuVyTran,
    title: "Jacaranda in Kirribilli",
    id: 6,
  },
];