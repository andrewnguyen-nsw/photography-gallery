import React from 'react'

const About = () => {
  const fetchImages = async () => {
    const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/tags/landscape`, {
      headers: {
        'Authorization': `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
      }
    })
    const data = await results.json();
    console.log(data); 
  }

  fetchImages();

  return (
    <div>About</div>
  )
}

export default About