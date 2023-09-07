import { Request, Response } from 'express';

export const createMovie = async (req: Request, res:Response ) => {
  // try {
    
  
  // } catch (error) {
  //   console.log(error);
  //   return res.status(400).json({
  //     message: error
  //   })
  // }
  return res.status(400).json({
    message: 'logeado Movies'
  })
}
