import React, { useState } from "react";

const menuItems = [
  {
    label: "Welcome",
    children: [],
  },
  {
    label: "Administration",
    children: [
      { label: "Users", children: [] },
      { label: "Permissions", children: [] },
    ],
  },
  {
    label: "Material",
    children: [
      {
        label: "Supplies",
        children: [
          { label: "Stationery", children: [] },
          { label: "Hardware", children: [] },
        ],
      },
      {
        label: "Inventory",
        children: [],
      },
    ],
  },
  {
    label: "HMMS Waste",
    children: [
      {
        label: "Chemical Waste",
        children: [
          { label: "Category A", children: [] },
          { label: "Category B", children: [] },
        ],
      },
    ],
  },
  {
    label: "HMMS Reporting and Analytics",
    children: [
      { label: "Reports", children: [] },
      { label: "Analytics", children: [] },
    ],
  },
];

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderMenu = (items, level = 0) => (
    <ul className={`space-y-1 pl-${level * 4}`}>
      {items.map((item) => (
        <li key={item.label}>
          <button
            onClick={() => toggleExpand(item.label)}
            className="flex items-center justify-between w-full text-left hover:bg-gray-100 p-2 rounded"
          >
            <span>{item.label}</span>
            {item.children.length > 0 && (
              <span className="ml-2">
                {expandedItems[item.label] ? "-" : "+"}
              </span>
            )}
          </button>
          {expandedItems[item.label] && item.children.length > 0 && (
            <div>{renderMenu(item.children, level + 1)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed top-16 left-0 w-64 h-full bg-gray-200 shadow">
        <nav className="p-4">{renderMenu(menuItems)}</nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-20 left-4 p-2 bg-gray-800 text-white rounded"
        >
          ☰
        </button>

        {/* Mobile Sidebar Modal */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white w-3/4 h-full shadow-md">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-4 text-left w-full"
              >
                Close
              </button>
              <nav className="p-4">{renderMenu(menuItems)}</nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
