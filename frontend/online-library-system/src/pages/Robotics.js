import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import Category from "../components/category";


export default function Robotics() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Robotics</h1>        
            <Searchbar/>
            <Category category={"robotics-categ"} />        
        </>
       
    )
}