const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
require("../Schema/pdfDetails"); 
const PdfDetailsSchema = mongoose.model("PdfDetails");

require("../Schema/regStudents");
const regStudentsSchema = mongoose.model("regStudents");

require("../Schema/studInfo");
const studInfoSchema = mongoose.model("studInfo");

require("../Schema/pdfStatistics");
const pdfStatistics = mongoose.model("pdfstat");

router.get('/all-categ', (req, res)=> {
    try {
         PdfDetailsSchema.find({}).then((data) => {
             res.send(data);
         });
 
    } catch (error) {
         res.send()
    } 
    
 })

 router.get('/students/manuscripts/:category?/', (req, res) => {
    const searchVal = req.query.search ? req.query.search.split(" ") : [];
    

    if (searchVal.length === 0) {
        if (req.params.category === "all") {
        
            try {
                PdfDetailsSchema.find({ title: {$regex: req.query.search, $options: 'i' }})
                .then((data) => {
                    
                    res.status(200).send(data);
                })
    
            } catch (error) {
                res.status(400).send(error);
            }
        }
        else{
            try {
                PdfDetailsSchema.find({ title: {$regex: req.query.search, $options: 'i' },
            category: req.params.category})
                .then((data) => {
                    
                    res.status(200).send(data);
                })
    
            } catch (error) {
                res.status(400).send(error);
            }
        }
    }

    else{
        if (req.params.category != "all") {
            try {
                PdfDetailsSchema.find({category: req.params.category}).then((data) => {
                    res.status(200).send(data);
                });
        
            } catch (error) {
                res.status(400).send();
            } 
        }
        else
        {
            try {
                PdfDetailsSchema.find({}).then((data) => {
                    res.status(200).send(data);
                });
        
            } catch (error) {
                res.status(400).send();
            } 
        }
    }
 })

router.post('/delete-pdf', (req, res) => {
    PdfDetailsSchema.deleteOne({title: req.body.title})
    .then(result => {
        pdfStatistics.deleteOne({title: req.body.title})
        .then(result => {
            res.send({status: req.body.title+" Deleted"});
        })
        .catch(error => {
            res.send(error);
        })
        
    })
    .catch(error => {
        res.send(error);
    })
})

router.post('/edit-pdf', async (req, res) => {
    const id = req.body.data._id;
    const title = req.body.data.title;
    const category = req.body.data.category;
    const year = req.body.data.year;
    var isTrue = true;

    const matchedTitles = await PdfDetailsSchema.find({title: title});
    if (matchedTitles.length > 0){
        matchedTitles.forEach((title) => {
            if (title._id == req.body.data._id)
            {
                isTrue = false;
            }
        })
        
    }
    else{
        isTrue = false;
    }

    if (isTrue)
    {
        res.json({status: "There's an existing PDF with that title! Please try again."});
    }
    else {
        try {
            PdfDetailsSchema.findById(id)
                .then((data) => {
                    try {
                        pdfStatistics.findOne({title: data.title})
                        .then((data2) => {
                
                            data2.title = title;
                            data2.save();
                                    
                        });
                    }
                    catch (error) {
                        res.send(error);
                    }

                    data.title = title;
                    data.category = category;
                    data.year = year;
                    data.save();
                    res.send({status: "Journal Successfully Edited!"});
                });

        } catch (error) {

            res.send(error);
        }
    };
})

module.exports = router;