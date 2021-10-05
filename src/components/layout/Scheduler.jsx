import * as React from "react";
import { More } from "../icons";
import {
  appointmentData,
  // resourcesData,
  grouping,
  res,
  doctors,
} from "./appointments";
import Paper from "@material-ui/core/Paper";
import {
  ViewState,
  GroupingState,
  IntegratedGrouping,
  // IntegratedEditing,
  // EditingState,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  // ViewSwitcher,
  AppointmentForm,
  DateNavigator,
  TodayButton,
  AppointmentTooltip,
  Resources,
  GroupingPanel,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import { ContentMarkUp, Header, ExternalViewSwitcher } from "./LayoutProps.jsx";
// const currentDate = "2018-11-01";

const findColorByGroupId = (id) => doctors.find((item) => item.id === id).color;
// const findDoctorByGroupId = (id) =>
//   doctors.find((item) => item.id === id).color;

const useGroupingStyles = (group) => {
  const color = findColorByGroupId(group.id);
  return makeStyles(({ spacing }) => ({
    doctor: {
      paddingLeft: "16px",
      paddingRight: "25px",
      "& div": {
        backgroundColor: color,
        height: "30px",
        width: "100%",
        borderRadius: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#000000",
        fontstyle: "normal",
        fontWeight: "bold",
        fontSize: "14px",
        lineHeight: "19px",
        paddingTop: "5px",
        paddingBottom: "5px",
      },
    },
    icon: {
      cursor: "pointer",
    },
  }))();
};

const GroupingPanelCell = React.memo(({ group, ...restProps }) => {
  const classes = useGroupingStyles(group);

  return (
    <GroupingPanel.Cell
      id="doctors"
      className={classes.doctor}
      group={group}
      {...restProps}
    >
      <More />
    </GroupingPanel.Cell>
  );
});
const SchedulerShell = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [currentViewName, setCurrentViewName] = React.useState("Day");
  const [isVisible, setIsVisible] = React.useState(false);

  const closeTooltip = () => {
    setIsVisible(!isVisible);
  };

  const Content = ({ children, appointmentData, group, ...restProps }) => {
    console.log(group);
    return (
      <AppointmentTooltip.Content
        {...restProps}
        appointmentData={appointmentData}
      >
        <ContentMarkUp
          closeTooltip={closeTooltip}
          appointmentData={appointmentData}
        />
      </AppointmentTooltip.Content>
    );
  };
  return (
    <div className="schedulerShell">
      <ExternalViewSwitcher
        isActive={isActive}
        setIsActive={setIsActive}
        setCurrentViewName={setCurrentViewName}
      />

      <Paper className="scheduler-paper">
        <Scheduler data={appointmentData} height={660}>
          <ViewState
            currentViewName={currentViewName}
            defaultCurrentDate="2018-06-27"
          />
          <GroupingState grouping={grouping} />
          <DayView startDayHour={7} endDayHour={17} />
          <WeekView startDayHour={10} endDayHour={19} />

          <Toolbar />
          <TodayButton />
          <DateNavigator />
          {/* <ViewSwitcher /> */}
          <Appointments />

          <Resources data={res} mainResourceName={"doctors"} />
          <IntegratedGrouping />
          <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            visible={isVisible}
            onVisibilityChange={() => closeTooltip()}
          />
          <AppointmentForm />

          <GroupingPanel cellComponent={GroupingPanelCell} />
        </Scheduler>
      </Paper>
    </div>
  );
};

export default SchedulerShell;
