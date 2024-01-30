import Header from "../components/navbar"
import Searchbar from "../components/searchbar";
import RoboticsCateg from "../components/roboticscateg";

export default function Robotics() {
    return (
        <>
            <Header/>

            <h1 class="text-center">Robotics</h1>        
            <Searchbar/>
            <RoboticsCateg />        
        </>
       
    )
}