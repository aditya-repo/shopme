import { useState } from "react";
import DropDown from "./dropdown";
import { faBox, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

const LoginDropdown = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
    >
      <button className="bg-white text-black  px-6 md:px-10 rounded-full md:rounded-none py-1.5 md:py-2">
        Login
      </button>

      {hover && (
        <DropDown width={"200px"}
          tab={[
            {name: "My Profile", link: "/account", icon: faUser},
            {name: "My Orders", link: "/order", icon: faBox},
            {name: "My Wishlist", link: "/wishlist", icon: faHeart},
            {name: "Logout", link: "/logout", icon: faSignOut},
          ]}
        />
      )}
    </div>
  );
};

export default LoginDropdown;
