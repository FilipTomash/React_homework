import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import TodoPage from "./Pages/TodoPage/TodoPage";

function App() {
  const appTitle = "To Do App";
  const pageTitle = "Tasks List";

  const navbarLinkData = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "To do",
      link: "/to-do",
    },
    {
      text: "About Us",
      link: "/about-us",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="App">
      <Header navbarLinkData={navbarLinkData} appTitle={appTitle} />
      <main>
        <TodoPage pageTitle={pageTitle} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
