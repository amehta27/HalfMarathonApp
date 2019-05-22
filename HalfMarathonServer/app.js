const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
const bodyParser = require('body-parser')
const PORT = 8080

app.use(bodyParser.json())
app.use(cors())

let users = [{firstname:'Alpa', lastname:'Mehta', emailaddress:'apmk_27@yahoo.com', 
streetaddress:'6827 Richmond Ave'}]

app.get('/api/userprofiles',(req,res)=> {
    models.UserProfile.findAll()
    .then((userprofiles) => res.json(userprofiles))
   
    
 } )


app.post('/api/userprofiles',(req,res)=> {
  console.log(req.body)

    let firstname = req.body.firstname
    // console.log(firstname)
    let lastname= req.body.lastname
    let emailaddress = req.body.emailaddress
    let streetaddress = req.body.streetaddress
    let city = req.body.city
    let state = req.body.state
    let zip = req.body.zip
    let cellphone = req.body.cellphone
    let gender = req.body.gender
    let dateofbirth = req.body.dateofbirth
    let colorgroup = req.body.colorgroup
    
  
    let userprofile = models.UserProfile.build({
      firstname : firstname,
      lastname : lastname,
      emailaddress : emailaddress,
      streetaddress : streetaddress,
      city : city,
      state : state,
      zipcode : zip,
      cellphone : cellphone,
      gender : gender,
      dateofbirth : dateofbirth,
      colorgroup : colorgroup

     })
  
     userprofile.save().then((savedBook) => {
       if (savedBook) {
         res.json({success: true})
       } else {
        res.json({success:false, message : 'Error saving Book'})
       }
       
     
  })
  
  })  














app.listen(PORT,() => {
    console.log('Server is running...')
  })