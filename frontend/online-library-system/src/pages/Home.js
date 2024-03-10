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
                <div class="tw-absolute tw-inset-0 tw-bg-gray-100 tw-bg-opacity-[90%] tw-y-gap-5">
                <Header/>
                <div class="tw-flex tw-flex-col tw-items-center tw-w-full ">
                    <div class="jumbotron jumbotron-fluid tw-my-[100px] tw-text-center">
                        <h1 class="display-4">Online Archive System</h1>
                        <p class="lead">For the students of Regional Science High School Region 1</p>
                    </div>

                    <div class="md:tw-w-[60%] sm:tw-w-full sm:tw-px-8">
                        <div class="">
                            <Searchbar search={handleSearch}/>
                        </div>
                        
                        <Category search={searchVal} category={"all-categ"}/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}