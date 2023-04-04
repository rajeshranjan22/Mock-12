const express = require("express")
const { connection } = require("./config/db")
const { Authenticate } = require("./middlewares/Authenticate.middleware")
const { userRouter } = require("./route/User.route")

const cors = require("cors")

     const app = express()

     app.use(cors())

     app.use(express.json())
  
      app.use("/users", userRouter)

      app.use(Authenticate)

     app.listen(4545, async() =>{

        try{   
            await connection
            console.log("Server is running on port 4545")
        }catch(err){
            console.log(err)
        }

     })
