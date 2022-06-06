function Button(props) {
  return (
    <button type="button" className="save-button" onClick={props.onClick}>
      Kaydet ve Devam Et
    </button>
  );
}
export default Button;
