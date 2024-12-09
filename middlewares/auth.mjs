import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "SET KEDALAM ENVIROMENT JAUH LEBIH BAIK";


const authenticateJWT = (req, res, next) => {
    const token = req.cookies.kunci_rahasia;//ambil cookie
  
    if (token) {
      jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
          return res.sendStatus(403); // Forbidden
        }
        req.user = user; // Simpan informasi pengguna dalam request
        next();
      });
    } else {
      res.sendStatus(401); // Unauthorized
    }
  };
  
  export default authenticateJWT