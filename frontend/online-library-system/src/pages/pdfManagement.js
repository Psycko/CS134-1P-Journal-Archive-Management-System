import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"


export default function PDFManagement() {

    const [data, setData] = useState([]);
    const [pdfStats, setPdfStats] = useState([]);
    const [inputBool, setInput] = useState(true);
    const [deleted, setDelete] = useState();
    useEffect(()=>{
       
        fetch('http://localhost:8081/all-categ', {
        //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
        method: "get",
        // headers: new Headers({
            //   "ngrok-skip-browser-warning": "89420",
            // }),
        })  
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    }, [deleted]);

    useEffect(() => {
        fetch('http://localhost:8081/pdf-statistics', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "get",
            // headers: new Headers({
                //   "ngrok-skip-browser-warning": "89420",
                // }),
            })  
            .then(res => res.json())
            .then(data => setPdfStats(data))
            .catch(err => console.log(err));
    }, [])
    
    const editButton = () => {
        if (inputBool) {
            setInput(false);
        } else {
            setInput(true);
        }
            
    }

    const deleteButton = (title) => {
        fetch('http://localhost:8081/delete-pdf', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title: title})
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })  
            .then(res => res.json())
            .then(data => alert(data.status))
            .catch(err => console.log(err));


        setDelete("true");

        
        };
        


    

    return (
        <>
        <div class="tw-flex tw-bg-gray-50 tw-min-h-dvh">
            <div>
                <Sidebar/>
            </div>
            
            
            <div class="category table-striped table-responsive tw-m-auto tw-w-[70%]">
                <table class="table table-striped tw-text-center">
                    <thead class="tw-text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Category</th>
                            <th scope="col">Year Published</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        
                    </thead>

                    <tbody>
                        {data.map((d, i) => (
                        
                        d.state = true,
                        
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td><input value={d.title} disabled={inputBool}/></td>
                            <td><input value={d.category} disabled={inputBool} /></td>
                            <td><input value={d.year} disabled={inputBool} /></td>
                            <td class="tw-w-[30px]"><button class="btn btn-primary" onClick={editButton}>Edit</button></td>
                            <td class="tw-w-[30px]"><button class="btn btn-primary" onClick={() => deleteButton(d.title)}>Delete</button></td>
                        </tr>

                        ))}
                    </tbody>
                </table>


                <table class="table table-striped tw-text-center" >
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