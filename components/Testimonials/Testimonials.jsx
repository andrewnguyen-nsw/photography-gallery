import React from 'react'
import Testimonial from "@components/Testimonials/Testimonial";
import Masonry from 'react-masonry-css';

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
      <Testimonial saying="You are a hidden talent. Please keep it hidden." name="Devon Lane" city="Sydney, Australia"/>
      <Testimonial saying="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save." name="Devon Lane" city="Sydney, Australia"/>
      <Testimonial saying="You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save." name="Devon Lane" city="Sydney, Australia"/>
      <Testimonial saying="Chụp đẹp quãi đạn. Mội tài năng như này mà sao bây giờ mình mới biết nhỉ." name="Người này không có thật" city="Sydney, Australia"/>
    </Masonry>
    // </div>
  )
}

export default Testimonials