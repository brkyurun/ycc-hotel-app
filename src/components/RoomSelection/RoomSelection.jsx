import React from "react";
import RoomCard from "./RoomCard";
import standardRoom from "./assets/standard_room.png";
import deluxeRoom from "./assets/deluxe_room.png";
import suiteRoom from "./assets/suite_room.png";

class RoomSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetails: [],
    };
  }

  render() {
    return (
      <section className="room-type-container">
        <h2>Oda Tipi Seçimi</h2>
        <div className="rooms">
          <RoomCard
            selected={true}
            name="standart"
            category="Standart"
            img={standardRoom}
            price="5.635 TL"
          />
          <RoomCard
            name="deluxe"
            category="Deluxe"
            img={deluxeRoom}
            price="13.235 TL"
          />
          <RoomCard
            name="suite"
            category="Suite"
            img={suiteRoom}
            price="50.210 TL"
          />
        </div>
      </section>
    );
  }
}

export default RoomSelection;
