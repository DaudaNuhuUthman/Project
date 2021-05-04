
const express =require ("express")
const cors= require ("cors")

const server = express()
const connectDB = require("./db")

const  router = require ("./route")
const port = 5000
server.use(cors())
server.use(express.json())
connectDB ()
server.use("/api/v1", router)
server.listen(port, ()=>{console.log(`server is running on port ${port}`)
    
})