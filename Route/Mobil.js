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
const burung = [
    {
        nama: "gagak",
        warna: "Putih",
        ukuran: "Sedang",
        habitat: "Kota dan pedesaan"
    },
    {
        nama: "Elang",
        warna: "Coklat",
        ukuran: "Besar",
        habitat: "Pegunungan"
    }
]

route.get("/",(req,res)=>{
    res.send(mobil);
})
route.get("/burung", (req, res) => {
    res.send(burung)
})
export default route;