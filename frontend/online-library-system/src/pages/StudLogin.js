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
            <div class="md:tw-bg-gray-100 sm:tw-bg-gray-200 md:tw-bg-opacity-[40%] sm:tw-bg-opacity-[70%] tw-h-max tw-shadow-lg tw-rounded-lg">
                <div class="tw-pt-5 tw-flex tw-justify-center tw-items-center tw-font-roboto">
                    <img src={logo} class="tw-h-20 tw-w-20 tw-text-left" alt="RSHS Logo"/>
                    <h1>Login</h1>
                </div>
                <form className="formStyle tw-w-96 tw-mx-auto tw-p-4">
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                            <label for="lrnLabel">Student LRN </label>
                            <input class="form-control focus:tw-placeholder-transparent" id="lrnInput" placeholder="LRN" />
                        </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full">
                        <div class="form-group">
                                <label for="passwordInput">Password</label>
                                <input type="password" class="form-control focus:tw-placeholder-transparent" id="passwordInput" placeholder="Password" />
                            </div>
                    </div>
                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button type="login" class="lgnbutton tw-flex tw-justify-center tw-items-center tw-w-full tw-bg-btn-landing tw-rounded-md tw-h-[40px] tw-px-4 tw-border-none tw-outline-none hover:tw-bg-btn-dark tw-duration-500">
                            <label class="tw-cursor-pointer tw-text-gray-50">Login</label></button>
                    </div>
                    <hr />

                    <div class="elements tw-p-2.5 tw-w-full tw-font-roboto">
                        <button type="register" class="rgtbutton tw-flex tw-justify-center tw-items-center tw-w-full tw-bg-btn-landing tw-rounded-md tw-h-[40px] tw-px-4 tw-border-none tw-outline-none hover:tw-bg-btn-dark tw-duration-500" 
                        onClick={navToSignUp}>
                            <label class="tw-cursor-pointer tw-text-gray-50">Sign Up</label></button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}