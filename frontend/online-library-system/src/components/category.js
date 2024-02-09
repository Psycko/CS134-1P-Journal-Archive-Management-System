import { useEffect, useState } from "react"
import "../layout/table.css";
import axios from "axios";




export default function Category({category}) {
    const [data, setData] = useState([])
    useEffect(()=>{
        console.log(category);
        fetch('http://localhost:8081/' + category)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
        
    }, [])

    const ShowPDF = (pdfdestination) => {
  
        window.open('http://localhost:8081/uploads/' + pdfdestination, "_blank", "noreferrer");
    }

    const DownloadPDF = (pdfdestination) => {
        axios.get('http://localhost:8081/uploads/' + pdfdestination, {
            responseType: 'blob',
        })
        .then((obj) => {
            const url = URL.createObjectURL(obj.data);
            const a = document.createElement('a');
            a.href = url;
            a.download = pdfdestination;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        })
        .catch(err => console.error(err));
    }
    return(
        <div className="category">
            <table class="table table-striped table-responsive text-center">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Year Published</th>
                        
                    </tr>
                    
                </thead>

                <tbody>
                    {data.map((d, i) => (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{d.title}</td>
                        <td>{d.category}</td>
                        <td>{d.year}</td>
                        <td><button class="btn btn-primary" onClick={()=> ShowPDF(d.destination)}>View</button></td>
                        <td><button class="btn btn-primary" onClick={() => DownloadPDF(d.destination)}>Download</button></td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}