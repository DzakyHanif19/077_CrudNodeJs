import express from "express";

const route = express.Router();

const mobil =[
    {
    merk:"Toyota",
    model:"Avanza",
    warna:"Hitam",
    tahun:"2023",
    },
    {
    merk :"Porsce",
    model :"sport",
    warna :"Hitam",
    tahun :"2023",
    },
];

route.get("/",(req,res)=>{
    res.send(mobil);
});
export default route;