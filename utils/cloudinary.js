
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const fetchGalleryFolder = async () => {
  try {
    const result = await cloudinary.api.resources({ prefix: 'gallery', tags: true, type: 'upload', max_results: 100 });
    const { resources } = result;
    return resources;
  } catch (error) {
    console.error('Error fetching gallery folder:', error);
    throw error; // Rethrow the error if you want to handle it in the calling code
  }

}

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