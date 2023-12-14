
import { connectToDB } from '@utils/database';
import Order from '@models/order'

export const POST = async (req) => {
  const { userId, productId } = await req.json();
  try {
    await connectToDB();
    console.log("Everything all good");
    console.log(userId, productId);

    const newOrder = new Order({
      userId: userId,
      productId: productId,
    });

    console.log(newOrder);

    await newOrder.save();
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new order.", { status: 500 });
  }
}