const express = require('express')
const app = express();
const bodyParser = require('body-parser')
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
  app.get('/concerts/:place', (req,res)=>{
     console.log(req.params.place)
//     res.json(concerts[req.params.id])

 //    let concert = concerts.filter(concert =>concert.id== req.params.id)
     let concert = concerts.filter(concert =>concert.place.toLowerCase()== req.params.place.toLowerCase())
     //define the variable
     if (concert && concert.length) {
         res.json(concert)
     }
    else{
        res.send("there is no concert with this place")
    }
  });

 
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

app.listen(port, () =>{
    console.log('server has started on port: ' + port);

})

 

 

