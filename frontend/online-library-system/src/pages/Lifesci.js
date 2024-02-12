import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";

export default function LifeSci() {
    return (
        <>
            <Header/>

            <h1 class="tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">Life Science</h1>
            <Searchbar/>            
            <Category category={"life-sci-categ"}/>
        </>
       
    )
}