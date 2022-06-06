import standardScenery from "./assets/standard_scenery.png";
import deluxeScenery from "./assets/deluxe_scenery.png";
import suiteScenery from "./assets/suite_scenery.png";
import SceneryCard from "./SceneryCard";

function ScenerySelection() {
  return (
    <section className="scenery-type-container">
      <h2>Manzara Seçimi</h2>
      <div className="sceneries">
        <SceneryCard
          name="standart"
          category="Standart"
          img={standardScenery}
          rate="+ 1%"
        />
        <SceneryCard
          name="deluxe"
          category="Deluxe"
          img={deluxeScenery}
          rate="+ 15%"
        />
        <SceneryCard
          selected={true}
          name="suite"
          category="Suite"
          img={suiteScenery}
          rate="+ 38%"
        />
      </div>
    </section>
  );
}

export default ScenerySelection;
