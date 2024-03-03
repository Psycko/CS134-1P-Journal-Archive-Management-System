import { useState, useEffect } from 'react';
import Sidebar from "../components/sidebar";

export default function Monitor() {
    const [credData, setCred] = useState([])
    useEffect(() => {
        //console.log(category);
        fetch('http://localhost:8081/reg-list')
        .then(res => res.json())
        .then(credData => setCred(credData))
        .catch(err => console.log(err));
    }, [])

    //console.log(credData.lrn)

    // const [studData, setStud] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:8081/[student table schema name]')
    //     .then(res => res.json())
    //     .then(data => setStud(data))
    //     .catch(err => console.log(err));
    // })

    return (
        <>
        <div class="tw-flex">
            <div>
                <Sidebar /> 
            </div>
            <div class="category table-striped table-responsive tw-m-auto tw-w-[70%]">
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
                            {/* <th scope="row">{i+1}</th> */}
                            <th>{d.lrn}</th>
                            <td>{d.regDate}</td>
                        </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}