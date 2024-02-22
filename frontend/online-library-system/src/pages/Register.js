import { useEffect, useState} from "react";
import axios from "axios";
import logo from '../RSHS_1_Logo.png';

export default function Register() {

    const [studentLrn, setLrn] = useState("");
    const [studentPass, setPassword] = useState("");
    const [confirmPass, checkPassword] = useState("");

    const submitRegForm= async(e) => {
        e.preventDefault();

        if (studentPass === confirmPass){
            const formData = new FormData();
            formData.append("LRN", studentLrn);
            formData.append("Password", studentPass);

            console.log(studentLrn, studentPass);
            
            const uploadAPI = await axios.post("http://localhost:8081/register-stud", formData, {
                headers: { "Content-Type" : "multipart/form-data" }
            });

            console.log(uploadAPI);
            alert(uploadAPI.data.status);

            setLrn("");
            setPassword("");
            checkPassword("");
        }

        else{
            alert("Password does not match!");
            setPassword("");
            checkPassword("");
        }
    }

    return (
        <>
        <div class="container tw-bg-gray-100 tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-min-h-dvh tw-min-w-full">
            <div class="">
                <h1 class="tw-text-left tw-text-6xl">Regional Science</h1>
                <h1 class="tw-text-left tw-text-6xl">High School</h1>
                <h3 class="tw-text-left">for Region I</h3>
            </div>
            <div class="tw-bg-white container2 tw-h-max tw-ml-20 tw-shadow-lg tw-rounded-lg">
                <div class="tw-pt-5 tw-flex tw-justify-center tw-items-center">
                    <img src={logo} class="tw-h-20 tw-w-20 tw-text-left" alt="RSHS Logo"/>
                    <h1>Sign Up</h1>
                </div>
                <form className="formStyle tw-w-96 tw-mx-auto tw-p-4" onSubmit={submitRegForm}>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                            <label for="lrnLabel">Student LRN </label>
                            <input class="form-control" id="lrnInput" placeholder="LRN" required onChange={(e) => setLrn(e.target.value)} value={studentLrn}/>
                        </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={studentPass}/>
                            </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                                <label for="passwordInput">Confirm Password</label>
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password" required onChange={(e) => checkPassword(e.target.value)} value={confirmPass}/>
                            </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <button type="sign_up" class="rgtbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Sign Up</button>
                    </div>
                    <hr />

                    <h5 class="tw-flex tw-justify-center tw-items-center">Login</h5>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <button type="login" class="lgnbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}