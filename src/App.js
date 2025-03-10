import { Outlet } from "react-router-dom";
import Header from "./_comp/header";
import Navigation from "./_comp/navigation";

function App() {
  return (
    <div className="bg-gray-100">
    <Header />
    <Navigation />
    <Outlet />
    </div>
  );
}

export default App;
