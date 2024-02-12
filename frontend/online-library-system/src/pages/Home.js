import Header from "../components/navbar"
import Category from "../components/category"
import Searchbar from "../components/searchbar";

export default function Home() {
    return (
        <>
            <Header/>
            <div class="jumbotron jumbotron-fluid tw-m-auto tw-w-5/6 tw-p-20 tw-text-center">
                <div class="container">
                    <h1 class="display-4">Research Title</h1>
                    <p class="lead">Insert significance of the study here. By the students, for the students</p>
                </div>

            </div>
    
            <Searchbar/>
            <Category category={"all-categ"}/>
        </>
    )
}