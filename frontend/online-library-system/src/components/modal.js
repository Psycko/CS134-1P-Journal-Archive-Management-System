import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OTPModal({otp, token, visible, onClose }) {
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [four, setFour] = useState("");
    const [five, setFive] = useState("");
    const [six, setSix] = useState("");
    const navigate = useNavigate();

    const userInput = one + two + three + four + five + six;
    

    const verifyOTP = (e) => {
        if (userInput === otp) {

            localStorage.setItem("token", JSON.stringify(token));
            navigate("/admin-access");
            window.location.reload();

        }

        else {
            alert("Wrong OTP. Please try again!");
            setOne("");
            setTwo("");
            setThree("");
            setFour("");
            setFive("");
            setSix("");
        }
    }


    if(!visible) return null;

    return (
        <div class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25 tw-backdrop-blur-sm tw-flex tw-items-center tw-justify-center">
            <div class="tw-bg-gray-50 tw-rounded-lg tw-shadow-lg md:tw-w-[20%] md:tw-h-[40%] sm:tw-w-full sm:tw-mx-5 sm:tw-h-[45%]">
                <div class="tw-flex tw-flex-row-reverse">
                    <button class="tw-border-none tw-bg-transparent tw-m-2" onClick={onClose}>
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>

                <h3 class="tw-font-semibold tw-text-center tw-text-xl tw-text-gray-700 tw-my-5">
                One-Time Password
                </h3>

                <div class="tw-flex tw-flex-row tw-my-9 tw-w-full tw-gap-x-3 tw-justify-center">
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="1" maxlength="1" value={one} onChange={e => setOne(e.target.value)}/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="2" maxlength="1" value={two} onChange={e => setTwo(e.target.value)}/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="3" maxlength="1" value={three} onChange={e => setThree(e.target.value)}/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="4" maxlength="1" value={four} onChange={e => setFour(e.target.value)}/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="5" maxlength="1" value={five} onChange={e => setFive(e.target.value)}/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent"
                        placeholder="6" maxlength="1" value={six} onChange={e => setSix(e.target.value)}/>
                </div>

                <p class="tw-m-2 tw-text-center">One-Time Password is sent, please check your Email.</p>

                <div class="tw-text-center tw-m-9">
                    <button class="tw-bg-btn-landing tw-rounded-md tw-h-[40px] tw-px-4 tw-border-none tw-outline-none hover:tw-bg-btn-dark tw-duration-500 tw-text-gray-50"
                    onClick={(e) => {verifyOTP(e)}}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}