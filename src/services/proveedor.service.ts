import{Request,Response} from "express";
import {Proveedor} from "../Modelos/proveedor.Modelos";
import { MongooseDocument } from "mongoose";
 
export class ProveedorService{
    
    public getall(req:Request,res:Response){
         Proveedor.find({},(err:Error,proveedores:MongooseDocument)=>{
             if(err){
                 res.status(401).send(err);
             }
             res.status(200).json(proveedores);
         });
    }
}