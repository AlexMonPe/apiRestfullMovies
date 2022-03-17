import express from "express";
const router = express.Router();
import {getRent, postRent } from "./controllerRent.js";

router.get("/", getRent);
router.post("/", postRent);

export default router;