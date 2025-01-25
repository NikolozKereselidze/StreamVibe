import { BrowserRouter } from "react-router-dom";
import Scroll from "./utility/Scroll";
import "./App.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Scroll />

      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
