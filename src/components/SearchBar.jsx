import { useState } from "react";

const SearchBar = ({pageNum, setPageNum}) => {

    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchText){
            if (pageNum < 3) {
                setPageNum(pageNum + 1);
              } else {
                setPageNum(1);
              }
        }else{
            alert('Please enter a search term');
        }
    };

    return (
        <form
            className="flex items-center w-full max-w-md mx-auto relative "
        >
            {/* Input Field */}
            <input
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 text-gray-100 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-full focus:outline-none focus:ring-1 focus:ring-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.9)]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {/* Submit Button */}
            <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-b from-gray-500 to-gray-700 text-white rounded-r-full flex items-center justify-center hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-1 focus:ring-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.9)]"
                onClick={handleSearch}
            >
                🔍
            </button>
        </form>
    );
};

export default SearchBar;
