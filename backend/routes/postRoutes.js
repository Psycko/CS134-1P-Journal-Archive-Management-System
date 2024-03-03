const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

require("../Schema/pdfDetails"); 
const PdfDetailsSchema = mongoose.model("PdfDetails");

require("../Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents")

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
router.get('/', (req, res)=> {
    return res.json("backend");
})

router.post("/upload-pdf", upload.single("File"), async (req, res) => {

    const title = req.body.Title;
    const year = req.body.Year;
    const category = req.body.Category;
    const fileDest = req.file.filename;

    try{
        const matchedTitles = await PdfDetailsSchema.find({title: title})

        if (matchedTitles.length > 0){
            res.json({status: "There's an existing PDF with that title! Please try again."});
        }
        else{
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
        }
    } catch(error){
        res.json({status: "Error! Try Again!"});
    }
})

router.post("/register-stud", upload.single("Form"), async (req, res) => {

    const lrn = req.body.lrn;
    const password = req.body.password;
    const regDate = Date.now();

    try {
        // await studCredentialSchema.create({
        //     lrn: lrn,
        //     password: password,
        //     regDate: regDate
        // })

        // res.json({status: "Student Registered!"});
        //const lrnList = await [student_db].find({LRN: lrn})
        const regList = await regStudentsSchema.find({lrn: lrn})

        if (regList.length === 0){
            await regStudentsSchema.create({
                lrn: lrn,
                password: password,
                regDate: regDate
            })
            res.json({status: "Student Registered!"});
        }

        else {
            res.json({status: "Student already registered!"});
        }

        // if (lrnList !== 0){
        //     await regStudentsSchema.create({
        //         lrn: lrn,
        //         password: password,
        //         regDate: regDate
        //     })
        //     res.json({status: "Student Registered!"});
        // }

        // else {
        //     res.json({status: "Student LRN does not exist!"});
        // }

    } catch (error) {
        res.json({status: "Error! Try Again!"});
    }
})

router.get('/login', (req, res) => {
    try {
        regStudentsSchema.find({}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.json({status: "Student not found!"});
    }
})

module.exports = router;