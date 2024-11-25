import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import menuItems from "../assets/menuItems";
import MenuItem from "./MenuItem";

const Sidebar = ({ width, pageNum, setPageNum }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  // TEMP FUNCTION FOR POF PAGE NAVIGATION -- REMOVE ON PRODUCTION, INCLUDING THE FIRST LI OF THE ITEMS.MAP BELOW
  const handlePageChange = () => {
    if (pageNum < 3) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(1);
    }
  };

  const renderMenu = (items, level = 0) => (
    <ul>
      {items.map((item) => {
        const isExpanded = expandedItems[item.label];

        return (
          <MenuItem
            key={item.label}
            item={item}
            level={level}
            isExpanded={isExpanded}
            toggleExpand={toggleExpand}
            renderMenu={renderMenu}
            handlePageChange={handlePageChange}
          />
        );
      })}
    </ul>
  );


  return (
    <>
      {/* Desktop Sidebar (Always Visible) */}
      <div
        className="hidden md:block fixed left-0 bg-gray-200 shadow-md overflow-auto"
        style={{ width: `${width}px`, top: "4rem", height: "calc(100% - 4rem)" }} // Starts below header, 35% width
      >
        <nav className="p-4 overflow-x:scroll">{renderMenu(menuItems)}</nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-gray-200 shadow-md transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ width: "75%" }}
      >
        <nav className="p-4">{renderMenu(menuItems)}</nav>

        {/* Folder Tab (Collapsible Button) */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
        >
          {isSidebarOpen ? "<" : ">"}
        </button>
      </div>

      {/* Folder Tab (Visible when sidebar is collapsed on mobile) */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-r"
        >

        </button>
      )}
    </>
  );
};

export default Sidebar;