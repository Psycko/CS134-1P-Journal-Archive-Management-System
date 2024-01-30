const express = require('express');
const mysql = require('mysql');
const cors = require('cors')


const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'ols',
})

app.get('/', (re, res)=> {
    return res.json("backend");
})

app.get('/all-categ', (req, res)=> {
    const sql = "SELECT * FROM manuscripts";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/math-categ', (req, res)=> {
    const sql = "SELECT * FROM manuscripts WHERE category = 'Mathematics'";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/soc-sci-categ', (req, res)=> {
    const sql = "SELECT * FROM manuscripts WHERE category = 'Social Science'";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/robotics-categ', (req, res)=> {
    const sql = "SELECT * FROM manuscripts WHERE category = 'Robotics'";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/life-sci-categ', (req, res)=> {
    const sql = "SELECT * FROM manuscripts WHERE category = 'Life Science'";
    db.query(sql, (err, data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})