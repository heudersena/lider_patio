import { Request, Response } from "express"
import { client } from "../prisma/client"


class users {
  async all(request: Request, response: Response) {
    try {
      const data = await client.user.findMany();
      return response.json({ data })
    } catch (error) {
      return response.json({ error })
    }
  }
}


export default new users()