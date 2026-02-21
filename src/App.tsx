import { GlobalStyle } from "./styles";
import { AppRoutes } from "./routes/AppRoutes";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <Cart />
      <Checkout />
    </>
  );
}

export default App;