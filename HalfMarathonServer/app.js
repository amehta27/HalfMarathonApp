const express = require('express')
const app = express()
const cors = require('cors')
const models = require('./models')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const PORT = 8080
const jwt = require('jsonwebtoken')

app.use(bodyParser.json())
app.use(cors())

function authenticate(req,res, next) {

  let headers = req.headers["authorization"]
  // Bearer token
  // after the split
  // [0] Bearer
  // [1] token
  let token = headers.split(' ')[1]

  jwt.verify(token,'secret',(err, decoded) => {
    if(decoded) {
      if(decoded.username) {
        next()
      } else {
        res.status(401).json({message: 'Token invalid'})
      }
    } else {
      res.status(401).json({message: 'Token invalid'})
    }
  })

}

// let users = [{firstname:'Alpa', lastname:'Mehta', emailaddress:'apmk_27@yahoo.com', 
// streetaddress:'6827 Richmond Ave'}]

app.get


app.post('/login',(req, res) => {
  console.log(req.body)

  let emailaddress = req.body.emailaddress
  let password = req.body.password

  models.UserProfile.findOne({
    where : {
      emailaddress: emailaddress
    }
  }).then((user) => {
    console.log('found user')
    bcrypt.compare(password, user.password, function(err, result) {
      console.log(err)
      console.log(result)
      if(result) {
        console.log(result)
        jwt.sign({ emailaddress: emailaddress}, 'secret', function(err, token) {
          if(token) {
            console.log(token)
            res.json({token: token})
            
          } else {
            res.status(500).json({message: 'Unable to generate token'})
          }
        })
      }   
     })
  }) 

})



app.get('/api/userprofiles', (req,res)=> {
    models.UserProfile.findAll()
    .then((userprofiles) => res.json(userprofiles))
    //console.log(username)
    
 } )


app.post('/api/userprofiles',(req,res)=> {

    let firstname = req.body.firstname
    let password = req.body.password
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
    
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        let userprofile = models.UserProfile.build({
          firstname : firstname,
          lastname : lastname,
          password: hash,
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
    })
  
    
  
  })  
app.listen(PORT,() => {
    console.log('Server is running...')
  })