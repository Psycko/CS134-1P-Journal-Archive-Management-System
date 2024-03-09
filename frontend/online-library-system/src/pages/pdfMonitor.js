import { useState, useEffect } from 'react'
import Sidebar from "../components/sidebar"

export default function PDFMonitor() {
    const [pdfStats, setPdfStats] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/pdf-statistics')  
        .then(res => res.json())
        .then(pdfStats => setPdfStats(pdfStats))
        .catch(err => console.log(err));
    }, []);

    return (
        <>
        <div class="tw-flex tw-bg-gray-50 tw-min-h-dvh">
            <div>
                <Sidebar /> 
            </div>

            <div class="tw-gap-x-[30px] tw-w-full md:tw-mx-20 md:tw-mt-[100px] sm:tw-m-5 tw-align-top">
                <table class="table table-striped tw-text-center">
                    <thead class="tw-text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">View Count</th>
                            <th scope="col">Download Count</th>
                        </tr>
                        
                    </thead>

                    <tbody>
                        {pdfStats.map((d, i) => (
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{d.title}</td>
                            <td>{d.view}</td>
                            <td>{d.download}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}