const { MongoClient } = require('mongodb')

const uri= "mongodb://localhost:27017"

const client =new MongoClient(uri)

async function run(){
    try{
        await client.connect()
        console.log("conectando com o banco")
    } catch(err){
        console.log(err)
    }
}
run()
module.exports = client