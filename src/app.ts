import express,{Application} from "express";
import bodyParcer from "body-parser";
import cors from "cors";
import {mainController} from "./controllers/main.controller";
import mongoose from "mongoose";
import {config} from "dotenv";
import {resolve} from "path";
import {Proveedorcontroller} from "./controllers/proveedor.controllers";
config({path:resolve(__dirname,"../.env")});

 class App{
      public app:Application;
      public maincontroller :mainController;
      public proveedorController :Proveedorcontroller;
      constructor(){
          this.app =express();
          this.setConfig();
          this.setmongodbconfig();
          this.maincontroller = new mainController(this.app);
          this.proveedorController = new Proveedorcontroller(this.app);

      }
     private setConfig (){
         this.app.use(bodyParcer.json({limit:"50 mb"}));
        this.app.use(bodyParcer.urlencoded({limit:"50mb",extended:true}));
        this.app.use(cors());
     } 
     private setmongodbconfig(){
         mongoose.Promise =global.Promise;
         mongoose.connect(process.env.MongoURI!,{useNewUrlParser:true,useUnifiedTopology:true},(err:any)=>{
             if(err){
                 console.log(err.message);
             }else{
                 console.log("conexion exitosa");
             }
         })
     }
 }
 export default new App().app;