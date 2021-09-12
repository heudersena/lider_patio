import { request, Request, Response } from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { client } from "../prisma/client";
import { ERROR_LOGIN, ERROR_MESSAGE, SUCCESS_MESSAGE } from "../utils/message";
class sessionController {

  async signin(request: Request, response: Response) {    
    const { cpf, password } = request.body;

    if(!cpf || !password) {
      return response.json({ err: true, error: null, message: ERROR_MESSAGE() })
    }

    try {
      const user = await client.user.findFirst({
        where: { cpf: cpf },
        select: { cpf: true, password: true, id: true }
      });
      if (user != null) {
        const password_ok = bcrypt.compareSync(password, user.password);
        if (!password_ok) {
          return response.json({ err: true, error: null, message: ERROR_LOGIN() })
        } else {
          const token = jwt.sign({ data: user.id }, process.env.JWT, { expiresIn: '8h' });
          return response.json({ err: false, token, message: SUCCESS_MESSAGE() })
        }
      } else {
        return response.json({ err: true, error: null, message: ERROR_LOGIN() })
      }
    } catch (error) {
      return response.json({ err: true, error: error, message: ERROR_MESSAGE() })
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