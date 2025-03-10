import { useEffect, useState } from "react";
import DropDown from "./dropdown";
import { faBox, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoginDropdown = () => {
  const [hover, setHover] = useState(false);

  const [token, setToken] = useState(null)
  
  useEffect(()=>{
  const key  = localStorage.getItem("token")
    setToken(key)
  }, [])
  
  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
    >
      {!token ? (
        <Link to={'/login'} className="bg-white text-black  px-6 md:px-10 rounded-full md:rounded-none py-1.5 md:py-2">
        Login
      </Link> 
      ) : (
        <button className="bg-yellow-600 text-white  px-6 md:px-10 rounded-full md:rounded-none py-1.5 md:py-2">
        Account
      </button> 
      )}

      {hover && (
        <DropDown width={"200px"}
          tab={[
            {name: "My Profile", link: "/account", icon: faUser},
            {name: "My Orders", link: "/order", icon: faBox},
            {name: "My Wishlist", link: "/wishlist", icon: faHeart},
          ]}
        />
        
      )}
    </div>
  );
};

export default LoginDropdown;
