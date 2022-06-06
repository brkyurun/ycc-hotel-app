function CalendarContainer(props) {
  return (
    <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="75"
        cy="75"
        r="72.5"
        fill={props.primary}
        stroke={props.stroke}
        strokeWidth="5"
      />
      <path
        d="M99 48H96V42H90V48H60V42H54V48H51C47.7 48 45 50.7 45 54V102C45 105.3 47.7 108 51 108H99C102.3 108 105 105.3 105 102V54C105 50.7 102.3 48 99 48ZM99 102H51V63H99V102Z"
        fill={props.secondary}
      />
    </svg>
  );
}

export default CalendarContainer;
