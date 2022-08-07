const express = require('express');
const app = express();

const reqfilter = (req,res,next)=>{   //Applcation level
    if(!req.query.age){
        res.send('Provide Age');
    }else{
        next();
    }
}
app.use(reqfilter);

app.get('/about', (req, res)=>{
    res.send('ddd');
})

app.listen(5000);