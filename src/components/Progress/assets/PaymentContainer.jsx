function PaymentContainer(props) {
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
        d="M99 51H51C47.67 51 45.03 53.67 45.03 57L45 93C45 96.33 47.67 99 51 99H99C102.33 99 105 96.33 105 93V57C105 53.67 102.33 51 99 51ZM99 93H51V75H99V93ZM99 63H51V57H99V63Z"
        fill={props.secondary}
      />
    </svg>
  );
}

export default PaymentContainer;
