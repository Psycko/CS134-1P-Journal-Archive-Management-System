const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");

require("../Schema/pdfDetails"); 
const PdfDetailsSchema = mongoose.model("PdfDetails");

require("../Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents")

require("../Schema/studInfo");
const studInfoSchema = mongoose.model("studInfo")

require("../Schema/pdfStatistics");
const pdfStatistics = mongoose.model("pdfstat");

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
                await pdfStatistics.create({
                    title: title
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
        // await studInfoSchema.create({
        //     lrn: lrn,
        //     password: password,
        //     regDate: regDate
        // })

        // res.json({status: "Student Registered!"});

        const lrnList = await studInfoSchema.find({lrn: lrn})
        const regList = await regStudentsSchema.find({lrn: lrn})

        if (lrnList.length !== 0){
            await regStudentsSchema.create({
                lrn: lrn,
                password: password,
                regDate: regDate
            })
            res.json({status: "Student Registered!"});
        }

        else {  
            return(res.json({status: "Student LRN does not exist!"}));
        }

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

router.post('/viewAdd', (req, res) => {
    const title = req.body.Title;
    var count;
    try {
        pdfStatistics.findOne({title: title})
            .then((data) => {
                count = data.view;
                data.view = count + 1;
                data.save();
                res.send({status: 200});
            });
        


    } catch (error) {

        res.send(error);
    }
})

router.post('/downloadAdd', (req, res) => {
    const title = req.body.Title;
    var count;
    try {
        pdfStatistics.findOne({title: title})
            .then((data) => {
                count = data.download;
                data.download = count + 1;
                data.save();
                res.send({status: 200});
            });
        


    } catch (error) {

        res.send(error);
    }
})



const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: "digital.archive.otp@gmail.com",
        pass: "dihjer-raswaG-6rexvo"
    }
});

router.get('/generate2FA', (req, res) => {

    var code = "";

    for (let i = 0; i < 6; i++){
        code += Math.floor((Math.random() * 10));;
    }


    const receive = {
        from: "digital.archive.otp@gmail.com",
        to: "jensenalmazora@gmail.com",
        subject: "Test-Run",
        text: "Your One Time Password is: " + code + "\nPlease use this to log-in"
    };

    transporter.sendMail(receive, function(error, info)
    {
        if (error) {
            console.log(error);
            return res.json(error);
        }
        else
        {
            return res.json({TwoFA: code});
        }
    });

    
})

module.exports = router;