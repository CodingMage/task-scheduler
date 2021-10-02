import React from "react";
import {
  AnkaroLogo,
  Search,
  Settings,
  Plus,
  Patient,
  Calender,
} from "../icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_brand">
        <AnkaroLogo />
      </div>
      <div className="sidebar_nav">
        <div className="sidebar_nav-nav">
          <div className="nav_heading">Quick Action</div>
          <div className="nav_body">
            <div className="nav_body-link">
              <Search /> Search
            </div>
            <div className="nav_body-link">
              <Plus /> Add New Patient
            </div>
          </div>
        </div>
        <div className="sidebar_nav-nav">
          <div className="nav_heading">Manage</div>
          <div className="nav_body">
            <div className="nav_body-link calenderActive">
              <Calender /> Calender
            </div>
            <div className="nav_body-link">
              <Patient /> Manage Patient
            </div>
            <div className="nav_body-link">
              <Settings /> Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
