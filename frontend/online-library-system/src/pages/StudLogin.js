import { useNavigate } from 'react-router-dom';
import logo from '../img/RSHS_1_Logo.png';

export default function StudLogin() {
    const navigate = useNavigate();

    const navToSignUp = () => {
        navigate('/register');
    }

    console.log("cj was here");
    console.log("borge was here");
    console.log("jensen was here");

    return (
        <>
        <div className="md:tw-bg-[url('/src/img/bg.jpg')] tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-min-h-dvh tw-min-w-full tw-gap-x-16 tw-gap-y-px">
            <div class="md:tw-text-left tw-text-left sm:tw-text-center tw-font-archivo-black md:tw-pb-[200px]">
                <h1 class="tw-text-7xl">Regional Science</h1>
                <h1 class="tw-text-7xl">High School</h1>
                <h3 class="tw-p-0.5">Region 1</h3>
            </div>
            <div class="tw-bg-white tw-bg-opacity-30 tw-h-max tw-shadow-lg tw-rounded-lg">
                <div class="tw-pt-5 tw-flex tw-justify-center tw-items-center tw-font-roboto">
                    <img src={logo} class="tw-h-20 tw-w-20 tw-text-left" alt="RSHS Logo"/>
                    <h1>Login</h1>
                </div>
                <form className="formStyle tw-w-96 tw-mx-auto tw-p-4">
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                            <label for="lrnLabel">Student LRN </label>
                            <input class="form-control" id="lrnInput" placeholder="LRN" />
                        </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control" id="passwordInput" placeholder="Password" />
                            </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button type="login" class="lgnbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full">Login</button>
                    </div>
                    <hr />

                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button type="register" class="rgtbutton btn btn-primary tw-flex tw-justify-center tw-items-center tw-w-full" onClick={navToSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}