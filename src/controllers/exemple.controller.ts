import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class exempleController {

  async signin(request: Request, response: Response) { }
  async signup(request: Request, response: Response) { }

  async all(request: Request, response: Response) { }
  async getById(request: Request, response: Response) { }
  async create(request: Request, response: Response) { }
  async update(request: Request, response: Response) { }
  async delete(request: Request, response: Response) { }

}

export default new exempleController();