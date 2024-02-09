import "../layout/admin.css";
import { useEffect, useState } from "react";
import axios from "axios";



export default function Admin() {

    const [researchTitle, setTitle] = useState("");
    const [researchYear, setYear] = useState("");
    const [category, setCategory] = useState("");
    const [file, setFile] = useState("");



    const submitFile= async(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("Title", researchTitle);
        formData.append("Year", researchYear);
        formData.append("Category", category);
        formData.append("File", file);

        console.log(researchTitle, researchYear, category, file);

        const uploadAPI = await axios.post("http://localhost:8081/upload-pdf", formData, {
            headers: { "Content-type" : "multipart/form-data"}
        });

        console.log(uploadAPI);
    }

    return(
        <>
        <div className="whole">
            <form className='formStyle' onSubmit={submitFile}>
                <div class="form-group">
                <div class="mb-3 row">
                    <label for="titleInput" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="titleInput" placeholder="Title" required
                    onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                </div>
                </div>

                
                <div class="form-group">
                <div class="mb-3 row">
                    <label for="yearInput" class="col-sm-2 col-form-label">Year</label>
                    <div class="col-sm-10">
                    <input type='text' className='form-control' placeholder='Input here' id='yearInput' required
                    onChange={(e) => setYear(e.target.value)}/>
                    </div>
                </div>
                </div>
                
                <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-lg-2 pt-0 ">Category</legend>
                    <div class="col-sm-10" onChange={(e) => setCategory(e.target.value)} >
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="lsCateg" value="Life Science" required/>
                        <label class="form-check-label" for="lsCateg">
                        Life Science
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="ssCateg" value="Social Science" required/>
                        <label class="form-check-label" for="ssCateg">
                        Social Science
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="mathCateg" value="Mathematics" required/>
                        <label class="form-check-label" for="mathCateg">
                        Mathematics
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="robCateg" value="Robotics" required/>
                        <label class="form-check-label" for="robCateg">
                        Robotics
                        </label>
                    </div>

                    
                    </div>
                </div>
                </fieldset>


                <br/>



                <div class="form-group">
                <div class="mb-3">
                    <input type='file' className='form-control' accept='application/pdf' required
                    onChange={(e) => setFile(e.target.files[0])}/>
                </div>
                </div>
                
                <button type="submit" class="btn btn-primary">
                Submit
                </button>

            </form>
        </div>
        </>
    )
}