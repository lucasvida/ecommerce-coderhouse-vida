import "./App.css";

import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <h1>MEU SITE</h1>
      <ItemListContainer />
    </div>
  );
}

export default App;
