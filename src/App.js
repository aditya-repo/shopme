import { Outlet } from "react-router-dom";
import Header from "./_comp/header";
import Navigation from "./_comp/navigation";
import Product from "./_comp/product";
import ProductList from "./_comp/productlist";

function App() {
  return (
    <div className="bg-gray-100">
    <Header />
    <Navigation />
    <Product />
    <Outlet />
    </div>
  );
}

export default App;
