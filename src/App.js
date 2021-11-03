import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Classes from "./pages/Classes";
import Features from "./pages/Features";
import Schedule from "./pages/Schedule";
import Store from "./pages/Store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={Aboutus} />
            <Route path="/classes" component={Classes} />
            <Route path="/features" component={Features} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/store" component={Store} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
