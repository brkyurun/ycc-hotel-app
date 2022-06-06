import { useState } from "react";
import searchIcon from "./search-icon.png";

function HotelSelection(props) {
  const [hotelSelection, setHotelSelection] = useState();

  return (
    <section className="search-hotel">
      <img src={searchIcon} alt="" />
      <select
        name="hotel-selection"
        className="select-hotel"
        value={hotelSelection}
        onChange={(e) => {
          setHotelSelection(e.target.value);
        }}
        defaultValue={"default"}
        required
      >
        <option key="none" value={"default"} disabled>
          Rezervasyon yapmak istediğiniz oteli seçiniz.
        </option>
        {props.hotelList.map((hotel) => (
          <option key={hotel.id} value={hotel.hotel_name}>
            {hotel.hotel_name}
          </option>
        ))}
      </select>
    </section>
  );
}

export default HotelSelection;
