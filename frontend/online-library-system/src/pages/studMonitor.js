import { useState, useEffect } from 'react';
import Sidebar from "../components/sidebar";

export default function Monitor() {
    const [credData, setCred] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/reg-list')
        .then(res => res.json())
        .then(credData => setCred(credData))
        .catch(err => console.log(err));
    }, [])

    console.log(credData.lrn)

    const [studData, setStud] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/student-list')
        .then(res => res.json())
        .then(studData => setStud(studData))
        .catch(err => console.log(err));
    })

    return (
        <>
        <div class="tw-flex tw-bg-gray-50 tw-min-h-dvh">
            <div>
                <Sidebar /> 
            </div>
            <div class="tw-flex sm:tw-flex-wrap tw-flex-row tw-gap-x-[30px] tw-w-full md:tw-m-20 sm:tw-m-5 tw-rounded-md">
                <div class="category table-striped table-responsive tw-m-auto md:tw-w-[50%] sm:tw-w-full">
                    <table class="table table-striped tw-text-center">
                        <thead class="tw-text-center">
                            <tr>
                                <th scope="col">LRN</th>
                                <th scope="col">Date Registered</th>
                            </tr>
                        </thead>

                        <tbody>
                            {credData.map((d, i) => (
                            <tr key={i}>
                                <th class="tw-w-[30px]">{d.lrn}</th>
                                <td>{d.regDate}</td>
                            </tr>

                            ))}
                        </tbody>
                    </table>
                </div>

                <div class="category table-striped table-responsive tw-m-auto md:tw-w-[50%] sm:tw-w-full">
                    <table class="table table-striped tw-text-center">
                        <thead class="tw-text-center">
                            <tr>
                                <th scope="col">LRN</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Middle Initial</th>
                                <th scope="col">Birthday</th>
                            </tr>
                        </thead>

                        <tbody>
                            {studData.map((d, i) => (
                            <tr key={i}>
                                <th>{d.lrn}</th>
                                <td>{d.lastname}</td>
                                <td>{d.firstname}</td>
                                <td class="tw-w-[30px]">{d.middlename}</td>
                                <td>{d.birthday}</td>
                            </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}