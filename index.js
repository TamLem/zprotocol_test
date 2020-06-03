const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./util/database.js');
const usersRouter = require('./routes/api/users')


const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())


app.use('/users', usersRouter)

app.use(express.static(path.join(__dirname) + '/client/public'));

const port = 3000;

sequelize.sync()
.then( () => {
    app.listen( port, () => console.log(`Server started on Port ${port}`));
})
