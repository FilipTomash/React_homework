import TodoCard from "../../Components/TodoCard/TodoCard";
import "./TodoPage.css";

function TodoPage(props) {
  const todoMockData = [
    {
      id: 1,
      text: "Wash the dishes",
      isFinished: true,
      author: "Bar Manager",
      priority: "high",
    },
    {
      id: 2,
      text: "Clean the coffee mashine",
      isFinished: false,
      author: "Bar Manager",
      priority: "high",
    },
    {
      id: 3,
      text: "Make cocktail decorations",
      isFinished: false,
      author: "Lead Bartender",
      priority: "low",
    },
    {
      id: 4,
      text: "Restock the fridge",
      isFinished: true,
      author: "Bar Manager",
      priority: "high",
    },
    {
      id: 5,
      text: "Mop the floor before closing",
      isFinished: false,
      author: "Staff Manager",
      priority: "low",
    },
  ];

  const todoStats = todoMockData.reduce(
    (acc, task) => {
      task.isFinished ? acc.finished++ : acc.unfinished++;
      return acc;
    },
    { finished: 0, unfinished: 0 }
  );

  return (
    <section className="TodoPage">
      <h2>{props.pageTitle}</h2>
      <div className="Todo-container">
        {todoMockData.map((todoTask) => (
          <TodoCard key={todoTask.id} todoTask={todoTask} />
        ))}
      </div>
      <div className="Todo-counters">
        <p>To do Tasks: {todoMockData.length}</p>
        <p>Finished Tasks: {todoStats.finished}</p>
        <p>Unfinished Tasks:{todoStats.unfinished}</p>
      </div>
    </section>
  );
}

export default TodoPage;
