import dotenv from "dotenv"
dotenv.config()
import app from "./app.js"

const port = process.env.PORT || 4004

app.listen(port, ()=>{
    console.log(`server on air at port: ${port}`)
})