function RoomCard(props) {
  return (
    <div className={props.selected ? "room-card active" : "room-card"}>
      <label htmlFor={props.name}>
        <input
          type="radio"
          name={props.name}
          id={props.name}
          className="room-select-card"
          onChange={(e) => {
            e.target.parentElement.parentElement.classList.toggle("active");
          }}
        />
        <div className="card-content">
          <h3>{props.category}</h3>
          <img src={props.img} alt="Hotel room." />
          <div className="text-content">
            <div className="people">
              <p>5 Gün</p>
              <p>1 Yetişkin</p>
            </div>
            <h3 className="price">{props.price}</h3>
          </div>
        </div>
      </label>
    </div>
  );
}

export default RoomCard;
