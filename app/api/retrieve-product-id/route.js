import { connectToDB } from "@utils/database";
import Product from "@models/product";

export const GET = async () => {
  try {
    await connectToDB();
    let product = await Product.findOne({ name: '101 All in One Lightroom Presets' });
    return new Response(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch productId.", { status: 500 });
  }
}