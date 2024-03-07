import { useEffect, useState } from "react"
import axios from "axios";

export default function Category({search, category}) {
    const [data, setData] = useState([]);
    useEffect(()=>{
        if (search.length === 0)
        {
            fetch('http://localhost:8081/' + category, {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "get",
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })  
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
        }

        else
        {
            const journal = {
                Search: search,
                Categ: category,
            }
            fetch('http://localhost:8081/searchbar-category', {
            //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(journal)
           // headers: new Headers({
             //   "ngrok-skip-browser-warning": "89420",
               // }),
            })  
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
        }
            
           

            
            
        

    }, [search])

    const ShowPDF = (pdfdestination, title) => {
        
        fetch('http://localhost:8081/viewAdd', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Title: title})
        });

        window.open('http://localhost:8081/uploads/' + pdfdestination, "_blank", "noreferrer");
    }

    const DownloadPDF = (pdfdestination, title) => {

        fetch('http://localhost:8081/downloadAdd', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({Title: title})
        });

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
        <div class="category table-striped table-responsive tw-m-auto tw-w-[70%]">
            <table class="table table-striped tw-text-center">
                <thead class="tw-text-center">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Category</th>
                        <th scope="col">Year Published</th>
                        <th scope="col">View</th>
                        <th scope="col">Download</th>
                    </tr>
                    
                </thead>

                <tbody>
                    {data.map((d, i) => (
                    <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{d.title}</td>
                        <td>{d.category}</td>
                        <td>{d.year}</td>
                        <td class="tw-w-[30px]"><button class="btn btn-primary" onClick={()=> ShowPDF(d.destination, d.title)}>View</button></td>
                        <td class="tw-w-[30px]"><button class="btn btn-primary" onClick={() => DownloadPDF(d.destination, d.title)}>Download</button></td>
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}