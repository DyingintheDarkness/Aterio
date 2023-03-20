import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { validateForm } from "../../../validation/validation";

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
  // Get the data from the request body
  let { name, contact, membersCount, time } = req.body;
  if (!name || !contact || !membersCount || !time) {
    return res.status(400).json({ error: "All fields are required" });
  }
  let [isDataValid,_] = validateForm(req.body);
  if (isDataValid) {
    return res.status(400).json({ error: "Invalid data" });
  }
  try {
    await prisma.reservation.create({
      data: {
        name: name,
        contact: contact,
        membersCount: membersCount,
        time: time,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ message: "Reservation Saved" });
}
