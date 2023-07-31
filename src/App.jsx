import { Route, Routes } from "react-router-dom";
import "./App.css";
const baseURL = "https://ih-beers-api2.herokuapp.com/beers"
import HomePage from "./pages/HomePage"
import AddBeerPage from "./pages/AddBeerPage"
import AllBeersPage from "./pages/AllBeersPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import BeerDetailsPage from "./pages/BeerDetailsPage"
import NavBar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage baseURL={baseURL} />} />
        <Route path="/random-beer" element={<RandomBeerPage baseURL={baseURL} />} />
        <Route path="/new-beer" element={<AddBeerPage baseURL={baseURL} />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage baseURL={baseURL} />} />
      </Routes>
    </div>
  );
}

export default App;
