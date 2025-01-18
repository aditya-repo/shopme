import { Link } from "react-router-dom";
import AuthPage from "../_comp/auth";

const LoginPages = () => {
    return (
        <AuthPage>
            <div className="py-16 px-8">
                <label>Enter Mobile Number</label>
                <input type="text" className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Mobile Number" />
                <p className="text-xs text-gray-400 mt-6">By continuing, you agree to Flipkart's <Link to='/terms' className="text-blue-600">Terms of Use</Link> and <Link to='/privacy' className="text-blue-600">Privacy Policy</Link>.</p>
                <Link to='/verify'><div className="mt-4 py-3 text-white bg-orange-600 text-center text-sm font-semibold">Request OTP</div></Link>
                <Link to='/register'><div className="mt-20 py-3 text-blue-600 text-center">Existing User? Login</div></Link>
            </div>
        </AuthPage>
    )
}

export default LoginPages;