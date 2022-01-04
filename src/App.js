import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./assets/scss/style.scss";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/detail/:id" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
