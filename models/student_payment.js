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
    },
    purchase_razorpay_payment_id:{
        type:DataTypes.STRING
    },
    purchase_razorpay_order_id:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_amount:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_date:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_time:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_email:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_contact:{
        type:DataTypes.STRING
    },
    purchase_razorpay_payment_status:{
        type:DataTypes.INTEGER
    }
},{
    sequelize,
    tableName:'student_purchases',
    modelName:'StudentPayment'
});
module.exports = StudentPayment;