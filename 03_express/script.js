const express = require('express');
const app = express()

///middlewear
app.use((req, res, next)=>{
    console.log("middlewear");
    next()
});

///middlewear
app.use((req, res, next)=>{
    console.log("middlewearagina");
    next()
});

app.get("/", (req, res) =>{
    res.send("This is Home Page");
})

app.get("/profile", (req, res) =>{
    res.send("This is Profile Page");
})

app.use((error, req, res, next)=>{
    console.error(error.stack)
    res.status(500).send("Something broke")
})

app.listen(3000)
