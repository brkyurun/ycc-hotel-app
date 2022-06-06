import BedContainer from "./assets/BedContainer";

function BedComponent(props) {
  return (
    <div className={`svg-container ${props.isActive ? "active" : "inactive"}`}>
      <BedContainer
        stroke={props.isActive ? "" : "#7589a4"}
        primary={props.isActive ? "#fff" : "#132f56"}
        secondary={props.isActive ? "#132f56" : "#7589a4"}
      />
      <p>Oda Tipi ve Manzara Seçimi</p>
    </div>
  );
}

export default BedComponent;
