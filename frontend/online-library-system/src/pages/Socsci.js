import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";


export default function SocSci() {
    return (
        <>
<<<<<<< Updated upstream
            <Header/>
            <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Social Science</h1>    
            <Searchbar/>
            <Category category={"soc-sci-categ"} />            
=======
        <div class="tw-bg-[url('/src/img/RSHS_1_Logo.png')] tw-bg-center tw-bg-no-repeat tw-bg-[length:500px_500px] tw-bg-fixed tw-min-h-dvh">
            <div class="tw-absolute tw-inset-0 tw-bg-white tw-bg-opacity-[60%]">
                <Header/>
                <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Social Science</h1>    
                <Searchbar search={handleSearch}/>
                <Category search={searchVal} category={"soc-sci-categ"} />         
            </div>
        </div>   
>>>>>>> Stashed changes
        </>
       
    )
}