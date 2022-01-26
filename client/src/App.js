import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ReportPetPage from "./pages/ReportPetPage/ReportPetPage";
import SearchPetPage from "./pages/SearchPetPage/SearchPetPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { initializeApp } from "firebase/app";

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
        <Route path="/report-pet" component={ReportPetPage} />
        <Route path="/search-pet" component={SearchPetPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
