// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { prisma, Prisma } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { user } = req.body
    //const user: Prisma.UserCreateInput = JSON.parse(req.body)
    const savedUser = await prisma.user.create
  } catch (error) {

  }

  res.status(200).json({ name: 'John Doe' })
}
