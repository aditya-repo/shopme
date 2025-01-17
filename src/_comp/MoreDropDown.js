import { useState } from "react";
import DropDown from "./dropdown";
import { faBell, faBox, faCartPlus, faGears, faHeart, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";

const MoreDropdown = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
    >
      <button className="text-white px-10 hidden md:inline py-2">
        More
      </button>

      {hover && (
        <DropDown width={"200px"}
          tab={[
            {name: "Notification Preference", link: "/notification", icon: faBell},
            {name: "27 * 7 Help", link: "/orders", icon: faBox},
            {name: "My Cart", link: "/cart", icon: faCartPlus},
            {name: "Advertise", link: "/advertise", icon: faGears}
          ]}
        />
      )}
    </div>
  );
};

export default MoreDropdown;
