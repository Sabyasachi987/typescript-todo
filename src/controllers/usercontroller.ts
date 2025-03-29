import { Request,Response } from "express";
import {prisma} from "../config/prisma";
import { userschema } from "../models/users";
import { error } from "console";
import bcrypt from "bcryptjs"
import {env} from "../config/env"
import jwt from "jsonwebtoken"

export const signup=async(req:Request,res:Response)=>{
    const details=req.body;
    try{
        const response=userschema.safeParse(details)
        if(!response.success){
            return res.status(411).json({msg:"INCORRECT DATA TYPES"})
        }
        const existinguser=await prisma.user.findUnique({
            where:{username:details.username}
        })
        if(existinguser){
            return res.status(411).json({msg:"USER ALREADY EXIST"})
        }

        const hashedpassword=await bcrypt.hash(details.password,10)
        const user=await prisma.user.create({
            data:{
                username:details.username,
                password:hashedpassword
            }
        })
        const token=jwt.sign({id:user.id},env.JWT_SECRET,{expiresIn:"1h"})//THE FIRST ARGUEMENT IN A JWT SIGN IS AN OBJECT THE SECOND IS SECRETKEY AND THIRD IS EXPIRATION TIME {ID:1,IAT:2222,EAT;333}
        return res.status(200).json({msg:"USER CREATED IN DATABASE",token})
    }
    catch{
        return res.status(4!!).json({msg:"ERROR IN CREATING USER"})
    }

}

export const signin=async (req:Request,res:Response)=>{
    const details=req.body;
    const response=userschema.safeParse(details)
    if(!response.success){
        return res.status(411).json({error:"INAVLID CREDENTIALS"})
    }
    try{
      
        const existinguser=await prisma.user.findUnique({
            where:{username:details.username}
        })
        if(!existinguser){
            return res.status(411).json({eror:"USER DOES NOT EXIST"})
        }
        else{
            const passwordvalid=await bcrypt.compare(details.password,existinguser.password)
            if(!passwordvalid){
                return res.status(411).json({msg:"INCORRECT PASSWORD"})
            }
           
            const token=jwt.sign({id:existinguser.id},env.JWT_SECRET,{expiresIn:"1h"})  

            //The warning disappeared because you changed the code structure, ensuring that existinguser is always checked before being used, making TypeScript recognize it as safe. 🚀
            //return statement above token doesnt execute it properly and it shows existinguser is  null problem
            return res.status(200).json({msg:"LOGIN SUCCESFULL",token})
        }
    }
    catch{
        return res.status(411).json({error:"ERROR IN SIGNING USER"})
    }
}