import { Router } from "express";

const router = new Router();

const studentList=
[
    { id: 1, name: "yasmeen" },
    { id: 2, name: "ahmed"},
    { id: 3, name: "yasser"},
    { id: 4, name: "abeer" },
    { id: 5, name: "Noah"}
]

router.get("/",(req,res)=>{
  res.render("students",{layout:false , studentList})
});

export default router;