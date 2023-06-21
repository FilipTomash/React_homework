import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import PlanetsPage from "./Pages/PlanetsPage";

function App() {
  const appTitle = "SWAPI Planets";

  const navbarLinkData = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "About Us",
      link: "/about-us",
    },
    {
      text: "Planets",
      link: "/planets",
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
        <PlanetsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
