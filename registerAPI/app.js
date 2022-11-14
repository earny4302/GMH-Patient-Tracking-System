let express = require('express');
let app = express();
let dotenv = require('dotenv');
let morgan = require('morgan');
dotenv.config();
let port = process.env.PORT || 9200;
let mongo = require('mongodb');
let cors = require('cors')
let MongoClient = mongo.MongoClient;
let bodyParsel = require('body-parser')
const mongoUrl = 'mongodb+srv://trial321:trial321@atlascluster.kpsc2.mongodb.net/gmhData?retryWrites=true&w=majority';
let db;

app.use(morgan('common'))
app.use(bodyParsel.urlencoded({extended:true}));
app.use(bodyParsel.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Greeting from Express');
})

app.get('/getlist',(req,res)=>{
    db.collection('personalpat').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.post('/newEntry',(req,res) =>{
    db.collection('personalpat').insert(req.body, (err,result) => {
        if(err) throw err;
        res.send('Entry Completed')

    })
})

// create connection with db

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Error While Connecting`);
    db = client.db('gmhData')
    app.listen(port,() => {
        console.log(`listening on port ${port}`);
    })
})
