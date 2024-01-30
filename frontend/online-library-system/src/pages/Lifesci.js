import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import LifeSciCateg from "../components/lifescicateg";

export default function LifeSci() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Life Science</h1>
            <Searchbar/>            
            <LifeSciCateg/>
        </>
       
    )
}