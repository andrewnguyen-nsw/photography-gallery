import React from 'react'
import Testimonial from "@components/Testimonials/Testimonial";
import Masonry from 'react-masonry-css';
import reviewer01 from '@public/assets/images/reviewer01.jpg';
import reviewer02 from '@public/assets/images/reviewer02.jpg';
import reviewer03 from '@public/assets/images/reviewer03.jpg';
import reviewer04 from '@public/assets/images/reviewer04.jpg';

const Testimonials = () => {
  const breakpointColumnsObj = {
    default: 2,
    720: 1
  };
  return (
    // <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2">
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <Testimonial imgSrc={reviewer01} saying="Exceptional photography skills! Captured stunning, emotive shots. Highly professional and creative." name="Mrs. Vy" city="Sydney, Australia"/>
      <Testimonial imgSrc={reviewer02} saying="Delighted by the vibrant, expressive photos. A blend of artistry and skill." name="Mrs. Linh" city="Nghe An, Viet Nam"/>
      <Testimonial imgSrc={reviewer03} saying="Remarkable talent in every photo. Professional, creative, and truly outstanding." name="Mrs. Thu" city="Ho Chi Minh city, Viet Nam"/>
      <Testimonial imgSrc={reviewer04} saying="A joyous, creatively inspiring photoshoot experience. Treasured photos that showcase incredible talent and artistic vision." name="Mr. Hung" city="Ha Noi, Viet Nam"/>
    </Masonry>
    // </div>
  )
}

export default Testimonials