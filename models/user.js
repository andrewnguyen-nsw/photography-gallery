// Importing required modules from mongoose for schema creation and model handling.
import { Schema, model, models } from 'mongoose';

// Define UserSchema with mongoose Schema.
// This schema will be used to create and manage the User model in the database.
const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email is required'],
  },

  username: {
    type: String, // Data type of username is string
    required: [true, 'Username is required'],
    // Regular expression to validate username. It must be 4-30 characters long,
    // cannot start or end with a dot or underscore, and must not have two dots or underscores in a row.
    match: [/^(?=.{4,30}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 4-30 alphanumeric letters and be unique!"]
  },

  image: {
    type: String, 
  },
  
  isAdmin: {
    type: Boolean, // This field is optional and used to identify if the user is an administrator.
  }
}, {
  timestamps: true, // This option will automatically create "createdAt" and "updatedAt" fields.
});

// Check if the User model already exists to prevent recompiling it, which can lead to errors.
// If it does not exist, create a new model named "User" using the UserSchema.
const User = models.User || model("User", UserSchema);

// Export the User model for use in other parts of the application.
export default User;
