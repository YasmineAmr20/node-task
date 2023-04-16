import express from "express";
import { engine } from 'express-handlebars';
import studentRouter from "./routes/studentRouter.js"
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.listen(1000);
// ------------------------------------------------------



app.use("/students",studentRouter);
// app.get("/users",(req,res)=>{
//          res.render("user",{layout:false , userList})
// });