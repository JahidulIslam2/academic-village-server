const express =require('express');
const app =express();
const port=process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Server Run')
})

app.listen(port,()=>{
    console.log(`Academic Hub Server Runned ${port}`)
})