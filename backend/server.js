const express = require('express');
const app = express();
const cors = require('cors')
const pdfRoutes = require('./routes/pdfRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(cors());
app.use(express.json());
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


app.use('/', postRoutes);
app.use('/', pdfRoutes);

app.listen(8081, ()=> {
    console.log("listening");
})