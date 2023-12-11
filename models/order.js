import { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
  // Defining a userId field as a reference to a User document
  // This field will store the ObjectId of a user and is required
  userId: {
    type: Schema.Types.ObjectId, // Type is ObjectId, referencing another document
    ref: 'User',                // Refers to the User model
    required: [true, 'User is required'],
  },
  
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'Product is required'],
  },
}, {
  timestamps: true,
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;