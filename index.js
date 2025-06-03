const express= require('express')
const userRoute= require('./routes/Userroutes')
const itemRoute= require('./routes/Itemroutes')
const billRoute= require('./routes/Billroutes')

const app= express()

const bodyParser = require('body-parser');

const cors = require('cors');


const port=3000;

app.use(cors())

//Use body-parser middleware to parse JSON request bodies

app.use(bodyParser.json());



app.use('/userapi',userRoute);
app.use('/itemapi',itemRoute)
app.use('/billapi',billRoute)


app.listen(port,()=>{
    try{
        console.log("connected")

    }catch(error)
    { 
           console.log(error)
    }
})

app.get('/health',(req,res)=>{
    res.sendStatus(200);
});