const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
require("../Schema/pdfDetails"); 
const PdfDetailsSchema = mongoose.model("PdfDetails");

require("../Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents");

require("../Schema/studInfo");
const studInfoSchema = mongoose.model("studInfo");

router.get('/all-categ', (req, res)=> {
    try {
         PdfDetailsSchema.find({}).then((data) => {
             res.send(data);
         });
 
    } catch (error) {
         res.send()
    } 
    
 })
 
 router.get('/math-categ', (req, res)=> {
     try {
         PdfDetailsSchema.find({category: "Mathematics"}).then((data) => {
             res.send(data);
         });
 
     } catch (error) {
         res.send()
     } 
 })
 
 router.get('/soc-sci-categ', (req, res)=> {
     try {
         PdfDetailsSchema.find({category: "Social Science"}).then((data) => {
             res.send(data);
         });
 
     } catch (error) {
         res.send()
     } 
 })
 
 router.get('/robotics-categ', (req, res)=> {
     try {
         PdfDetailsSchema.find({category: "Robotics"}).then((data) => {
             res.send(data);
         });
 
     } catch (error) {
         res.send()
     } 
 })
 
 router.get('/life-sci-categ', (req, res)=> {
     try {
         PdfDetailsSchema.find({category: "Life Science"}).then((data) => {
             res.send(data);
         });
 
     } catch (error) {
         res.send()
     } 
 })

 router.get('/reg-list', (req, res) => {
    try {
        regStudentsSchema.find({}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.send()
    }
 })

 router.get('/student-list', (req, res) => {
    try {
        studInfoSchema.find({}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.send()
    }
 })

module.exports = router;