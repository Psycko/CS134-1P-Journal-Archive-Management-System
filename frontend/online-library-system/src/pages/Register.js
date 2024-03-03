import { useState } from "react"
import axios from "axios"
import logo from '../img/RSHS_1_Logo.png'
import { useNavigate } from "react-router-dom"

export default function Register() {

    const [studentLrn, setLrn] = useState("");
    const [studentPass, setPassword] = useState("");
    const [confirmPass, checkPassword] = useState("");
    const navigate = useNavigate();

    const submitRegForm= async(e) => {
        e.preventDefault();

        if (studentPass === confirmPass){
            const formData = new FormData();
            formData.append("lrn", studentLrn);
            formData.append("password", studentPass);

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

    const navToLogin = () => {
        navigate('/');
    }

    return (
        <>
        <div class="tw-bg-[url('/src/img/bg.jpg')] tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-min-h-dvh tw-min-w-full tw-gap-x-16 tw-gap-y-px">
            <div class="md:tw-text-left tw-text-left sm:tw-text-center tw-font-archivo-black md:tw-pb-[200px]">
                <h1 class="tw-text-7xl">Regional Science</h1>
                <h1 class="tw-text-7xl">High School</h1>
                <h3 class="tw-p-0.5">Region 1</h3>
            </div>
            <div class="tw-bg-white tw-bg-opacity-30 tw-h-max tw-shadow-lg tw-rounded-lg">
                <div class="tw-pt-5 tw-flex tw-justify-center tw-items-center tw-font-roboto">
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
                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button type="submit" class="rgtbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Sign Up</button>
                    </div>
                    <hr />
                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button class="lgnbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full" onClick={navToLogin}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}