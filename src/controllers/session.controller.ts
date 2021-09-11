import { request, Request, Response } from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { client } from "../prisma/client";

class sessionController {

  async signin(request: Request, response: Response) {
    const { cpf, password } = request.body;
    try {
      const user = await client.user.findFirst({
        where: { cpf: cpf },
        select: { cpf: true, password: true, id: true }
      });
      if (user != null) {
        const password_ok = bcrypt.compareSync(password, user.password);
        if (!password_ok) {
          return response.json({ error: "CPF ou senha inválida." });
        } else {
          const token = jwt.sign({ data: user.id }, process.env.JWT, { expiresIn: '8h' });
          response.json({ token })
        }
      } else {
        return response.json({ error: "CPF ou senha inválida." });
      }
    } catch (error) {
      response.json({ error: error })
    }
  }
  async signup(request: Request, response: Response) {
    const { name, cpf, password } = request.body;
    try {
      const salt = bcrypt.genSaltSync(10);
      const password_hash = bcrypt.hashSync(password, salt);
      const user = await client.user.create({ data: { name, cpf, password: password_hash } });
      return response.json({ data: user })
    } catch (error) {
      return response.json({ error })
    }
  }


}

export default new sessionController();