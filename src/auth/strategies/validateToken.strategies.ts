import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';

export const validateToken = async (req: Request, res: Response, next: NextFunction ) => {
  try {
    const headerToken = req.headers['authorization'];
    if(headerToken && headerToken.startsWith('Bearer ')) {
      const bearerToken = headerToken.slice(7);
      jsonwebtoken.verify(bearerToken, process.env.JWT_SECRET || '1234');
      next();
    } else {
      throw 'Token not valid'
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}