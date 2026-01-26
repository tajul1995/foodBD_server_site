import app from "./app";
import { prisma } from "./lib/prisma";
const port=process.env.PORT

async function server(){
    try {
        
        await prisma.$connect()
        console.log('prisma is connected to the data base correctly')
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })

    } catch (error) {
        console.log(error)
        await prisma.$disconnect()
        process.exit(1)
    }
}
server()