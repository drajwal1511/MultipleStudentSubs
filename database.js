const {Sequelize} = require("sequelize");
const sequelize = new Sequelize('Test_6','admin','admin1234',{
    host:'oyesters-db-1.clcmspyxrtn3.ap-south-1.rds.amazonaws.com',
    dialect:'mysql'
});
 module.exports = sequelize;