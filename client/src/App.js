import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReportPetPage from "./pages/ReportPetPage/ReportPetPage";
import SearchPetPage from "./pages/SearchPetPage/SearchPetPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/report-pet" component={ReportPetPage} />
        <Route path="/search-pet" component={SearchPetPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
