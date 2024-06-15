import { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"
import logo from '../img/RSHS_1_Logo.png'
import { Delete } from '../hooks/authorize';

export default function Sidebar() {
    const [open, setOpen] = useState(true);
    const [uploadActive, setUpload] = useState(true);
    const [editActive, setEdit] = useState(true);
    const [statActive, setStat] = useState(true);
    const [monitorActive, setMonitor] = useState(true);
    const [accountActive, setAccount] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();

    const isActivePage = (path) => location.pathname === path;

    const navToPDF = () => {
        navigate('/admin-access');
        setUpload(true);
        setEdit(false);
        setStat(false);
        setMonitor(false);
        setAccount(false);
    }

    const navToStat = () => {
        navigate('/admin-pdf-monitor');
        setUpload(false);
        setEdit(false);
        setStat(true);
        setMonitor(false);
        setAccount(false);
    }

    const navToManagement = () => {
        navigate('/admin-pdf-management');
        setUpload(false);
        setEdit(true);
        setStat(false);
        setMonitor(false);
        setAccount(false);
    }

    const navToMonitor = () => {
        navigate('/admin-monitor');
    }

    const navToAccount = () => {
        navigate('/admin-student-management');
    }

    const navToLogin = () => {
        Delete();
        navigate('/admin-login');
    }

    return (
        <>
            <div class="tw-top-0 tw-sticky">
                <div class={`${open ? "tw-w-72" : "tw-w-20"} tw-flex tw-flex-col tw-bg-dark-blue tw-h-screen tw-pt-8 tw-sticky tw-duration-300`}>
                    <div class="tw-flex tw-basis-5 tw-mx-auto">
                        <img src={logo} class={`tw-duration-500 tw-h-20 tw-w-20 ${open && "tw-w-[200px] tw-h-[200px]"}`}
                    /*onClick={() => setOpen(!open)}*/ />
                    </div>

                    <div class="tw-mt-3 tw-flex tw-flex-col tw-duration-300 tw-cursor-pointer tw-gap-y-2 tw-mx-5">
                        <button class={`${!uploadActive && ""} ${isActivePage('/admin-access') ? "tw-bg-slate-700" : ""} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                            onClick={navToPDF}>
                            <i class={`${!uploadActive && ""} tw-mr-2 bi bi-file-arrow-down-fill tw-cursor-pointer`} />
                            <label class={`${!uploadActive && ""} tw-cursor-pointer`}>Upload PDF</label>
                        </button>

                        <button class={`${editActive && ""} ${isActivePage('/admin-pdf-management') ? "tw-bg-slate-700" : ""} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                            onClick={navToManagement}>
                            <i class={`${editActive && ""} tw-mr-2 bi bi-pencil-square tw-cursor-pointer`} />
                            <label class={`${editActive && ""} tw-cursor-pointer`}>Edit PDF</label>
                        </button>

                        <button class={`${!open && "tw-text-2xl tw-text-center"} ${isActivePage('/admin-pdf-monitor') ? "tw-bg-slate-700" : ""} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                            onClick={navToStat}>
                            <i class={`${open && "tw-mr-2"} bi bi-bar-chart-line-fill tw-cursor-pointer`} />
                            <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>File Statistics</label>
                        </button>

                        <button class={`${!open && "tw-text-2xl tw-text-center"} ${isActivePage('/admin-monitor') ? "tw-bg-slate-700" : ""} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                            onClick={navToMonitor}>
                            <i class={`${open && "tw-mr-2"} bi bi-person-fill tw-cursor-pointer`} />
                            <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Student Monitor</label>
                        </button>

                        <button class={`${!open && "tw-text-2xl tw-text-center"} ${isActivePage('/admin-student-management') ? "tw-bg-slate-700" : ""} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
                            onClick={navToAccount}>
                            <i class={`${open && "tw-mr-2"} bi bi-person-fill-gear tw-cursor-pointer`}></i>
                            <label class={`${!open && "tw-hidden"} tw-cursor-pointer`}>Account Settings</label>
                        </button>

                        <button class={`${!open && "tw-text-2xl tw-text-center"} tw-text-left tw-text-lg tw-w-full tw-rounded-md tw-py-2 tw-border-none tw-bg-transparent tw-text-white hover:tw-bg-slate-500`}
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