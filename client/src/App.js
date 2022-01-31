import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReportPetPage from "./pages/ReportPetPage/ReportPetPage";
import SearchPetPage from "./pages/SearchPetPage/SearchPetPage";
import SingleReportPage from "./pages/SingleReportPage/SingleReportPage";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { initializeApp } from "firebase/app";
import SearchMap from "./components/SearchMap/SearchMap";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "paws-reunite.firebaseapp.com",
    projectId: "paws-reunite",
    storageBucket: "paws-reunite.appspot.com",
    messagingSenderId: "931422298738",
    appId: "1:931422298738:web:cee0af40f875fa976618eb",
    measurementId: "G-KVY9EFYZP8"
  };

  const app = initializeApp(firebaseConfig);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/report-pet/lost" component={ReportPetPage} />
        <Route path="/report-pet/found" component={ReportPetPage} />
        <Route path="/search-pet" component={SearchPetPage} />
        <Route path="/map-search" component={SearchMap} />
        <Route path="/report/:reportId" component={SingleReportPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
