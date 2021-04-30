var {Model, DataTypes} = require("sequelize");
var sequelize = require("../database");
class Student extends Model{}
Student.init({
    customer_id:{
        type:DataTypes.INTEGER
    },
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    student_first_name:{
        type:DataTypes.STRING
    },
    student_last_name:{
        type:DataTypes.STRING
    },
    student_phone_number:{
        type:DataTypes.STRING
    },
    student_email:{
        type:DataTypes.STRING
    },
    student_password:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:'student_tables',
    modelName:'Student'
});
module.exports = Student;