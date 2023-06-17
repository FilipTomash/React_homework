import React from "react";
import "./PlanetsList.css";
import PlanetsListItem from "../PlanetListItem/PlanetsListItem";

class PlanetsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {!this.props.planets.length && (
          <div className="PlanetList">Loading...</div>
        )}
        {!!this.props.planets.length && (
          <ul className="PlanetList">
            {this.props.planets.map((planet, planetIndex) => (
              <PlanetsListItem
                onSelectedPlanet={this.props.onSelectedPlanet}
                isSelected={this.props.selectedPlanet?.name === planet.name}
                key={planet.name + planetIndex}
                name={planet.name}
                planetIndex={planetIndex}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default PlanetsList;
