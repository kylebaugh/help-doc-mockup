import React, { useEffect, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

const MenuItem = ({ item, level, isExpanded, toggleExpand, renderMenu }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                // Expand: Set max-height to the element's scrollHeight
                contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
            } else {
                // Collapse: Set max-height to 0px
                contentRef.current.style.maxHeight = "0px";
            }
        }
    }, [isExpanded]);

    const hasChildren = item.children && item.children.length > 0;

    // Determine the icon
    const icon = hasChildren
        ? isExpanded
            ? "📖" // Open book for expanded items
            : "📘" // Closed book for collapsed items
        : "📄"; // Paper document for items with no children

    return (
        <li
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
                    <span className="ml-2">
                        {isExpanded ? <IoMdArrowDropup /> : <MdArrowDropDown />}
                    </span>
                )}
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                    maxHeight: "0px", // Default collapsed state
                }}
            >
                {hasChildren && renderMenu(item.children, level + 1)}
            </div>
        </li>
    );
};

export default MenuItem;
