import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavModal from "./components/UI/NavModal";
import Category from "./pages/Category";
import Home from "./pages/Home";

type UIState = {
  ui: {
    navIsVisible: boolean;
  };
};

function App() {
  const showNav = useSelector((state: UIState) => state.ui.navIsVisible);

  return (
    <>
      <Header />
      {showNav && <NavModal />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/:category" element={<Category />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
