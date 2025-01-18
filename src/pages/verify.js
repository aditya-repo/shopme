import { Link } from "react-router-dom";
import AuthPage from "../_comp/auth";

const VerifyPage = () => {
    return (
        <AuthPage>
            <div className="py-16 px-8">
                <p className="text-center text-gray-800 mt-6 px-20">Please enter the OTP sent to 7050020659. <span className="text-blue-500 font-bold pl-3"><Link to={'/change'}>Change</Link></span></p>
                <div className="px-20">
                    <input type="text" className="block w-full p-2 outline-none border-b border-gray-400 mt-4 text-center" placeholder="OTP" />
                </div>
                <Link to='/register'><div className="mt-4 py-3 text-white bg-blue-600 text-center text-sm font-bold">Verify</div></Link>
                <Link to='/login'><div className="mt-5 py-3 text-blue-600 shadow text-center">Existing User? Signup</div></Link>
            </div>
        </AuthPage>
    )
}

export default VerifyPage;