import express from 'express'
import cors from 'cors'
import { conn } from './db.js'

const app=express()

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("si puta?")
})

app.post("/usuarios",(req,res)=>{
        const{nombre,edad}=req.body
        const query='INSERT INTO usuarios SET ?'
        const value={nombre:nombre, edad:edad}
        const guardarUsuario= conn.query(query,value,(error,result)=>{
            if(error){
                return res.sendStatus(400)
            }
            return res.sendStatus(204)
        }) 
})

app.listen(4000,()=>console.log("Servidor corriendo en el puerto 4000"))