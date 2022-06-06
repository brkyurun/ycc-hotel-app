import CalendarComponent from "./CalendarComponent";
import BedComponent from "./BedComponent";
import PaymentComponent from "./PaymentComponent";

function Progress({ onFirst, onSecond, onThird }) {
  return (
    <section className="progress">
      <CalendarComponent isActive={onFirst} />
      <BedComponent isActive={onSecond} />
      <PaymentComponent isActive={onThird} />
    </section>
  );
}

export default Progress;
