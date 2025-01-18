import { Outlet, useLocation } from "react-router-dom";
import Header from "./_comp/header";
import Navigation from "./_comp/navigation";

function App() {
  const excludedPath = ['/']
  const location = useLocation()
  const isExcluded = excludedPath.includes(location.pathname)
  return (
    <div className="bg-gray-100">
    <Header />
    {!isExcluded && <Navigation />}
    <Outlet />
    </div>
  );
}

export default App;
