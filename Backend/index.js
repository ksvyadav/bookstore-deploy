import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import contactRoute from "./routes/contact.route.js";

const app = express();

app.use(
  cors({
    origin: "https://bookstore-deploy-eight.vercel.app",
    credentials: true,
  })
); // for running backend and frontend and render backend data to frontend
app.use(express.json()); // to parse all the data received from body.
app.use(cookieParser()); //for parsing cookies
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error :", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
