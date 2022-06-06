import CalendarContainer from "./assets/CalendarContainer";

function CalendarComponent(props) {
  return (
    <div className={`svg-container ${props.isActive ? "active" : "inactive"}`}>
      <CalendarContainer
        primary={props.isActive ? "#fff" : ""}
        secondary={props.isActive ? "#132f56" : "#7589a4"}
      />
      <p>Otel ve Tarih Seçimi</p>
    </div>
  );
}

export default CalendarComponent;
