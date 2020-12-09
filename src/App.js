import "./App.scss";
import Layout from "./components/Layout/Layout";

// import MobileModal from "./components/MobileModal/MobileModal";
import FaqMain from "./components/Faq/Faq";
import Nav from "./components/Nav/Nav";
import Test from "./components/test/test";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Layout />
        </Route>
      </Switch>
      <Switch>
        <Route path="/faq">
          <FaqMain />
        </Route>
      </Switch>
    </Router>
    // <Test />
  );
}

export default App;
