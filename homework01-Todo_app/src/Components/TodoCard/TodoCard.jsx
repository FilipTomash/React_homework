import { Fragment } from "react";
import classes from "./TodoCard.module.css";

function TodoCard({ todoTask }) {
  const { text, author, isFinished, priority } = todoTask;
  return (
    <div
      className={classes.TodoCard}
      style={{ backgroundColor: isFinished ? "lightgreen" : "lightcoral" }}
    >
      <div className={classes.heading}>{text}</div>
      <p>{author}</p>
      <strong>Priority: {priority}</strong>
      <Fragment>{isFinished ? <h3>&#x2705;</h3> : <h3>&#x274C;</h3>}</Fragment>
    </div>
  );
}

export default TodoCard;
