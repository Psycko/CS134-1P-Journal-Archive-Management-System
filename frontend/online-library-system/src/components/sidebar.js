import { useState } from 'react'
import logo from '../img/RSHS_1_Logo.png'

export default function Sidebar() {
    const [open, setOpen] = useState(true);

    return (
        <>
        <div>
            <div class={`${open ? "tw-w-72" : "tw-w-20" } tw-flex tw-flex-col tw-bg-blue tw-h-screen tw-pt-8 tw-relative tw-duration-300`}>
                {/* <img src={test} class={`tw-flex tw-basis-0 tw-absolute tw-cursor-pointer tw--right-3 tw-top-9 tw-w-7 tw-border-dark-purple ${!open && "tw-rotate-180"}`} onClick={() => setOpen(!open)}/> */}
                <div class="tw-flex tw-basis-5 tw-mx-auto">
                    <img src={logo} class={`tw-duration-500 tw-cursor-pointer tw-h-20 tw-w-20 ${ open && "tw-w-[200px] tw-h-[200px]"}`} onClick={() => setOpen(!open)}/>
                </div>
                
                <div class="tw-mt-3 tw-flex tw-flex-col tw-duration-300 tw-cursor-pointer tw-gap-y-2 tw-mx-5">
                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}>   
                        <i class={`${open && "tw-mr-2"} bi bi-file-earmark-plus-fill`} />
                        <label class={`${!open && "tw-hidden"}`}>Manage PDF</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill-add`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Student Registration</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill-gear`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Account Settings</label>
                    </button>
                    
                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}>
                        <i class={`${open && "tw-mr-2"} bi bi-box-arrow-left`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Sign Out</label>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}