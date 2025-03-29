import { Request,Response } from "express";
import {prisma} from "../config/prisma";
import { todoschema } from "../models/todo";
import { AuthRequest } from "../middleware/types";


export const createTodo=async(req:AuthRequest,res:Response)=>{
    const {title,description}=req.body;
    console.log(req.body)
    try{
        const response=todoschema.safeParse(req.body)
        if(!response.success){
            return res.status(411).json({msg:"INCORRECT TODO DATA TYPES"})
        }
        if (!req.user || !req.user.id) {
            return res.status(401).json({ msg: "UNAUTHORIZED: No User ID Found" });
        }
        const todo=await prisma.todo.create({
            data:{
                title,
                description,
                userId:req.user.id  //jwt when sign the token it stores the id in aobject so wehen it is decoded it is stored in req.user like this {id:1,iat:2222,eat:333}
            }
        })
        return res.status(200).json({msg:"TODO CREATED SUCCESFULLY",todo})
  } catch (error) {
    res.status(400).json({ msg:"ERROR IN CREATING  TOOD" });
  }
}

export const getTodo=async(req:AuthRequest,res:Response)=>{
    if (!req.user || !req.user.id) {
        return res.status(401).json({ msg: "UNAUTHORIZED: No User ID Found" });
    }//CHECKS IF USER EXIST THEN ONLY MOVES AHEAD
    try{
        const todo=await prisma.todo.findMany({
            where:{userId:req.user.id}
        })
          return res.status(200).json({msg:"TODO FETCHED SUCCESFULLY",todo})
    }
    catch (error) {
        res.status(400).json({ msg:"ERROR IN FETCHING  TOOD" });
      }
}


export const updateTodo=async(req:AuthRequest,res:Response)=>{
    const{title,description}=req.body;
    const{id}=req.params


 /**✅ RESTful API Best Practice → id represents a specific resource, so it belongs in the URL (/api/todos/:id) instead of the request body.
✅ Security → Prevents users from modifying other people's todos by changing the id in the body.
✅ Avoids Redundancy → id is already in the URL; sending it in the body is unnecessary.
✅ Consistent API Design → Keeps requests clean and predictable, making your API easier to use.
🚀 Best Practice: Use req.params.id, convert it to a number, and validate it properly. */



    const todoID=parseInt(id,10)
    if(isNaN(todoID)){
        return res.status(400).json({msg:"INVALID ID TYPE "})
    }
    
        const response=todoschema.safeParse(req.body);
        if(!response.success){
            return res.status(411).json({msg:"INCORRECT TODO DATA TYPES"})
        }
        const existingtodo=await prisma.todo.findUnique({
            where:{id:todoID}
        })

        if(!existingtodo){
            return res.status(411).json({msg:"TODO DOES NOT EXIST"})
        }
        try{
                  const todo=await prisma.todo.update({
                    where:{id:todoID},
                    data:{title,description}
                  })
                       return res.status(200).json({msg:"TODO UPDATED SUCCESFULLY",todo})
        }
        catch{
                 return res.status(411).json({msg:"ERROR IN UPDATING TODO"})
        }

    }
