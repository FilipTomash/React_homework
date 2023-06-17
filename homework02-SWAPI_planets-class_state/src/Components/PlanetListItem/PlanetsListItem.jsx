import "./PlanetsListItem.css";

const PlanetsListItem = (props) => {
  return (
    <li
      className="PlanetsListItem"
      style={{
        backgroundColor: props.isSelected && "rgb(134, 199, 255)",
      }}
      onClick={() => {
        props.onSelectedPlanet(props.planetIndex);
      }}
    >
      {props.name}
    </li>
  );
};

export default PlanetsListItem;
