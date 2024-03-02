import Header from "../components/navbar"
import Category from "../components/category"
import Searchbar from "../components/searchbar";

export default function Home() {
    return (
        <>
            <Header/>
            <div class="tw-min-h-dvh tw-w-full tw-flex tw-flex-col">
                <div class="jumbotron jumbotron-fluid tw-m-auto tw-w-full tw-p-20 tw-text-center">
                    <div class="container">
                        <h1 class="display-4">Research Title</h1>
                        <p class="lead">Insert significance of the study here. By the students, for the students</p>
                    </div>

                </div>

                <Searchbar/>
                <Category category={"all-categ"}/>
            </div>
        </>
    )
}