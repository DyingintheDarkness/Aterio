import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { generateToken } from "../../../validation/validation";

// Create a new Prisma Client
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  let password: string = req.body.password;
  if (!password) {
    return res.status(400).json({ error: "Bad Request" });
  }
  // Check if the password is correct
  if (password !== process.env.PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  // assign the token to the response
  res.setHeader("x-token", generateToken(password));
  res.setHeader("Access-Control-Expose-Headers", "x-token");

  return res.status(200).json({ message: "Reservation Saved" });
}
