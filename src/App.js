import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { AppContextProvider } from "./Context/globalContext";
import LandingPage from "./Pages/LandingPages/HomePage";
import LoginPage from "./Pages/LoginPages/Login";
import DaftarPage from "./Pages/DaftarPages/Daftar";
import Beranda from "./Pages/Beranda/Beranda";
import ReadBook from "./Pages/ReadBook/ReadBook";
import Transaction from "./Pages/TransactionPages/Transaction";
import AddBook from "./Pages/AddBook/AddBook";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AppContextProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/daftar" exact component={DaftarPage} />
            <Route path="/beranda" exact component={Beranda} />
            <Route path="/read-book" exact component={ReadBook} />
            <Route path="/transactions" exact component={Transaction} />
            <Route path="/add-book" exact component={AddBook} />
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
