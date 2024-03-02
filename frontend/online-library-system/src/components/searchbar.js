export default function Searchbar() {
    return (
        <>
        <div>
            <nav class="navbar tw-pt-px tw-m-auto tw-w-[500px]">
                <div class="container-fluid mb-3 row" id="searchBar">
                <form class="d-flex" role="search">
                    <input class="tw-rounded-md tw-w-full tw-h-[45px] tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-200 focus:tw-ring-gray-700 focus:tw-ring-2 tw-duration-500 tw-p-3 tw-mr-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search">
                        
                    </input>
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
                </div>
            </nav>
        </div>
        </>
    )
}