import React from 'react';

export default function OTPModal({visible, onClose }) {

    if(!visible) return null;

    return (
        <div class="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-25 tw-backdrop-blur-sm tw-flex tw-items-center tw-justify-center">
            <div class="tw-bg-gray-50 tw-rounded-lg tw-shadow-lg md:tw-p-5 sm:tw-w-full sm:tw-mx-5 sm:tw-h-[45%]">
                <div class="tw-flex tw-flex-row-reverse">
                    <button class="tw-border-none tw-bg-transparent tw-m-2" onClick={onClose}>
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>

                <h3 class="tw-font-semibold tw-text-center tw-text-xl tw-text-gray-700 tw-my-5">
                One-Time Password
                </h3>

                <div class="tw-flex tw-flex-row tw-my-9 tw-w-full tw-gap-x-3 tw-justify-center">
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="1"/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="2"/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="3"/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="4"/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="5"/>
                    <input class="tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-400 focus:tw-ring-gray-700 focus:tw-ring-1 tw-p-2 tw-rounded tw-w-10 tw-text-center focus:tw-placeholder-transparent" placeholder="6"/>
                </div>

                <p class="tw-m-2 tw-text-center">One-Time Password is sent, please check your Email.</p>

                <div class="tw-text-center tw-m-9">
                    <button class="tw-bg-btn-landing tw-rounded-md tw-h-[40px] tw-px-4 tw-border-none tw-outline-none hover:tw-bg-btn-dark tw-duration-500 tw-text-gray-50">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}