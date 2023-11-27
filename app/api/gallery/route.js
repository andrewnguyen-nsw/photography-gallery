import { Storage } from "@google-cloud/storage"; // Google Cloud Storage module for interacting with Google Cloud Storage
import probe from "probe-image-size"; // Module for obtaining image dimensions

export const GET = async (req, res) => {
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
