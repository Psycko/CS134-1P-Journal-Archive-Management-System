import Header from "../components/navbar"
import Category from "../components/category"
import Searchbar from "../components/searchbar";

export default function Home() {
    return (
<<<<<<< Updated upstream
        <>
            <Header/>
            <div>
                <div class="jumbotron jumbotron-fluid tw-m-auto tw-w-full tw-p-20 tw-text-center">
                    <div class="container">
                        <h1 class="display-4">Research Title</h1>
                        <p class="lead">Insert significance of the study here. By the students, for the students</p>
=======
        <> 
            <div class="tw-bg-[url('/src/img/RSHS_1_Logo.png')] tw-bg-center tw-bg-no-repeat tw-bg-[length:500px_500px] tw-bg-fixed tw-min-h-dvh">
                <div class="tw-absolute tw-inset-0 tw-bg-white tw-bg-opacity-[90%]">
                    <Header/>
                    <div class="jumbotron jumbotron-fluid tw-m-auto tw-w-full tw-p-20 tw-text-center">
                        <div class="container">
                            <h1 class="display-4">Research Title</h1>
                            <p class="lead">Insert significance of the study here. By the students, for the students</p>
                        </div>

>>>>>>> Stashed changes
                    </div>

                    <Searchbar search={handleSearch}/>
                    <Category search={searchVal} category={"all-categ"}/>
                </div>
<<<<<<< Updated upstream

                <Searchbar/>
                <Category category={"all-categ"}/>
=======
>>>>>>> Stashed changes
            </div>
        </>
    )
}