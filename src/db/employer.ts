import mongoose from "mongoose";
import validator from "email-validator";

const employerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name should be present"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email should be present"],
    lowercase: true,
    validate: {
      validator: (v: string) => validator.validate(v),
      message: "Invalid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password should be present"],
    minLength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "confirm the password"],
    minLength: 8,
  },
  phone: {
    type: String,
    required: [true, "Phone Number should be present"],
  },
  address: {
    type: String,
    required: [true, "Address should be present"],
  },
  website: {
    type: String,
    required: [true, "Website link should be present"],
  },
  industry: {
    type: String, // field
    required: [true, "Industry should be mentioned"],
  },
  size: {
    type: String,
  },
  founded: {
    type: Date,
  },
  description: {
    type: String,
  },
  employees: {
    type: Number, // no. of employess
  },
  socialMediaLinks: {
    type: mongoose.Schema.Types.Mixed,
  },
  logo: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
});
