import{Request,Response} from "express";
import {Proveedor, IProveedor} from "../Modelos/proveedor.Modelos";
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
    public getid(req:Request,res:Response){
        Proveedor.findById(req.params.id,(err:Error,proveedor:IProveedor)=>{
            if(err){
                res.status(401).send(err); 
            }
            res.status(200).json(proveedor? proveedor:{});
        });
    }
    public actualizar(req:Request,res:Response){
        Proveedor.findByIdAndUpdate(req.params.id,req.body,(err:Error,proveedor:any)=>{
          if(err){
              res.status(401).send(err);
          }
          res.status(200).json(proveedor? {"Updated":true}: {"Updated":false});
        });
    }

}