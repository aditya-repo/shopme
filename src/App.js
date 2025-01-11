import Header from "./_comp/header";
import Navigation from "./_comp/navigation";
import ProductList from "./_comp/productlist";

function App() {
  return (
    <div className="bg-gray-100">
    <Header />
    <Navigation />
    <ProductList />
    </div>
  );
}

export default App;
