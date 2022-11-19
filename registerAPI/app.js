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
const mongoUrl = 'mongodb+srv://earny4302:earny4302@cluster0.ttnfdmp.mongodb.net/GMH?retryWrites=true&w=majority';
let db;

app.use(morgan('common'))
app.use(bodyParsel.urlencoded({extended:true}));
app.use(bodyParsel.json());
app.use(cors());


app.get('/',(req,res)=>{
    res.send('Greeting from Express');
})

app.get('/getlist',(req,res)=>{
    db.collection('Patient_Personal').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})

app.post('/newEntry',(req,res) =>{
    db.collection('Patient_Personal').insert(req.body, (err,result) => {
        if(err) throw err;
        res.send('Entry Completed')

    })
})

app.patch('/newConsult/:id',(req,res) => {
    let patid = req.params.id;
    db.collection('Patient_Personal').update(
        {pid:patid},
        {
            $push:{
                "history":
                    {
                        "hid": req.body.hid,
                        "date": req.body.date,
                        "time": req.body.time,
                        "doctorName": req.body.doctorName,
                        "details": {
                            "symptoms": req.body.symptoms,
                            "prescription": req.body.prescription,
                            "diagnosis": req.body.diagnosis,
                            "surgeries": req.body.surgeries,
                            "temp": req.body.temp,
                            "pulse": req.body.pulse,
                            "BP": req.body.bp,
                            "SPO2": req.body.spoo
                        }
                    }
               
            }
        },(err,result) => {
            if(err) throw err;
            res.send('ADDED')
        }
    )
})

app.get('/getdetails/:id', (req, res) => {
    let id = req.params.id
    db.collection('Patient_Personal').find({pid:id}).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


// create connection with db

MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log(`Error While Connecting`);
    db = client.db('GMH')
    app.listen(port,() => {
        console.log(`listening on port ${port}`);
    })
})
