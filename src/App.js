import { Route } from "react-router-dom";
import Welcome from "../src/component/Welcome";
import Products from "../src/component/Products";

function App() {
  return (
    <div>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
