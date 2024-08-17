 import express from 'express';
 import { PrismaClient } from '@prisma/client'

 const prisma = new PrismaClient()

 const app = express();
 app.use(express.json());

 const users = []


 app.put("/usuarios/:id", async (req, res)=>{
 
 console.log (req)
  //  await prisma.user.update({

  //   where: {
  //     id: req.params.id,
  //   },
  //   data: {
  //     name: req.body.name,
  //     email: req.body.email,
  //     age: req.body.age,
  //     },
  //   })

   res.status(201).json(req.body);
 });

 app.get("/usuarios", async (req, res)=>{
   const users = await prisma.user.findMany()
   res.status (200).json (users);
 });
    
//  app.put("/usuarios", (req, res)=>{

//  });
//  app.delete("/usuarios", (req, res)=>{
  
//  });

 app.listen(3000, ()=>{});