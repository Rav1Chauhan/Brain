import dotenv from "dotenv";
dotenv.config();
import mongoose, { Schema } from "mongoose";
mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const ContentSchema = new Schema({
  title: String,
  link: String,
  type: {
    type: String,
    enum: ["twitter", "youtube"],
    required: true,
  },
  tags: [{ type: mongoose.Types.ObjectId, ref: "Tag" }],
  userId: { type: mongoose.Types.ObjectId, ref: "User", required: true },
});

const LinkSchema = new Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

export const UserModel = mongoose.model("User", UserSchema);
export const ContentModel = mongoose.model("Content", ContentSchema);
export const LinkModel = mongoose.model("Link", LinkSchema);
