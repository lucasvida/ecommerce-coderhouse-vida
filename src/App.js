import "./App.css";

import NavBar from "./components/NavBar";
import CartWidget from "./components/CartWidget";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div>
      <NavBar />
      <CartWidget />
      <h1>MEU SITE</h1>
      <ItemListContainer />
      <ItemCount />
    </div>
  );
}

export default App;
