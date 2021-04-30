var {Model, DataTypes} = require("sequelize");
var sequelize = require("../database");
class StudentPayment extends Model{}
StudentPayment.init({
    customer_id:{
        type:DataTypes.INTEGER
    },
    student_id:{
        type:DataTypes.INTEGER,
    },
    purchase_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    session_id:{
        type:DataTypes.INTEGER,
    }
},{
    sequelize,
    tableName:'student_purchases',
    modelName:'StudentPayment'
});
module.exports = StudentPayment;