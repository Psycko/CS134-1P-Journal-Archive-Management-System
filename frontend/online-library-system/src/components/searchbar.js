import '../App.css';

export default function Searchbar() {
    return (
        <>
            <nav class="navbar">
                <div class="container-fluid mb-3 row" id="searchBar">
                <form class="d-flex" role="search">
                    <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success col-md-2" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </>
    )


}