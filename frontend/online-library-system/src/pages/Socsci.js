import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import SocsciCateg from "../components/socscicateg";

export default function SocSci() {
    return (
        <>
            <Header/>
            <h1 class="text-center">Social Science</h1>    
            <Searchbar/>
            <SocsciCateg />            
        </>
       
    )
}