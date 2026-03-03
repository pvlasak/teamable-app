const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'company_db'
const collName = 'employees'


app.use(bodyParser.json())

// use /root and index.html is to be found in the dist directory where minified html file is saved  
app.use('/', express.static(__dirname + '/dist'))

app.get('/get-profile', async function(req, res){

    await client.connect()
    console.log('Connected successfully to database.')

    //initiate or get the database & collection
    const db = client.db(dbName)
    const collection = db.collection(collName)

    const result = await collection.findOne({id : 1})
    console.log(result)
    client.close()

    response = {}

    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
        }
    }

    res.send(response)
})

app.post('/update-profile', async function(req, res) {
    const payload = req.body
    console.log(payload)

    if (Object.keys(payload).length === 0) {
        res.send({error: "empty payload. Could not update user profile."})
    } else {
                 
        await client.connect()
        console.log("Connected successfully to database.")

        //initiate or get the database & collection
        const db = client.db(dbName)
        const collection = db.collection(collName)
        
        payload['id'] = 1
        const updatedValues = { $set: payload }
        await collection.updateOne({id: 1}, updatedValues, {upsert: true})
        client.close()
        res.status(200).send({info: "user profile data updated successfully."})  
    }
})

app.listen(3000, function () {
    console.log("app listening on port 3000.")
})