import React from "react";
import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import HotelSelection from "./components/SelectHotel/HotelSelection";
import DateSelection from "./components/DateSelection/DateSelection";

class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelList: [],
      selectedHotel: [],
    };
  }

  componentDidMount() {
    const API_URL =
      "https://628e2457a339dfef87a85d4e.mockapi.io/havascx/hotels";
    fetch(API_URL)
      .then((response) => response.json())
      .then((hotelList) =>
        this.setState({
          hotelList: hotelList,
        })
      );
  }

  render() {
    return (
      <>
        <Header />
        <Progress onFirst={true} />
        <HotelSelection hotelList={this.state.hotelList} />
        <DateSelection />
      </>
    );
  }
}

export default FirstPage;
