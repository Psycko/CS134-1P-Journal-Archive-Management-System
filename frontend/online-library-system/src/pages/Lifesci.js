import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";

export default function LifeSci() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Life Science</h1>
            <Searchbar/>            
            <Category category={"life-sci-categ"}/>
        </>
       
    )
}