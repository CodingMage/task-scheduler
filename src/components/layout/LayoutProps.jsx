import { AppointmentTooltip } from "@devexpress/dx-react-scheduler-material-ui";
import { Clock, Close, Exit, Happy } from "../icons";
import Boy from "../../asset/Boy.png";

export const Content = ({ children, appointmentData, ...restProps }) => {
  console.log(appointmentData);
  return (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <div className="tooltip">
        <div className="tooltip-header">
          <div className="tooltip-header-text">Full Checkup</div>
          <div className="tooltip-header-icon">
            <Close />
          </div>
        </div>
        <div className="tooltip-content">
          <div className="tooltip-content-img">
            <img src={Boy} alt="" />
          </div>
          <div className="tooltip-content-text">Arnold Roland</div>
          <div className="tooltip-content-icon">
            <Exit />
          </div>
        </div>

        <div className="tooltip-subContent">
          <Clock /> 20 August, 2021 8:30am - 20 August, 2020 9:30am
        </div>

        <div className="tooltip-footer">
          <Happy />
          <img src={Boy} alt="" />
          Dr Mayowa Afolabi
        </div>
      </div>
    </AppointmentTooltip.Content>
  );
};

export const Header = ({ children, appointmentData, ...restProps }) => (
  <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData}>
    <div className="">
      <button>{appointmentData.title}</button>
    </div>
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
