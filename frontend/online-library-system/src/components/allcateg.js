import { useEffect, useState } from "react"
import "../layout/table.css"


export default function AllCateg() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://6841-136-158-65-12.ngrok-free.app/all-categ',
        {
            method: "get",
            headers: new Headers({
                "ngrok-skip-browser-warning": "89420",
            }),
        })
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
        
    }, [])
    
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
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}