import "../layout/admin.css";

export default function Admin() {
    return(
        <>
        <div className="whole">
            <form className='formStyle'>
                <div class="form-group">
                <div class="mb-3 row">
                    <label for="titleInput" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                    <input type="text" class="form-control" id="titleInput" placeholder="Title" required/>
                    </div>
                </div>
                </div>

                
                <div class="form-group">
                <div class="mb-3 row">
                    <label for="yearInput" class="col-sm-2 col-form-label">Year</label>
                    <div class="col-sm-10">
                    <input type='text' className='form-control' placeholder='Input here' id='yearInput' required />
                    </div>
                </div>
                </div>
                
                <fieldset class="form-group">
                <div class="row">
                    <legend class="col-form-label col-lg-2 pt-0 ">Category</legend>
                    <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="lsCateg" value="A" required/>
                        <label class="form-check-label" for="lsCateg">
                        Life Science
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="ssCateg" value="B" required/>
                        <label class="form-check-label" for="ssCateg">
                        Social Science
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="mathCateg" value="C" required/>
                        <label class="form-check-label" for="mathCateg">
                        Mathematics
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="robCateg" value="D" required/>
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
                    <input type='file' className='form-control' accept='application/pdf' required />
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