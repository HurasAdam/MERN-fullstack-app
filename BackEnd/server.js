require('dotenv').config();
const mongoose= require('mongoose');
const express= require('express');
const cors = require('cors');
const actions= require('./routes/actions')
const user =require('./routes/user')
const app= express();
app.use((req,res,next)=>{
    console.log(req.method, req.path)
next()
})

app.use(express.json())
app.use(cors())
app.use('/api/workouts',actions)
app.use('/api/users',user)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log('Connected to DB & listen on port:',process.env.PORT)
    })
    
})


