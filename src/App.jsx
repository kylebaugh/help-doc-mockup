import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Page from "./components/Page";

function App() {
  const [sidebarWidth, setSidebarWidth] = useState(300); // Default width in pixels
  const isResizing = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Detect mobile view

  const handleMouseDown = (e) => {
    e.preventDefault();
    isResizing.current = true;
  };

  const handleMouseMove = (e) => {
    if (isResizing.current) {
      const newWidth = Math.max(200, Math.min(e.clientX, 600)); // Minimum 200px, Maximum 600px
      setSidebarWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    isResizing.current = false;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isMobile]);

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-grow relative">
        {/* Sidebar */}
        <div className={`${isMobile ? "" : "block"}`}>
          <Sidebar width={isMobile ? "0" : sidebarWidth} />
        </div>

        {/* Resizable Vertical Line for Desktop Only */}
        {!isMobile && (
          <div
            className="absolute top-0 h-full w-1 bg-gray-400 cursor-col-resize z-10"
            style={{
              left: `${sidebarWidth - 1}px`,
            }}
            onMouseDown={handleMouseDown}
          ></div>
        )}

        {/* Page Content */}
        <div
          className="bg-gray-100 flex-grow"
          style={{
            marginLeft: isMobile ? "0px" : `${sidebarWidth}px`,
          }}
        >
          <Page />
        </div>
      </div>
    </div>
  );
}

export default App;
