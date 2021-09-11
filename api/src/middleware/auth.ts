import { Request, Response, NextFunction } from "express";
import { decode, verify } from "jsonwebtoken"

const Auth = (request: Request, response: Response, next: NextFunction) => {

  const authHeader = request.headers.authorization;
  if (!authHeader) return response.json({ message: "No token provided" });

  const [, token] = authHeader.split(" ");
  try {
    verify(token, process.env.JWT, (err, decoded) => {
      request.userId = decoded.data;
    })

    return next();
  } catch (error) {
    return response.json({ error: "token inválido." })
  }
}


export { Auth }