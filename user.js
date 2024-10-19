import express from "express";

const route = express.Router();

const user =[
    {
    nama:"dzaky",
    umur:"19",
    alamat:"ykc",
    status:"single",
    },
    {
    nama:"alpan",
    umur:"20",
    alamat:"mksr",
    status:"taken",
    },
];

route.get("/",(req,res)=>{
    res.send(user);
});
export default route;