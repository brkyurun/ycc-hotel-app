function SceneryCard(props) {
  return (
    <div className={props.selected ? "scenery-card active" : "scenery-card"}>
      <label htmlFor={props.name}>
        <input
          type="radio"
          name={props.name}
          id={props.name}
          className="scenery-select-card"
          onChange={(e) => {
            e.target.parentElement.parentElement.classList.toggle("active");
          }}
        />
        <div className="card-content">
          <h3>{props.category}</h3>
          <img src={props.img} alt="Hotel room." />
          <div className="text-content">
            <div className="people">
              <p>Fiyat Etki Oranı</p>
            </div>
            <h3 className="rate">{props.rate}</h3>
          </div>
        </div>
      </label>
    </div>
  );
}

export default SceneryCard;
