import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";


export default function SocSci() {
    return (
        <>
            <Header/>
            <h1 class="text-center">Social Science</h1>    
            <Searchbar/>
            <Category category={"soc-sci-categ"} />            
        </>
       
    )
}