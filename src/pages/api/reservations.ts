import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// Create a new Prisma Client
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const date = req.query.date as string | undefined;
  const archived = req.query.archived as string | undefined;

  let createdAt = date
    ? {
        gte: new Date(new Date(date).setHours(0, 0, 0, 0)),
        lte: new Date(new Date(date).setHours(23, 59, 59, 999)),
      }
    : {
        gte: new Date(new Date().setHours(0, 0, 0, 0)),
        lte: new Date(new Date().setHours(23, 59, 59, 999)),
      };
  let data = [];
  try {
    // get only the reservations that are not archived and created today
    data = await prisma.reservation.findMany({
      where: {
        archived: date && !archived ? true: archived === "true" ? undefined : false,
        createdAt: createdAt,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
    console.log(data);
  } catch (err) {
    console.error(err);
    return res.status(400).send("No Reservations Found");
  }

  return res.status(200).json(data);
}
