import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';

export default function AccountManagement() {
  const [data, setData] = useState([]);
  const [primaryPass, setPass] = useState(); 

  useEffect(() => {
    fetch('http://localhost:8081/getCredentials', {
        //fetch('https://bde9-136-158-65-250.ngrok-free.app/' + category, {
        method: "get",
        // headers: new Headers({
            //   "ngrok-skip-browser-warning": "89420",
            // }),
        })  
        .then(res => res.json())
        .then(data => { 
            const edited = data.map((item) => ({...item, state: false}) );
            setData(edited);
              }
            )
        .catch(err => console.log(err));
    
  }, []);
  
  const editButton = (d) => {
    setPass(d.password);

    const editData = data.map((d) =>
       ( {...d }) )
       
    setData(editData); 
  }

  const deleteButton = (e, id) => {

  }


  const editValue = (e, index) => {
    data.map((item, i) => 
      i === index ? {...item, [e.target.name]: e.target.value} : item
    )
  }

  const doneButton = (e, d) => {
    e.preventDefault();
    

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
                            <th scope="col">LRN</th>
                            <th scope="col">Password</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        
                    </thead>

                    <tbody>
                        {data.map((d, i) => (
                       
                        <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{d.state
                                ? <input value={d.lrn} name="lrn" onChange={(e) => {editValue(e, i)}}></input>
                                : <>{d.lrn}</>}</td>
                            <td>{d.state
                                ? <input value={d.password} name="password" onChange={(e) => {editValue(e, i)}}></input>
                                : <>{d.lrn}</>}</td>
                            <td class="tw-w-[30px]">{ d.state
                                ? <button class="tw-bg-green tw-rounded-md tw-h-[40px] tw-px-4 tw-w-full tw-border-none tw-outline-none hover:tw-bg-dark-green tw-duration-500" 
                                    onClick={(e) => {d.state = false; doneButton(e, d)}}>
                                        <label class="tw-cursor-pointer tw-text-gray-100">Done</label></button>
                                : <button class="tw-bg-green tw-rounded-md tw-h-[40px] tw-px-4 tw-w-full tw-border-none tw-outline-none hover:tw-bg-dark-green tw-duration-500" 
                                    onClick={() => {d.state = true;editButton(d)}}>
                                        <label class="tw-cursor-pointer tw-text-gray-100">Edit</label></button>
                            }</td>
                            <td class="tw-w-[30px]">
                                <button class="tw-bg-green tw-rounded-md tw-h-[40px] tw-px-4 tw-w-full tw-border-none tw-outline-none hover:tw-bg-dark-green tw-duration-500" 
                                    onClick={(e) => deleteButton(e, d.id)}>
                                        <label class="tw-cursor-pointer tw-text-gray-100">Delete</label></button>
                            </td>
                        </tr>

                        ))}
                    </tbody>
                </table>
            </div>
      </div>
    </>
  )
}
