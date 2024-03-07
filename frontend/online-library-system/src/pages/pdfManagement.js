import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"


export default function PDFManagement() {
    const [primaryData, setPrimary] = useState([]);
    const [data, setData] = useState([]);
    const [pdfStats, setPdfStats] = useState([]);
    const [deleted, setDelete] = useState();
    const [edited, setEdit] = useState();

    useEffect(()=>{
       
        fetch('http://localhost:8081/all-categ', {
        //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
        method: "get",
        // headers: new Headers({
            //   "ngrok-skip-browser-warning": "89420",
            // }),
        })  
        .then(res => res.json())
        .then(data => { 
            const edited = data.map((item) => ({...item, state: false}) );
            const edited2 = data.map((item) => ({...item, state: false}) );
            setData(edited);
            
            setPrimary(edited2);}
            )
        .catch(err => console.log(err));
    }, [deleted, edited]);

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
    }, [deleted, edited]);


    
    const editButton = () => {
       const editData = data.map((d) =>
       ( {...d }) )
       
       setData(editData); 
      
    };

    const editValue = (e, index) => {

        const editData = data.map((item, i) => 
            i === index ? {...item, [e.target.name]: e.target.value} : item
        );

        setData(editData);
    };

    const deleteButton = (e, title) => {
        e.preventDefault();
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


        setDelete(true);

        
        };
        
    const doneButton = (e, d) => {
        e.preventDefault();
        var isTrue = false;
        
        primaryData.forEach((item) => {

            if (JSON.stringify(item) === JSON.stringify(d)) {

                isTrue = true;
            }
        })

        if (isTrue){
            editButton();
            return;
        }
        fetch('http://localhost:8081/edit-pdf', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: d})
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })
            .then(res => res.json())
            .then(data => alert(data.status))
            .catch(err => console.log(err)); 
            setEdit(true);

            editButton();
            


            
    }
    
    


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
                       
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{d.state
                                ? <input value={d.title} name="title" onChange={(e) => {editValue(e, i)}}></input>
                                : <>{d.title}</>}</td>
                            <td>{d.state
                                ? <select name="category" value={d.category} onChange={(e)=> {editValue(e, i)}}>
                                    <option value="Mathematics">Mathematics</option>
                                    <option value="Life Science">Life Science</option>
                                    <option value="Robotics">Robotics</option>
                                    <option value="Social Science">Social Science</option>
                                </select>
                                : <>{d.category}</>}</td>
                            <td>{d.state
                                ? <input value={d.year} name="year" onChange={(e) => {editValue(e, i)}}></input>
                                : <>{d.year}</>}</td>
                            <td class="tw-w-[30px]">{ d.state
                                ? <button class="btn btn-primary" onClick={(e) => {d.state = false; doneButton(e, d)}}>Done</button>
                                : <button class="btn btn-primary" onClick={() => {d.state = true;editButton(d)}}>Edit</button>
                            }</td>
                            <td class="tw-w-[30px]"><button class="btn btn-primary" onClick={(e) => deleteButton(e, d.title)}>Delete</button></td>
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