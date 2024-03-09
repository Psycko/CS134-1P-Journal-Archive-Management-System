import Header from "../components/navbar"
import Category from "../components/category"
import Searchbar from "../components/searchbar";
import { useState } from "react";

export default function Home() {

    const [searchVal, setSearch] = useState("");
    
    const handleSearch= (searchValue) => {
        setSearch(searchValue);
    }

    return (
        <>
            <div class="tw-bg-[url('/src/img/RSHS_1_Logo.png')] tw-bg-center tw-bg-no-repeat tw-bg-[length:500px_500px] tw-bg-fixed tw-min-h-dvh">
                <div class="tw-absolute tw-inset-0 tw-bg-white tw-bg-opacity-[80%]">
                <Header/>
                <div class="jumbotron jumbotron-fluid tw-m-auto tw-w-full tw-p-20 tw-text-center">
                    <div class="container">
                        <h1 class="display-4">Online Archive System</h1>
                        <p class="lead">For the students of Regional Science High School Region 1</p>
                    </div>
                </div>

                <Searchbar search={handleSearch}/>
                <Category search={searchVal} category={"all-categ"}/>
                </div>
            </div>
        </>
    )
}