import { useState, useEffect } from 'react';
import Sidebar from "../components/sidebar";
import Searchbar from "../components/searchbar";
import { CSVLink } from "react-csv";
import Papa from "papaparse";

export default function Monitor() {
    const [credData, setCred] = useState([]);
    const [studData, setStud] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/reg-list')
            .then(res => res.json())
            .then(credData => setCred(credData))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:8081/student-list')
            .then(res => res.json())
            .then(studData => setStud(studData))
            .catch(err => console.log(err));
    }, []);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        Papa.parse(file, {
            header: true, // Treat the first row as header
            complete: (results) => {
                const data = results.data.map(row => ({
                    lrn: row["LRN"],
                    lastname: row["Last Name"],
                    firstname: row["First Name"],
                    middlename: row["Middle Name"],
                    birthday: row["Birthday"],
                }));

                setStud(data);

                // Send data to backend
                fetch('http://localhost:8081/upload-students', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            },
        });
    };

    const csvHeaders = [
        { label: "LRN", key: "lrn" },
        { label: "Last Name", key: "lastname" },
        { label: "First Name", key: "firstname" },
        { label: "Middle Name", key: "middlename" },
        { label: "Birthday", key: "birthday" },
    ];

    return (
        <>
            <div className="tw-flex tw-bg-gray-50 tw-min-h-dvh">
                <div>
                    <Sidebar />
                </div>
                <div className="tw-flex sm:tw-flex-wrap tw-flex-col tw-w-full md:tw-mx-20 md:tw-mt-[100px] sm:tw-m-5 tw-align-top">
                    <label className="tw-text-center tw-text-5xl tw-pb-[100px]">Enrolled Students</label>
                    <Searchbar />
                    <div className="tw-flex tw-justify-between tw-mb-4">
                        <input type="file" accept=".csv" onChange={handleFileUpload} />
                        <CSVLink 
                            headers={csvHeaders}
                            data={studData}
                            filename={"students.csv"}
                            className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded"
                        >
                            Export CSV
                        </CSVLink>
                    </div>
                    <div className="category table-striped table-responsive tw-w-[100%] sm:tw-w-full tw-flex tw-align-center tw-flex-col">
                        <table className="table table-striped tw-text-center">
                            <thead className="tw-text-center">
                                <tr>
                                    <th scope="col">LRN</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Middle Name</th>
                                    <th scope="col">Birthday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studData.map((d, i) => (
                                    <tr key={i}>
                                        <th>{d.lrn}</th>
                                        <td>{d.lastname}</td>
                                        <td>{d.firstname}</td>
                                        <td>{d.middlename}</td>
                                        <td>{d.birthday}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}