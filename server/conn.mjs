import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "50";
let conn;

try {
  conn = await mongoose.connect(connectionString);
} catch (e) {
  console.error(e);
}

export default conn;