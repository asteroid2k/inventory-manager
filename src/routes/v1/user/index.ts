import { PrismaClient } from "@prisma/client";
import { Request, Response, Router } from "express";

const router: Router = Router();
const prisma = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ users });
});

export default router;
