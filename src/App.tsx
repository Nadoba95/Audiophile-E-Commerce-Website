// import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ProductDetails from "./Pages/ProductDetails";
import ScrollToTop from "./components/Helpers/ScrollToTop";

// const Home = lazy(() => import("./pages/Home"));
// const Category = lazy(() => import("./pages/Category"));
// const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
