const express =require('express');
const app =express();
const port=process.env.PORT || 5000;
const cors=require('cors')
app.use(cors());
const courses=require('./courseData/courseCategories.json')
const courseDetails=require('./courseData/courseDetails.json')


app.get('/',(req,res)=>{
    res.send('Server Run')
})

app.get('/courses-name',(req,res)=>{
    res.send(courses);
})

app.get('/course',(req,res)=>{
    res.send(courseDetails)
})

app.get('/course/:id',(req,res)=>{
    const id =req.params.id;
    const course=courseDetails.find(p => p._id === id)
    res.send(course)
   
})


app.listen(port,()=>{
    console.log(`Academic Hub Server Runned ${port}`)
})