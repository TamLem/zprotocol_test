const Sequelize = require ('sequelize');

const sequelize = new Sequelize( 'schema', 'user', 'password',  {
        host: 'localhost',
        dialect: 'mysql'
})


async function authenticate () {
    try {
       await sequelize.authenticate();
       console.log('working')
   } catch (err) {
       console.log(err)
   }
}


module.exports = sequelize;
