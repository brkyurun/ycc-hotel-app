import Header from "./components/Header/Header";
import Progress from "./components/Progress/Progress";
import ReservationDetails from "./components/ReservationDetails/ReservationDetails";
import RoomSelection from "./components/RoomSelection/RoomSelection";
import ScenerySelection from "./components/ScenerySelection/ScenerySelection";

function SecondPage() {
  return (
    <>
      <Header />
      <Progress onFirst={true} onSecond={true} />
      <ReservationDetails />
      <RoomSelection />
      <ScenerySelection />
    </>
  );
}

export default SecondPage;
