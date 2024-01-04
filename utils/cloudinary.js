
// import { v2 as cloudinary } from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true,
// });

// export const fetchGalleryFolder = async () => {
//   try {
//     const result = await cloudinary.api.resources({ prefix: 'gallery', tags: true, type: 'upload', max_results: 100 });
//     const { resources } = result;
//     return resources;
//   } catch (error) {
//     console.error('Error fetching gallery folder:', error);
//     throw error; // Rethrow the error if you want to handle it in the calling code
//   }
// }

// export const fetchGalleryFolder = async () => {
//   const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image/upload?prefix=gallery&tags=true`, {
//     headers: {
//       'Authorization': `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
//     }
//   })
//   const data = await results.json();
//   console.log(data);
//   const { resources } = data;
//   return resources
// }

export const fetchGalleryFolder = async () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload`;
  const params = new URLSearchParams({
    prefix: 'gallery',
    tags: true,
    max_results: 100
  });

  const authString = 'Basic ' + Buffer.from(apiKey + ':' + apiSecret).toString('base64');

  try {
    const response = await fetch(url + '?' + params.toString(), {
      headers: {
        'Authorization': authString
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return result.resources;
  } catch (error) {
    console.error('Error fetching gallery folder:', error);
    throw error;
  }
}