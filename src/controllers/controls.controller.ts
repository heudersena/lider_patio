import { Request, Response } from "express"
import { client } from "../prisma/client";

class controlsController {

  async all(request: Request, response: Response) {
    const data = await client.control.findMany();
    return response.json({ data })
  }
  async getById(request: Request, response: Response) { }
  async create(request: Request, response: Response) {
    const {
      data_abastecimento,
      horario,
      numero_abastecimento,
      placa,
      unidade,
      km,
      litros,
      valor
    } = request.body;

    try {
      const data = await client.control.create({
        data: {
          data_abastecimento,
          horario,
          numero_abastecimento,
          placa,
          unidade,
          km,
          litros,
          valor,
          userId: Number(request.userId)
        },
      })
      response.json({ data })

    } catch (error) {
      response.json({ error })
    }
  }
  async update(request: Request, response: Response) { }
  async delete(request: Request, response: Response) { }

}

export default new controlsController();