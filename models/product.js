import { Schema, model, models } from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: [true, 'Product name already exists'],
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
  }
}, {
  timestamps: true,
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;