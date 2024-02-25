export default function Searchbar() {
    return (
        <>
            <nav class="navbar tw-pt-px tw-m-auto tw-w-5/6">
                <div class="container-fluid mb-3 row" id="searchBar">
                <form class="d-flex" role="search">
                    <input class="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </nav>
        </>
    )
}