import React from 'react';
import Image from 'next/image';

const NextJsImage = ({ photo, imageProps, wrapperStyle }) => {
  const { alt, title, sizes, className, onClick } = imageProps || {};

  return (
    <div style={{ ...wrapperStyle, position: 'relative' }}>
      <Image
        src={photo.publicUrl}
        alt={alt || 'Photo'}
        title={title}
        width={photo.width}
        height={photo.height}
        sizes={sizes}
        className={className}
        // onClick={onClick}
        // objectFit='cover'
        // TODO later: Add 'blurDataURL'
        // placeholder={'blurDataURL' in photo ? 'blur' : undefined}
        // blurDataURL={photo.blurDataURL}
      />
    </div>
  );
};

export default NextJsImage;
