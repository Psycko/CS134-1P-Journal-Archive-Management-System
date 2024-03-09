import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";
import { useState } from "react";


export default function SocSci() {

    const [searchVal, setSearch] = useState("");
    
    const handleSearch= (searchValue) => {
        setSearch(searchValue);
    }

    return (
        <>
        <div class="tw-bg-[url('/src/img/RSHS_1_Logo.png')] tw-bg-center tw-bg-no-repeat tw-bg-[length:500px_500px] tw-bg-fixed tw-min-h-dvh">
            <div class="tw-absolute tw-inset-0 tw-bg-gray-100 tw-bg-opacity-[80%]">
                <Header/>
                <h1 class="display-4 tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Social Science</h1>    
                
                <div class="tw-flex tw-flex-col">
                    <div class="tw-ml-[880px]">
                        <Searchbar search={handleSearch}/>
                    </div>  
                    <Category search={searchVal} category={"soc-sci-categ"} />   
                </div>
            </div>
        </div>        
        </>
       
    )
}