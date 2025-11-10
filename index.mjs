import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./loadEnvironment.mjs";
import "express-async-errors";
import authenticateJWT from "./middlewares/auth.mjs";
import routeLogin from "./routes/login.mjs";
import routeUser from "./routes/user.mjs";
import routeServis from "./routes/servis.mjs";
import routeSerialNumber from "./routes/serialnumber.mjs";
import routeMedia from "./routes/media.mjs";
import routeSparepart from "./routes/sparepart.mjs";
import routeChat from "./routes/chat.mjs";
import routeTChat from "./routes/tchat.mjs";
import routeTServis from "./routes/tservis.mjs";
import routeProgress from "./routes/progress.mjs";
import routeStatus from "./routes/status.mjs";
import routePembayaran from "./routes/pembayaran.mjs";

const PORT = process.env.PORT;
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');


const app = express();

app.use(cookieParser()); // Tambahkan ini untuk mengurai cookies
app.use(cors({origin:allowedOrigins,credentials:true}));
// app.use(cors({origin:allowedOrigins,credentials:true}));
app.use(express.json());

app.use((err, _req, res, next) => {
  res.status(500).send("Kesalahan server: " + err);
});

app.use("/login", routeLogin);
app.use("/user", authenticateJWT, routeUser);
app.use("/servis", authenticateJWT, routeServis);
app.use("/serialnumber", authenticateJWT, routeSerialNumber);
app.use("/media", authenticateJWT, routeMedia);
app.use("/sparepart", authenticateJWT, routeSparepart);
app.use("/chat", authenticateJWT, routeChat);
app.use("/pembayaran", authenticateJWT, routePembayaran);
app.use("/progress", authenticateJWT, routeProgress);
app.use("/status", authenticateJWT, routeStatus);
app.use("/tchat", authenticateJWT, routeTChat);
app.use("/tservis", authenticateJWT, routeTServis);
app.get("/", (_req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
