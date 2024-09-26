import express from "express";
import {
  login,
  checkAuth,
  signup,
  logout,
} from "../controller/user.controller.js";
import { verifySessionToken } from "../middleware/verifySessionToken.js";

const router = express.Router();

router.get("/check-auth", verifySessionToken, checkAuth);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
