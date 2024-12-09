import conn from "../server/conn.mjs";

const userSchema = new conn.Schema({
  nama: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: ["admin", "superadmin", "teknisi"], // Contoh enum untuk status
    default: "teknisi",
  },
  last_online: {
    type: Date,
  },
});

const User = conn.model("User", userSchema);
export default User;
