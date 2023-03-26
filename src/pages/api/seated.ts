import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let {
    id,
    seated,
  }: {
    id: string;
    seated: boolean | undefined | null;
  } = req.body;
  if (!id || seated === undefined || seated === null) {
    return res.status(400).json({ error: "Bad Request" });
  }

  try {
    await prisma.reservation.update({
      where: {
        id: id,
      },
      data: {
        seated: seated,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }

  return res.status(200).json({ message: "Reservation Saved" });
}
