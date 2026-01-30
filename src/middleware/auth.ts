import { Verification } from './../../generated/prisma/client';

import { NextFunction, Request, Response } from "express";
import {auth as betterAuth} from "../lib/auth"

declare global{
    namespace Express{
        interface Request{
            user?:{
                id:string,
                name:string,
                email:string,
                role:string
            }
        }
    }
}



export enum UserRole{
    CUSTOMER="CUSTOMER",
  PROVIDER="PROVIDER",
  ADMIN="ADMIN"
}

const auth=(...roles:string[])=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            const session = await betterAuth.api.getSession({
      headers:req.headers as any,
    })
     console.log("session",session)
     if(!session?.session){
        return res.status(401).json({
                    success: false,
                    message: "You are not authorized!"
                })
     }
     if(!session.user.email){
        return  res.status(404).json({
                success:true,
                message:'email is not verified'
            })
     }
     req.user={
        id:session?.user.id,
        name:session?.user.name,
        email:session?.user.email,
        role:session?.user.role as string
     }
     if(roles.length&&!roles.includes(req.user.role)){
        return  res.status(404).json({
                success:true,
                message:'unauthorizea access'
            })
     }
     next()
        } catch (error) {
            next(error)
        }
 }
 }

export default auth

 
