import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import logo from '../img/RSHS_1_Logo.png'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const navToPDF = () => {
        navigate('/admin-access');
    }

    const navToMonitor = () => {
        navigate('/stud-monitor');
    }

    const navToAccount = () => {
        navigate('stud-account');
    }

    const navToLogin = () => {
        navigate('/admin-login');
    }

    return (
        <>
        <div>
            <div class={`${open ? "tw-w-72" : "tw-w-20" } tw-flex tw-flex-col tw-bg-blue tw-h-screen tw-pt-8 tw-relative tw-duration-300`}>
                <div class="tw-flex tw-basis-5 tw-mx-auto">
                    <img src={logo} class={`tw-duration-500 tw-cursor-pointer tw-h-20 tw-w-20 ${ open && "tw-w-[200px] tw-h-[200px]"}`} onClick={() => setOpen(!open)}/>
                </div>
                
                <div class="tw-mt-3 tw-flex tw-flex-col tw-duration-300 tw-cursor-pointer tw-gap-y-2 tw-mx-5">
                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToPDF}>   
                        <i class={`${open && "tw-mr-2"} bi bi-file-earmark-plus-fill`} />
                        <label class={`${!open && "tw-hidden"}`}>Manage PDF</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill-add`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Student Monitor</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToMonitor}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill-gear`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Account Settings</label>
                    </button>
                    
                    <button class={`${!open && "tw-text-2xl" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToLogin}>
                        <i class={`${open && "tw-mr-2"} bi bi-box-arrow-left`}></i>
                        <label class={`${!open && "tw-hidden"}`}>Sign Out</label>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}