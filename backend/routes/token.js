const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


const mongoose = require("mongoose");
require("../Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents");


require("../Schema/adminDetails");
const adminSchema = mongoose.model("admin");



router.post("/getToken", async (req, res) => {
    const lrn = req.body.lrn;
    const password = req.body.password;
    //123546asdf
    try {
        const student = await regStudentsSchema.findOne({lrn})
      
        if(student) {
            if (password === student.password) {
                const token = jwt.sign({_id: student._id}, "Secret", {
                    expiresIn: '6h',
                });
                
              //  const decoded = jwt.decode(token, "Secret");
                //console.log(decoded);
                console.log(token);
                res.json({status: "Success!", token: token});

            }
            else {
                res.json({status: "Incorrect Password!"});
            }
        }
        else {
            res.json({status: "Incorrect LRN!"});
        }    
        
    } catch (error) {
        res.send(error);
    }
})

router.post("/authorizeUser", async(req, res) => {
    const token = req.body.token.split("\"")[1];

    const decode = jwt.verify(token, "Secret");

    const id = decode._id;
    try {
        const student = await regStudentsSchema.findById(id)

        if (student) {
            res.json({status: "Student"});
        }
        else{
            res.json({status: "Error"});
        }
    } catch (error) {
        res.json({status: "Error"})
    }
    
})


router.post("/authorizeAdmin", async(req, res) => {

    const token = req.body.token.split("\"")[1];

    const decode = jwt.verify(token, "Secret")
   
    const id = decode._id;
    try {
        const admin = await adminSchema.findById(id)
        if (admin) {
            res.json({status: "Admin"});
        }
        else{
            res.json({status: "Error"});
        }
    } catch (error) {
        res.json({status: "Error"})
    }

})


module.exports = router;

