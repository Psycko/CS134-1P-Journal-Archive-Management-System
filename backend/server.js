const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.use("/uploads", express.static("uploads"));


//Mongoose for mongoDb
const mongoose = require("mongoose");
const dbURL = "mongodb+srv://archive123:JZcxTDy8i6D3yriH@research-archive.fofukz3.mongodb.net/?retryWrites=true&w=majority";

//Schemas for pdfUpload
require("./Schema/pdfDetails");
const PdfDetailsSchema = mongoose.model("PdfDetails");

//Schema for regStudent
require("./Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents")


mongoose.connect(dbURL,
    )
.then(() => {
    console.log("Connected");
    })
.catch(e =>
    console.log(e));

    
/*
const mysql = require('mysql');


const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'ols',
})*/


//MULTER FOR FILE UPLOAD
const multer  = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + req.body.Title +".pdf")
    }
  })
  
  const upload = multer({ storage: storage })



//API 
app.get('/', (req, res)=> {
    return res.json("backend");
})

app.post("/upload-pdf", upload.single("File"), async (req, res) => {

    const title = req.body.Title;
    const year = req.body.Year;
    const category = req.body.Category;
    const fileDest = req.file.filename;

    try {
        await PdfDetailsSchema.create({
            title: title,
            year: year,
            category: category,
            destination: fileDest
        })
        res.json({status: "Upload Success!"});
    } catch (error) {
        res.json({status: "Error! Try Again!"});
    }
})

app.post("/register-stud", upload.single("Form"), async (req, res) => {

    const lrn = req.body.LRN;
    const password = req.body.Password;
    const status = "Pending";
    const regDate = Date.now();

    try {
        await regStudentsSchema.create({
            lrn: lrn,
            password: password,
            status: status,
            regDate: regDate
        })
        res.json({status: "Student Registered!"});
    } catch (error) {
        res.json({status: "Error! Try Again!"});
    }
})

app.get('/login', (req, res) => {
    try {
        regStudentsSchema.find({}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.json({status: "Student not found!"});
    }
})

app.get('/all-categ', (req, res)=> {
   try {
        PdfDetailsSchema.find({}).then((data) => {
            res.send(data);
        });

   } catch (error) {
        res.send()
   } 
   
})

app.get('/math-categ', (req, res)=> {
    try {
        PdfDetailsSchema.find({category: "Mathematics"}).then((data) => {
            res.send(data);
        });

    } catch (error) {
        res.send()
    } 
})

app.get('/soc-sci-categ', (req, res)=> {
    try {
        PdfDetailsSchema.find({category: "Social Science"}).then((data) => {
            res.send(data);
        });

    } catch (error) {
        res.send()
    } 
})

app.get('/robotics-categ', (req, res)=> {
    try {
        PdfDetailsSchema.find({category: "Robotics"}).then((data) => {
            res.send(data);
        });

    } catch (error) {
        res.send()
    } 
})

app.get('/life-sci-categ', (req, res)=> {
    try {
        PdfDetailsSchema.find({category: "Life Science"}).then((data) => {
            res.send(data);
        });

    } catch (error) {
        res.send()
    } 
})



app.listen(8081, ()=> {
    console.log("listening");
})