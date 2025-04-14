import React from "react";
import NavigationBar from "./NavigationBar";
import "../Styles.css";

function SidePanel({ setCurrentPage, currentPage }) {
  return (
    <div className="side_panel">
      <NavigationBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
}

export default SidePanel;