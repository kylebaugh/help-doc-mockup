import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

const menuItems = [
  {
    label: "Welcome",
    children: [
      { label: "Using the Search Screen", children: [] },
      { label: "Password security", children: [] },
      { label: "Work Station Set Up", children: [] },
    ],
  },
  {
    label: "Administration",
    children: [
      {
        label: "System", children: [
          {
            label: "Site Configuration", children: [
              { label: "Site Configuration Screen Reference", children: [] },
              { label: "Setting Site Configurations", children: [] },
            ]
          },
          {
            label: "Edits", children: [
              { label: "Edits Screen Reference", children: [] },
              { label: "Modifying Lists of Values", children: [] },
            ]
          },
        ]
      },
      {
        label: "General", children: [
          {
            label: "Facility", children: [
              { label: "Facility Screen Reference", children: [] },
              { label: "Creating Your Facility", children: [] },
            ]
          },
          {
            label: "Action/Meeting", children: [
              { label: "Action/Meeting Screen Reference", children: [] },
              { label: "Creating Actions", children: [] },
            ]
          },
        ]
      },
      { label: "Material", children: [] },
      { label: "Waste", children: [] },
      { label: "Queries", children: [] },
    ],
  },
  {
    label: "Material",
    children: [
      {
        label: "Catalog",
        children: [
          {
            label: "Company", children: [
              { label: "Company Screen Reference", children: [] },
              { label: "Creating a company record", children: [] },
            ]
          },
          {
            label: "Product Groups", children: [
              { label: "Product Groups Screen Reference", children: [] },
              { label: "Creating Product Groups", children: [] },
            ]
          },
        ],
      },
      {
        label: "Requests",
        children: [],
      },
    ],
  },
  {
    label: "HMMS Waste",
    children: [
      { label: "Flow of Waste through HMMS", children: [] },
      {
        label: "Characterization",
        children: [
          {
            label: "Waste Steams", children: [
              { label: "Waste Steam Screen Reference", children: [] },
              { label: "Creating Waste Steam", children: [] },
            ]
          },
          {
            label: "Waste Profiles", children: [
              { label: "Waste Profiles Screen Reference", children: [] },
              { label: "Creating Waste Profiles", children: [] },
            ]
          },
        ],
      },
    ],
  },
  {
    label: "HMMS Reporting and Analytics",
    children: [
      {
        label: "Reports and Analytics", children: [
          { label: "Reports and Analytics Screen Reference", children: [] },
          { label: "Creating Reports and Analytics", children: [] },
        ]
      },
      {
        label: "Air", children: [
          { label: "HAPS Report", children: [] },
          { label: "VOC Report", children: [] },
          { label: "Emissions", children: [] },
        ]
      },
    ],
  },
];

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderMenu = (items, level = 0) => (

    <ul>
      {items.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems[item.label];

        // Determine the icon
        const icon = hasChildren
          ? isExpanded
            ? "📖" // Open book for expanded items
            : "📘" // Closed book for collapsed items
          : "📄"; // Paper document for items with no children

        return (
          <li
            key={item.label}
            className="py-1"
            style={{
              paddingLeft: `${level * 16}px`, // Indent based on level
            }}
          >
            <button
              onClick={() => hasChildren && toggleExpand(item.label)}
              className="flex items-center justify-between w-full text-left hover:bg-gray-100 p-2 rounded"
            >
              <span className="flex items-center">
                <span className="mr-2">{icon}</span> {/* Add icon */}
                {item.label}

              </span>
              {hasChildren && (
                <span className="ml-2">{isExpanded ? "-" : "+"}</span>
              )}
            </button>
            {isExpanded && hasChildren && (
              <div>{renderMenu(item.children, level + 1)}</div>
            )}

          </li>
        );
      })}

    </ul>
  );

  return (
    <>
      {/* Desktop Sidebar (Always Visible) */}
      <div
        className="hidden md:block fixed left-0 bg-gray-200 shadow-md overflow-auto"
        style={{ width: "35%", top: "4rem", height: "calc(100% - 4rem)" }} // Starts below header, 35% width
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