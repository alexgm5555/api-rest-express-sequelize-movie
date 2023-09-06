import { Request, Response } from 'express';
import bycrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import {v4 as uuid} from 'uuid';

import { User } from './auth.model';
import { JwtPayload } from './interfaces';


const getJwToken = (payload: JwtPayload) =>{
  return jsonwebtoken.sign(
    {...payload},
    process.env.JWT_SECRET || '1234'
  );
}

export const createUser = async (req: Request, res:Response ) => {
  try {
    const { email, password } = req.body;
    const userExist = await  User.findOne({where: {email: email}});

    if(userExist) throw "User already exist";

    const id_uuid = uuid();

    const response = User.create({
      id: id_uuid,
      email: email,
      password: await bycrypt.hash(password, 10)
    })

    await response;

    console.log(`User ${email} was Registered`);
    
    res.json({
      token: getJwToken({id: id_uuid})
    });
  
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}

export const LoginUser = async (req: Request, res:Response ) => {
  try {
    const { email, password } = req.body;

    const userExist: any = await  User.findOne({where: {email}});
    if(!userExist) throw "User not exist";

    const validatePassword = await bycrypt.compare(password, userExist.password);
    if(!validatePassword) throw "'Credential are not valid!";
  
    console.log(`User ${email} was logged`);
    
    res.json({
      token: getJwToken({id: userExist.id})
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: error
    })
  }
}
