import React from 'react'

const About = () => {
  // const fetchImages = async () => {
  //   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/tags/landscape`, {
  //     headers: {
  //       'Authorization': `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
  //     }
  //   })
  //   const data = await results.json();
  //   console.log(data); 
  // }

  // fetchImages();

  const cloudinary = require('cloudinary');

  cloudinary.v2.config({
    cloud_name: 'doxfsxeg0',
    api_key: '617556993188393',
    api_secret: 't7WdHve6DSCrCRHVMnFDEshyqGs',
    secure: true,
  });
  
  cloudinary.v2.api
  .resources()
  .then(result=>console.log(result));

  return (
    <div>About</div>
  )
}

export default About