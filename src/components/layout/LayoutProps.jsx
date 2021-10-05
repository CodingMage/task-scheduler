import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { Cancel, CheckIn, Clock, Close, Edit, Exit, Happy } from "../icons";
import Boy from "../../asset/Boy.png";

export const ContentMarkUp = ({ closeTooltip, appointmentData }) => {
  console.log(appointmentData);
  return (
    <div className="tooltip">
      <div className="tooltip-header">
        <div className="tooltip-header-text">{appointmentData.title}</div>
        <div className="tooltip-header-icon" onClick={() => closeTooltip()}>
          <Close />
        </div>
      </div>
      <div className="tooltip-content">
        <div className="tooltip-content_left">
          <div className="tooltip-content_left-img">
            <img src={Boy} alt="" />
          </div>
          <div className="tooltip-content_left-text">
            {appointmentData.patient}
          </div>
        </div>

        <div className="tooltip-content-icon">
          <Exit />
        </div>
      </div>

      <div className="tooltip-subContent">
        <Clock />{" "}
        <span>
          {appointmentData.startDate.toUTCString()}-{" "}
          {appointmentData.endDate.toUTCString()}
        </span>
      </div>

      <div className="tooltip-footer">
        <Happy />
        <span>
          <img src={Boy} alt="" />
          Dr Mayowa Afolabi
        </span>
      </div>
      <div className="tooltip-divider"></div>
      <div className="tooltip-bottom">
        <div className="tooltip-bottom_left">
          <div className="tooltip-bottom_left-btn btn1">
            Check in <CheckIn />
          </div>
          <div className="tooltip-bottom_left-btn btn2">
            Cancel <Cancel />
          </div>
        </div>
        <div className="tooltip-bottom_right">
          <Edit />
        </div>
      </div>
    </div>
  );
};

export const Header = ({ children, appointmentData, ...restProps }) => (
  <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData}>
    <div className="rm">{/* <button>{appointmentData.title}</button> */}</div>
  </AppointmentTooltip.Header>
);

export const ExternalViewSwitcher = ({
  isActive,
  setIsActive,
  setCurrentViewName,
}) => {
  return (
    <div className="switch-container">
      <div className="switch_list">
        <div
          className={`switch_list-day ${isActive && "activeDay"}`}
          onClick={() => {
            setIsActive(!isActive);
            setCurrentViewName("Day");
          }}
        >
          Day
        </div>
        <div
          className={`switch_list-day ${!isActive && "activeDay"}`}
          onClick={() => {
            setIsActive(!isActive);
            setCurrentViewName("Week");
          }}
        >
          Week
        </div>
      </div>
    </div>
  );
};
