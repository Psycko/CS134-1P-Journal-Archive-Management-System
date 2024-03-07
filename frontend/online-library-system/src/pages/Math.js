import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";


export default function MathManuscript() {
    return (
        <>
        <div class="tw-bg-[url('/src/img/RSHS_1_Logo.png')] tw-bg-center tw-bg-no-repeat tw-bg-[length:500px_500px] tw-bg-fixed tw-min-h-dvh">
            <div class="tw-absolute tw-inset-0 tw-bg-white tw-bg-opacity-[60%]">
                <Header/>

<<<<<<< Updated upstream
            <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Mathematics</h1>    
            <Searchbar/>  
            <Category category={"math-categ"}/>          
=======
                <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Mathematics</h1>    
                <Searchbar search={handleSearch}/>  
                <Category search={searchVal} category={"math-categ"}/>         
            </div>
        </div> 
>>>>>>> Stashed changes
        </>
       
    )
}