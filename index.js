const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const Concert = require('./models/concert')
const DB_url ='mongodb+srv://dbUser:Webcourses101@clusterclass101-um6ne.mongodb.net/test?retryWrites=true&w=majority'
//brought in Concert require for model path in mongo
const mongoose= require('mongoose')
//created body parser code for json



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true } ));
const port = 3000;
let concerts = require('./concerts')
//console.log(concerts);
 
app.get('/concerts',(req,res)=>{
    console.log('concerts/')
    res.json(concerts  )

});   
app.post('/concerts',async (req, res)=>{
    const newConcert = new Concert ({
        id: req.body.id,
        name:req.body.name, 
        place:req.body.place
    });

//     console.log(newConcert); ..............to test in mongo
//res.send('Got it!')
    try{
       const added = await newConcert.save();
       res.json(added)
    }catch(err){
        res.send(err.message)

    }
  });


/*  app.get('/concerts/:id', (req,res)=>{}
 
 //    console.log(req.params.place)  (taken out for mongo functionality)
//     res.json(concerts[req.params.id])

 //    let concert = concerts.filter(concert =>concert.id== req.params.id)
  //1   let concert = concerts.filter(concert =>concert.place.toLowerCase()== req.params.place.toLowerCase())
     //define the variable
 //2    if (concert && concert.length) {
 //        res.json(concert)
 //    }
 //3   else{
//4        res.send("there is no concert with this place")
//    }
//  });   taking out to install new mongo functionality

 
app.get('/', (req, res)=>{
    console.log('route/')
    res.send('Hello from second Try File!')
});
app.get('/concerts_tonight', (req, res) =>{
    console.log('route/concerts_tonight!')
 //   res.send('Enclosed is a list of <h1>Happenings Around  Town Tonight</h1>')
      res.json(concerts)
});

// created concerts.push(req.body)
//first added to postman post then get and should should

app.post('/concerts', (req, res)=>{
 //   console.log('route/')
    concerts.push(req.body)
    res.send('New event listed')
 //   console.log(req.body )
});

app.delete('/concerts/:id', (req,res)=>{
  //  console.log(req.params.place)
    
    let id = req.params.id
    concerts=concerts.filter(concert => concert.id !=id)
    console.log(id)
    res.json(concerts)  
});

app.put('/concerts/',(req,res)=>{
    let concertupdate = req.body
    concerts=concerts.filter(concert =>{
        if (concertupdate.id==concert.id){
            concert.name = concertupdate.name
            concert.place = concertupdate.place

        }
        return concert;
    } )
    
    res.json(concerts)
});
*/
//connect with mongoose and constant ...can look up mongoose.connect for instructions
mongoose.connect(DB_url, {useNewUrlParser : true})

const DB = mongoose.connection
DB.on('error', (error) => {
    console.error(error)
});
DB.on('open', ()=>{
    console.log("connected to DB")
});


app.listen(port, () =>{
    console.log('server has started on port: ' + port);


})

 //This is the last nodejs class in person until coronavirus disappears!
 

 

