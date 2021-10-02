import React from "react";
import SchedulerShell from "./Scheduler";
import Sidebar from "./Sidebar";

function Shell() {
  return (
    <div className="shell flex container_fluid">
      <div className="shell_sidebar">
        <Sidebar />
      </div>
      <div className="shell_scheduler">
        <SchedulerShell />
      </div>
    </div>
  );
}

export default Shell;
