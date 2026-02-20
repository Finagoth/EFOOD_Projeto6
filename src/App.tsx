import Cart from "./components/Cart";
import { GlobalStyle } from "./styles";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <Cart />
    </>
  )
}

export default App
