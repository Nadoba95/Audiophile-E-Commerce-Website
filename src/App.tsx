import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
