import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.mjs";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "mytoken";
const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ errCode: 444 });
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "1h" });

      //tambahan keamanan
      res.cookie("kunci_rahasia", token, {
        httpOnly: true, // Mencegah akses melalui JavaScript
        secure: process.env.NODE_ENV === "production", // Hanya kirim melalui HTTPS di production
        sameSite: "Strict", // Mencegah pengiriman cookie lintas situs
        maxAge: 3600000, // Cookie berlaku selama 1 jam
      });

      return res.json({ pesan: "Berhasil login" });
    } else {
      // If password is incorrect
      return res.json({ errCode: 440 });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }
});

router.get("/check-status", (req, res) => {
  // res.set('Access-Control-Allow-Credentials',true);
  const token = req.cookies.kunci_rahasia; // Ambil token dari cookie

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.json({ errCode: 440 });
    }

    // Token valid, kembalikan informasi pengguna atau status
    return res.json({ message: "User is logged in", data: decoded });
  });
});

router.post("/logout", (req, res) => {
  // Clear the JWT cookie
  res.clearCookie("kunci_rahasia", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Secure flag for production
    sameSite: "Strict",
  });

  res.json({ message: "Logged out successfully" });
});

export default router;
