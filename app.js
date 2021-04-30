const express  = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
const sequelize = require("./database");
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection to DB successful");
    }catch (e){
        console.log("Connection to Database failed");
        console.log(e);
    }
})();
(async ()=>{
    try{
        await sequelize.sync();
        console.log("Database synced");
    }catch(e){
        console.error(e);
    }
})();
const miscRoutes = require("./routes/misc");
app.use(miscRoutes);
app.listen(3111,()=>{
    console.log("server up at port 80");
})
