import React from "react";

const SearchBar = () => {
    return (
        <form
            className="flex items-center w-full max-w-md mx-auto relative "
        >
            {/* Input Field */}
            <input
                type="text"
                placeholder="Search"
                className="flex-grow px-4 py-2 text-gray-100 bg-gradient-to-b from-gray-400 to-gray-600 rounded-l-full focus:outline-none focus:ring-1 focus:ring-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.9)]"
            />
            {/* Submit Button */}
            <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-b from-gray-500 to-gray-700 text-white rounded-r-full flex items-center justify-center hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-1 focus:ring-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.9)]"
            >
                🔍
            </button>
        </form>
    );
};

export default SearchBar;
