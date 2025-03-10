import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const DropDown = ({tab, width}) => {
    const handleLogout = ()=>{
        localStorage.removeItem("token")
        window.location.href = "/";
    }

    return (
        <div className={`bg-white  left-1/2 transform -translate-x-1/2  border absolute top-12 text-gray-800 border-gray-200 shadow-md w-[${width}] flex justify-center items-center flex-col`}>
            <div className="pointer-tip" style={{ borderBottom: "8px solid white", borderLeft: "10px solid transparent", borderRight: "10px solid transparent", width: '4px', marginTop: "-8px" }}></div>
            <div className="w-[100%]">
            {tab.map((item, index) => (
                <Link key={index} to={item.link}><div className="px-4 py-2.5 hover:bg-gray-100 cursor-pointer border-b border-gray-200" key={index}><FontAwesomeIcon icon={item.icon} className="pr-3" /> {item.name}</div></Link>
            ))}</div>
            {localStorage.getItem("token") && (

            <button onClick={handleLogout} className="w-full px-4 py-2.5 hover:bg-gray-100 cursor-pointer border-b border-gray-200 text-left"><FontAwesomeIcon icon={faSignOut} className="pr-3" />Logout</button>
        
            )}</div>
    )
}

export default DropDown;