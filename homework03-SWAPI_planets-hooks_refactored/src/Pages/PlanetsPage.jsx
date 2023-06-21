import { useEffect, useState } from "react";
import "./PlanetsPage.css";
import axios from "axios";
import Button from "../Components/Button/Button";
import PlanetsList from "../Components/PlanetList/PlanetsList";
import PlanetDetails from "../Components/PlanetDetails/PlanetDetails";

const SWAPI_URL = "https://swapi.dev/api/planets";

const PlanetsPage = () => {
  const [planets, setPlanets] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isPlanetDetailsShown, setIsPlanetDetailsShown] = useState(true);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    axios.get(SWAPI_URL).then((response) => {
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setCount(Math.floor(response.data.count / 10));
    });
  }, []);

  const nextPageFunc = async () => {
    if (!nextPage) return;
    await axios.get(nextPage).then((response) => {
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    });
    if (page >= count) return;

    return setPage(page + 1);
  };

  const prevPageFunc = async () => {
    if (!prevPage) return;
    await axios.get(prevPage).then((response) => {
      setPlanets(response.data.results);
      setNextPage(response.data.next);
      setPrevPage(response.data.previous);
    });
    if (page < 1) return;

    return setPage(page - 1);
  };

  const togglePlanetDetails = () => {
    setIsPlanetDetailsShown((prevState) => !prevState);
  };

  const onSelectedPlanet = (planetIndex) =>
    setSelectedPlanet(planets[planetIndex]);

  return (
    <>
      <div className="planetDetailsDisplayBtn">
        <Button
          btnText="Show Planet Details"
          onBtnClick={togglePlanetDetails}
        />
      </div>
      <div className="PlanetsPage">
        <PlanetsList
          planets={planets}
          selectedPlanet={selectedPlanet}
          onSelectedPlanet={onSelectedPlanet}
        />
        {isPlanetDetailsShown && (
          <PlanetDetails selectedPlanet={selectedPlanet} />
        )}
      </div>
      <div className="page-display">
        <p>Page: {page}</p>
      </div>
      <div className="page-controls">
        <Button
          btnText="Previous page"
          onBtnClick={prevPageFunc}
          btnStyle={{
            visibility: !prevPage ? "hidden" : "visible",
          }}
        />
        <Button
          btnText="Next page"
          onBtnClick={nextPageFunc}
          btnStyle={{
            visibility: !nextPage ? "hidden" : "visible",
          }}
        />
      </div>
    </>
  );
};

export default PlanetsPage;
