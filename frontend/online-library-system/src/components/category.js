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
        <div class="tw-m-auto">
            <table class="tw-table-fixed tw-text-center tw-w-full">
                <thead class="tw-text-center tw-bg-steel-blue">
                    <tr class="tw-text-text-blue">
                        <th class="sm:tw-hidden">No.</th>
                        <th class="sm:tw-hidden tw-py-4">Title</th>
                        <th class="md:tw-hidden tw-py-4">Journal</th>
                        <th class="sm:tw-hidden">Category</th>
                        <th class="sm:tw-hidden">Year</th>
                        <th>Actions</th>
                        {/* <th scope="col"></th> */}
                    </tr>
                </thead>

                <tbody class="tw-divide-y tw-divide-gray-300 tw-bg-gray-100">
                    {data.map((d, i) => (
                    <tr key={i}>
                        <th class="sm:tw-hidden tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-gray-900">{i+1}</th>
                        <td class="tw-whitespace-nowrap tw-text-wrap tw-pl-4 tw-pr-3 tw-text-gray-900 sm:tw-pl-6 sm:tw-pt-4">
                            {d.title}
                            <dl class="md:tw-hidden">
                                <dt class="tw-sr-only">Category</dt>
                                <dd class="tw-pt-2">{d.category}</dd>
                                <dt class="tw-sr-only">Year</dt> 
                                <dd>{d.year}</dd>
                            </dl>
                        </td>
                        <td class="sm:tw-hidden tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-gray-900">{d.category}</td>
                        <td class="sm:tw-hidden tw-whitespace-nowrap tw-py-4 tw-pl-4 tw-pr-3 tw-text-gray-900">{d.year}</td>
                        <td class="tw-py-4  tw-pl-4 tw-pr-3 tw-justify-center">
                            <button class="tw-bg-btn-blue tw-border-none tw-mr-2 tw-outline-none hover:tw-bg-dark-steel tw-duration-500 tw-rounded-md" 
                                onClick={()=> ShowPDF(d.destination, d.title)}>
                                <i class="bi bi-eye-fill tw-text-xl tw-text-text-blue"></i>
                            </button>
                            <button class="tw-bg-btn-blue tw-border-none tw-ml-2 tw-outline-none hover:tw-bg-dark-steel tw-duration-500 tw-rounded-md" 
                                onClick={()=> DownloadPDF(d.destination, d.title)}>
                                <i class="bi bi-download tw-text-xl tw-text-text-blue"></i>
                            </button>
                        </td>
                        {/* <td class="tw-w-[30px]">
                            <button class="tw-bg-green tw-rounded-md tw-h-[40px] tw-px-4 tw-w-full tw-border-none tw-outline-none hover:tw-bg-dark-green tw-duration-500" 
                                onClick={()=> ShowPDF(d.destination, d.title)}>
                                <label class="tw-cursor-pointer tw-text-gray-100">Download</label>
                            </button>
                        </td> */}
                    </tr>

                    ))}
                </tbody>
            </table>
        </div>
    )
}