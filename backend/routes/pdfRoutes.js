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

 router.get('/pdf-statistics', (req, res) => {
    try {
        pdfStatistics.find({}).then((data) => {
            res.send(data);
        });
    } catch (error) {
        res.send(error);
    }
 })

 router.post('/searchbar-category', (req, res) => {
    var category;
    if (req.body.Categ === 'life-sci-categ') {
        category = "Life Science";
    }
    else if (req.body.Categ === 'robotics-categ') {
        category = "Robotics";
    }
    else if (req.body.Categ === 'soc-sci-categ') {
        category = "Social Science";
    }
    else if (req.body.Categ === 'math-categ') {
        category = "Mathematics";
    }




    if (req.body.Categ === 'all-categ') {
        
        try {
            PdfDetailsSchema.find({ title: {$regex: req.body.Search, $options: 'i' }})
            .then((data) => {
                
                res.send(data);
            })

        } catch (error) {
            res.send(error);
        }
    }
    else{
        try {
            PdfDetailsSchema.find({ title: {$regex: req.body.Search, $options: 'i' },
        category: category})
            .then((data) => {
                
                res.send(data);
            })

        } catch (error) {
            res.send(error);
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