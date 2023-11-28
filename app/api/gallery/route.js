import { Storage } from "@google-cloud/storage"; // Google Cloud Storage module for interacting with Google Cloud Storage
import { NextResponse } from "next/server";
import probe from "probe-image-size"; // Module for obtaining image dimensions

export const GET = async (req) => {
  try {
    // Initialize a Google Cloud Storage client with a specified service account key file
    const storage = new Storage({
      keyFilename: "photography-gallery-406109-fa36d10b8174.json",
    });

    // Define the name of the bucket in Google Cloud Storage
    const bucketName = "andrew-gallery-photos";

    // Fetch the list of files in the specified bucket and directory (prefix)
    const [files] = await storage
      .bucket(bucketName)
      .getFiles({ prefix: "Gallery/" });

    // Process each file to extract required details
    const fileDetailsPromises = files
      .filter((file) => !file.name.endsWith("/")) // Filter out folders
      .map(async (file) => {
        const { width, height } = await probe(file.publicUrl()); // Use probe to get image dimensions for each file
        return {
          name: file.name,
          url: file.publicUrl(),
          genre: file.metadata.metadata.genre,
          alt: file.metadata.metadata.alt,
          width: width,
          height: height,
        };
      });

    // Await all the promises from the file processing to get the array of file details
    const fileDetails = await Promise.all(fileDetailsPromises);

    return new Response(JSON.stringify(fileDetails), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to fetch images.", { status: 500 });
  }
};

export const POST = async (req) => {
  const { file, genre, altText } = await req.json();
  try {
    // Initialize a Google Cloud Storage client with a specified service account key file
    const storage = new Storage({
      keyFilename: "photography-gallery-406109-fa36d10b8174.json",
    });

    // Define the name of the bucket in Google Cloud Storage
    const bucketName = "andrew-gallery-photos";

    const fileName = file.path;

    // Upload the file to the specified bucket
    const uploadedFileWithMetadata = await storage.bucket(bucketName).upload(fileName, {
      // Set the option to make the file publicly accessible
      public: true,
      // Set the metadata for the file to be uploaded
      metadata: {
        metadata: {
          genre: genre,
          alt: altText,
        },
      },
    });

    console.log(`${fileName} uploaded to ${bucketName} with custom metadata.`);
  } catch (error) {
    return new Response("Failed to upload image.", { status: 500 });
  }
};
