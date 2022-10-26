const express =require('express');
const app =express();
const port=process.env.PORT || 5000;

const courses=require('./courseData/courseCategories.json')

app.get('/',(req,res)=>{
    res.send('Server Run')
})

app.get('/courses-name',(req,res)=>{
    res.send(courses);
})

app.get('/course/:id',(req,res)=>{
    const id =req.params.id;
})

app.listen(port,()=>{
    console.log(`Academic Hub Server Runned ${port}`)
})