const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const User = require('../../models/users.js')



router.use('/add', (req, res) => {
    const newUser = req.body;
    console.log(newUser)
    const user = User.create( {name:newUser.name, surname:newUser.surname, birthDate:newUser.birthDate,  email:newUser.email, password: newUser.password  } )
    .then( result => console.log(result))
    .catch( err => console.log(err)) 
})

module.exports = router; 