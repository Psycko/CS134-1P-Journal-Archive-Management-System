import { useState} from 'react';

export default function Searchbar( {search} ) {

    const [value, setValue] = useState("");

    const submitSearch = (e) => {
        
        e.preventDefault();
        search(value);
    }

    return (
        <>
        <div>
            <nav class="navbar tw-pt-px tw-m-auto tw-w-[500px]">
                <div class="container-fluid mb-3 row" id="searchBar">
                <form class="d-flex" role="search" onSubmit={(e) => submitSearch(e)}>
                    <input class="tw-rounded-full tw-rounded-r-full tw-w-full tw-h-[45px] tw-border-none tw-outline-none tw-ring-1 tw-ring-gray-300 focus:tw-ring-gray-500 focus:tw-ring-1 tw-p-3 focus:tw-shadow-lg
                         focus:tw-duration-500" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}>
                        
                    </input>
                    <button class="tw-bg-green tw-rounded-full tw-px-[15px] tw-ml-[-45px] tw-border-none tw-outline-none hover:tw-bg-dark-green tw-duration-500" type="submit">
                        <i class="bi bi-search tw-text-white"></i>
                    </button>
                </form>
                </div>
            </nav>
        </div>
        </>
    )
}