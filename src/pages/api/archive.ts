import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Create a new Prisma Client
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests

  // Get the data from the request body
  let {
    id,
    archived,
  }: {
    id: string;
    archived: boolean | undefined | null;
  } = req.body;
  if (!id || archived === undefined || archived === null) {
    return res.status(400).json({ error: "Bad Request" });
  }

  try {
    await prisma.reservation.update({
      where: {
        id: id,
      },
      data: {
        archived: archived,
      },
    });
  } catch (err) {
    console.log(err);
  }

  return res.status(200).json({ message: "Reservation Saved" });
}
