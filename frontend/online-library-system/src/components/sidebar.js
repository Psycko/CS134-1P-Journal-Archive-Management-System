import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import logo from '../img/RSHS_1_Logo.png'

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();

    const navToPDF = () => {
        navigate('/admin-access');
    }

    const navToStat = () => {
        navigate('/admin-pdf-monitor');
    }

    const navToManagement = () => {
        navigate('/admin-pdf-management');
    }

    const navToMonitor = () => {
        navigate('/admin-monitor');
    }

    const navToAccount = () => {
        navigate('/admin-access');
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
                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToPDF}>   
                        <i class={`${open && "tw-mr-2"} bi bi-file-arrow-down-fill tw-cursor-pointer`}/>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Upload PDF</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToManagement}>   
                        <i class={`${open && "tw-mr-2"} bi bi-pencil-square tw-cursor-pointer`}/>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Edit PDF</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToStat}>   
                        <i class={`${open && "tw-mr-2"} bi bi-bar-chart-line-fill tw-cursor-pointer`}/>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>File Statistics</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToMonitor}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill tw-cursor-pointer`}/>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Student Monitor</label>
                    </button>

                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onclick={navToAccount}>
                        <i class={`${open && "tw-mr-2"} bi bi-person-fill-gear tw-cursor-pointer`}></i>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Account Settings</label>
                    </button>
                    
                    <button class={`${!open && "tw-text-2xl tw-text-center" } tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                        onClick={navToLogin}>
                        <i class={`${open && "tw-mr-2"} bi bi-box-arrow-left tw-cursor-pointer`}></i>
                        <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Sign Out</label>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}