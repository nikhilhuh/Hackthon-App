import express, { Request, Response } from "express";
import cors from "cors";
import { demoModel } from "../models/dbmodels/demoModel";
const router = express.Router();

router.get("/get-demo", async (req: Request, res: Response) => {
  try {
    const data = await demoModel.find({});
    res.status(200).json(data);
  } catch (err) {
    console.error("Error fetching demo data:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
export { router };
