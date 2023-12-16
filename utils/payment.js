const retrieveProductId = async () => {
  try {
    const response = await fetch('/api/payment/retrieve-product-id');
    const product = await response.json();
    return product._id;
  } catch (error) {
    console.log(error);
  }
}

const insertIntoOrderModel = async (session, productId) => {
  try {
    console.log("userId: ", session?.user.id, "productId: ", productId);
    const response = await fetch('/api/payment/insert-into-order-model', {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: session?.user.id,
        productId: await retrieveProductId(),
      }),
    })
  } catch (error) {
    console.log(error);
  }
}

export default insertIntoOrderModel;