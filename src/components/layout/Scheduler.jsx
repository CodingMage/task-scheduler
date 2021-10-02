import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

// const currentDate = "2018-11-01";
const schedulerData = [];

const SchedulerShell = () => (
  <Paper>
    <Scheduler data={schedulerData} height={660}>
      <ViewState
        defaultCurrentDate="2018-07-25"
        defaultCurrentViewName="Week"
      />

      <DayView startDayHour={9} endDayHour={18} />
      <WeekView startDayHour={10} endDayHour={19} />

      <Toolbar />
      <ViewSwitcher />
      <Appointments />
    </Scheduler>
  </Paper>
);

export default SchedulerShell;
