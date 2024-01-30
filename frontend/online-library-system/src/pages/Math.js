import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import MathCateg from "../components/mathcateg";

export default function MathManuscript() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Mathematics</h1>    
            <Searchbar/>  
            <MathCateg/>          
        </>
       
    )
}