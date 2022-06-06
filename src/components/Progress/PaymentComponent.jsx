import PaymentContainer from "./assets/PaymentContainer";

function PaymentComponent(props) {
  return (
    <div className={`svg-container ${props.isActive ? "active" : "inactive"}`}>
      <PaymentContainer
        stroke={props.isActive ? "" : "#7589a4"}
        primary={props.isActive ? "#fff" : "#132f56"}
        secondary={props.isActive ? "#132f56" : "#7589a4"}
      />
      <p>Önizleme ve Ödeme İşlemleri</p>
    </div>
  );
}

export default PaymentComponent;
