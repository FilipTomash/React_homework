import "./PlanetDetails.css";
import React from "react";

class PlanetDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="PlanetDetails">
        <div className="details-container">
          {!this.props.selectedPlanet && (
            <div className="placeholder-containet">No Planet Selected</div>
          )}
          {this.props.selectedPlanet && (
            <>
              <div>
                <strong>Name: </strong>
                {this.props.selectedPlanet.name}
              </div>
              <div>
                <strong>Rotation Period: </strong>
                {this.props.selectedPlanet.rotation_period}
              </div>
              <div>
                <strong>Orbital Period: </strong>
                {this.props.selectedPlanet.orbital_period}
              </div>
              <div>
                <strong>Diameter: </strong>
                {this.props.selectedPlanet.diameter}
              </div>
              <div>
                <strong>Climate: </strong>
                {this.props.selectedPlanet.climate}
              </div>
              <div>
                <strong>Gravity: </strong>
                {this.props.selectedPlanet.gravity}
              </div>
              <div>
                <strong>Terrain: </strong>
                {this.props.selectedPlanet.terrain}
              </div>
              <div>
                <strong>Surface Water: </strong>
                {this.props.selectedPlanet.surface_water}
              </div>
              <div>
                <strong>Population: </strong>
                {this.props.selectedPlanet.population}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PlanetDetails;
