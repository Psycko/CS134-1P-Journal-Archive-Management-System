import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";


export default function MathManuscript() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Mathematics</h1>    
            <Searchbar/>  
            <Category category={"math-categ"}/>          
        </>
       
    )
}