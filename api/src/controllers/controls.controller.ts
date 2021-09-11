import { Request, Response } from "express"
import { client } from "../prisma/client";
import { ERROR_AUTORIZACAO, ERROR_MESSAGE, SUCCESS_MESSAGE } from "../utils/message"

class controlsController {

  async relatorio(request: Request, response: Response) {

    const data = await client.control.findMany({ where: { OR: { data_abastecimento: "2121-09-11" } }, include: { User: true } });
    return response.json({ err: false, data, message: SUCCESS_MESSAGE() })

  }

  async all(request: Request, response: Response) {
    try {
      const data = await client.control.findMany();
      return response.json({ err: false, data, message: SUCCESS_MESSAGE() })
    } catch (error) {
      return response.json({ err: true, error, message: ERROR_MESSAGE() })
    }
  }

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
          userId: request.userId
        },
      })
      return response.json({ err: false, data, message: SUCCESS_MESSAGE() })

    } catch (error) {
      return response.json({ err: true, error, message: ERROR_MESSAGE() })
    }
  }

  async getById(request: Request, response: Response) {
    try {
      const data = await client.control.findUnique({ where: { id: request.params.id } })
      return response.json({ err: false, data, message: SUCCESS_MESSAGE() })
    } catch (error) {
      return response.json({ err: true, error, message: ERROR_MESSAGE() })
    }

  }

  async update(request: Request, response: Response) {

    const idUser = await (await client.control.findUnique({ where: { id: request.params.id }, select: { userId: true } })).userId;
    if (request.userId != idUser) return response.json({ err: true, error: null, message: ERROR_AUTORIZACAO() })

    const { id } = request.params;
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
      const data = await client.control.update({
        where: { id: request.params.id },
        data: {
          data_abastecimento,
          horario,
          numero_abastecimento,
          placa,
          unidade,
          km,
          litros,
          valor,
          userId: request.userId
        },
      });
      return response.json({ err: false, data, message: SUCCESS_MESSAGE() })
    } catch (error) {
      return response.json({ err: true, error, message: ERROR_MESSAGE() })
    }

  }

  async delete(request: Request, response: Response) {

    const idUser = await (await client.control.findUnique({ where: { id: request.params.id }, select: { userId: true } })).userId;
    if (request.userId != idUser) return response.json({ err: true, error: null, message: ERROR_AUTORIZACAO() })
    try {
      const data = await client.control.delete({ where: { id: request.params.id } });
      return response.json({ err: false, data, message: SUCCESS_MESSAGE() })
    } catch (error) {
      return response.json({ err: true, error, message: ERROR_MESSAGE() })
    }

  }

}

export default new controlsController();