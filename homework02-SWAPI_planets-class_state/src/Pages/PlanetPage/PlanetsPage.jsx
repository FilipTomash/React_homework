import "./PlanetsPage.css";
import React from "react";
import axios from "axios";
import Button from "../../Components/Button/Button";
import PlanetsList from "../../Components/PlanetList/PlanetsList";
import PlanetDetails from "../../Components/PlanetDetails/PlanetDetails";

const SWAPI_URL = "https://swapi.dev/api/planets";

class PlanetsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: [],
      selectedPlanet: null,
      isPlanetDetailsShown: true,
      page: 1,
      prevPage: null,
      nextPage: null,
    };
  }

  async nextPageMethod() {
    if (!this.state.nextPage) return;
    await axios.get(this.state.nextPage).then((response) => {
      this.setState({
        planets: response.data.results,
        nextPage: response.data.next,
        prevPage: response.data.previous,
      });
    });
    this.setState((prevState) => {
      if (prevState.page >= 6) return prevState;

      return {
        page: prevState.page + 1,
      };
    });
  }

  async prevPageMethod() {
    if (!this.state.prevPage) return;
    await axios.get(this.state?.prevPage).then((response) => {
      this.setState({
        planets: response.data.results,
        prevPage: response.data.previous,
        nextPage: response.data.next,
      });
    });
    this.setState((prevState) => {
      if (prevState.page < 1) return prevState;

      return {
        page: prevState.page - 1,
      };
    });
  }

  togglePlanetDetails() {
    this.setState((prevState) => ({
      isPlanetDetailsShown: !prevState.isPlanetDetailsShown,
    }));
  }

  toggleNextBtn() {
    if (!this.state.nextPage) {
      return "hidden";
    }
    return "visible";
  }

  togglePrevBtn() {
    if (!this.state.prevPage) {
      return "hidden";
    }
    return "visible";
  }

  onSelectedPlanet(planetIndex) {
    this.setState((prevState) => ({
      selectedPlanet: prevState.planets[planetIndex],
    }));
  }

  componentDidMount() {
    axios.get(SWAPI_URL).then((response) => {
      this.setState({
        planets: response.data.results,
        nextPage: response.data.next,
      });
    });
  }

  render() {
    return (
      <>
        <div className="planetDetailsDisplayBtn">
          <Button
            btnText="Show Planet Details"
            onBtnClick={this.togglePlanetDetails.bind(this)}
          />
        </div>
        <div className="PlanetsPage">
          <PlanetsList
            planets={this.state.planets}
            selectedPlanet={this.state.selectedPlanet}
            onSelectedPlanet={this.onSelectedPlanet.bind(this)}
          />
          {this.state.isPlanetDetailsShown && (
            <PlanetDetails selectedPlanet={this.state.selectedPlanet} />
          )}
        </div>
        <div className="page-display">
          <p>Page: {this.state.page}</p>
        </div>
        <div className="page-controls">
          <Button
            btnText="Previous page"
            onBtnClick={this.prevPageMethod.bind(this)}
            btnStyle={{ visibility: this.togglePrevBtn() }}
          />
          <Button
            btnText="Next page"
            onBtnClick={this.nextPageMethod.bind(this)}
            btnStyle={{ visibility: this.toggleNextBtn() }}
          />
        </div>
      </>
    );
  }
}

export default PlanetsPage;
