//packages 
import express from "express"
import path from "path"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"



//utiles
import connectDB from "./config/db.js"

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',(req, res) => {
    res.send("Hello World");
})

app.listen(port, () => console.log(`Servidor corriendo en el puerto: ${port}`));



