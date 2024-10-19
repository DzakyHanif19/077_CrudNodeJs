import express from 'express';
import bodyParser from 'body-parser';
import mobilRoute from "./Route/Mobil.js"
import userRoute from "./user.js"

const app = express();
const PORT = 8000;


app.get("/",(req,res)=>{
    console.log(['GET ROUTE']);
    res.send("Selamat Pagi");
})
app.use(bodyParser.json());
app.use("/mobil", mobilRoute)
app.use("/user", userRoute)
app.listen(PORT, ()=>
    console.log(
        `Server berjalan di port : http://localhost:${PORT}`));