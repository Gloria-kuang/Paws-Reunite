import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReportPetPage from "./pages/ReportPetPage/ReportPetPage";
import SearchPetPage from "./pages/SearchPetPage/SearchPetPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/report-pet" component={ReportPetPage} />
        <Route path="/search-pet" component={SearchPetPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
