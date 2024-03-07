import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";
import { useState } from "react";

export default function LifeSci() {


    const [searchVal, setSearch] = useState("");
    
    const handleSearch= (searchValue) => {
        setSearch(searchValue);
    }

    return (
        <>
            <Header/>

            <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Life Science</h1>
            <Searchbar search={handleSearch}/>            
            <Category search={searchVal} category={"life-sci-categ"}/>
        </>
       
    )
}