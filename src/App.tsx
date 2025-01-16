import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import Media from "./pages/Media";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/media" element={<Media />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
