import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Scroll from "./utility/Scroll";
import "./App.css";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Suspense
        fallback={
          <div className="loader-container">
            <span className="loader"></span>
          </div>
        }
      >
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
