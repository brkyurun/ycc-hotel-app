function BedContainer(props) {
  return (
    <svg viewBox="0 0 150 150" fill="" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="75"
        cy="75"
        r="72.5"
        fill={props.primary}
        stroke={props.stroke}
        strokeWidth="5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69 68C69 72.98 64.98 77 60 77C55.02 77 51 72.98 51 68C51 63.02 55.02 59 60 59C64.98 59 69 63.02 69 68ZM72 59H96C102.63 59 108 64.37 108 71V77H72V59ZM108 80H72H48V53H42V98H48V89H102V98H108V80Z"
        fill={props.secondary}
      />
    </svg>
  );
}

export default BedContainer;
