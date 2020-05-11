import mongoose from "mongoose";


export interface IProveedor extends mongoose.Document { 
    name: string;
    correo:string;
    fecha:string;
    direccion:string;
    telefono:number;
    sexo:string;
    tipo:string;

}

const ProveedorSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    name: { type: String, required: true },
    correo:{type:String,required:true},
    fecha:{type:String,required:true},
    direccion: { type: String, required: false },
    telefono:{type:Number,required:true},
    sexo:{type:String,required:true},
    tipo:{type:String,required:true}
});

export const Proveedor = mongoose.model<IProveedor>("Proveedor", ProveedorSchema);
