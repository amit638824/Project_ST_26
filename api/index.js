import express from 'express';
import router from './router/router.js';
import dbconnect from './config/db.js';
const app=express();
const PORT=9000;
app.use(express.json());
dbconnect();
app.use(router);
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`); 
})