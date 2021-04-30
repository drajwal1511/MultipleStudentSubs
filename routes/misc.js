const experss = require("express");
const bcrypt = require("bcrypt");
const routes = experss.Router();
var Student = require("../models/student");
var StudentPayment = require("../models/student_payment");
routes.get("/landing",(req,res)=>{
    res.render("landing");
})
routes.get("/substomultiplestu", (req, res) => {
    res.render("home");
});
routes.post("/substomultiplestu", (req, res) => {
    req.body.data = JSON.parse(req.body.data);
    var custID = req.body.custID;
    var data = req.body.data;
    (async ()=>{
        try{
            for (var i = 0; i < data.length; i++) {
                var salt = await bcrypt.genSalt(10);
                data[i].Password=await bcrypt.hash(data[i].Password,salt);
                var obj = {
                    customer_id: parseInt(custID),
                    student_first_name: data[i]["First Name"],
                    student_last_name: data[i]["Last Name"],
                    student_email: data[i]["Email ID"],
                    student_phone_number: data[i]["Mobile Number"],

                    student_password: data[i].Password
                }
                const newStudent =await Student.create(obj);
                // console.log(newStudent)
                // console.log("**********select query************");
                var d=await Student.findOne({where:{student_email:data[i]["Email ID"]}});
                if(d!=null){
                    for(var j=0;j<2;j++){
                        var paymentObj={
                            customer_id:d.customer_id,
                            student_id:d.student_id,
                            session_id:parseInt(50-j),
                            purchase_razorpay_payment_id:'bulk add',
                            purchase_razorpay_order_id:'buld add',
                            purchase_razorpay_payment_amount:'buld add',
                            purchase_razorpay_payment_date:'bulk add',
                            purchase_razorpay_payment_time:'bulk add',
                            purchase_razorpay_payment_email:'buld add',
                            purchase_razorpay_payment_contact:'bulk add',
                            purchase_razorpay_payment_status:1
                        };
                        const newpayment = await StudentPayment.create(paymentObj);
                        // console.log(newpayment);
                    }
                }
                
            }        
        }catch(e){
            console.log(e);
        }
    })();
    res.redirect("/landing");
});
module.exports = routes;