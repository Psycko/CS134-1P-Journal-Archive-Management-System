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
                <div class="tw-flex tw-flex-col tw-items-center tw-w-full">
                    <h1 class="display-4 tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Social Science</h1>    
                    
                    <div class="md:tw-w-[60%] sm:tw-w-full sm:tw-px-8 md:tw-bg-white tw-p-6 tw-rounded-lg md:tw-shadow-md tw-bg-opacity-[80%]">
                        <div class="">
                            <Searchbar search={handleSearch}/>
                        </div>  
                        <Category search={searchVal} category={"soc-sci-categ"} />  
                    </div>
                </div>
            </div>
        </div>        
        </>
       
    )
}