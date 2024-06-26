import { fetchGalleryFolder } from "@utils/cloudinary";

export const dynamic = "force-dynamic"; // https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

export const GET = async (req) => {
  try {
    const response = await fetchGalleryFolder();
    const fileDetails = response.map((file) => {
      return {
        publicId: file.public_id,
        secureUrl: file.secure_url,
        width: file.width,
        height: file.height,
        tags: file.tags,
      };
    });

    return new Response(JSON.stringify(fileDetails), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch images.", { status: 500 });
  }
};

// export const POST = async (req) => {
//   const { file, genre, altText } = await req.json();
//   try {

//   } catch (error) {
//     return new Response("Failed to upload image.", { status: 500 });
//   }
// };
