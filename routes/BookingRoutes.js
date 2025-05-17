import express from "express";
import { createBooking } from "../Controllers/BookingController.js";

const router = express.Router();

router.post('/', createBooking );

export default router;