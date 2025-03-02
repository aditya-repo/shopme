import { Link } from "react-router-dom";
import AuthPage from "../_comp/auth";
import { API } from "../config/url";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import loginSchema, { initialLoginValues } from "../config/validate/login";

const LoginPages = () => {

    const [errors, setErrors] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    
    const formik = useFormik({
        initialValues: initialLoginValues }, {validationSchema: loginSchema, onSubmit: (values) => {
            console.log(values);
        }});

    const handleSubmit = async (event) => {
        event.prevertDefault();
        // console.log(formData);
        
        try {
            const response = await axios.post(API.LOGIN(), formData);
            setErrors(null);
            localStorage.setItem("token", response.data.token);
            window.location.href = "/";
        } catch (error) {
            setErrors(error.response.data.message);
        }
    }

    return (
        <AuthPage>
        <form onSubmit={handleSubmit}>
            <div className="py-16 px-8">
                <input type="text" name="name" value={formData.name} onChange={ e => setFormData({...formData, name: e.target.value})} className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Name" />
                <span className="text-red-700 pl-1 text-xs mb-4">{errors?.name}</span>
                <input type="text" name="email" value={formData.email} onChange={ e => setFormData({...formData, email: e.target.value})} className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Email Id" />
                <span className="text-red-700 pl-1 text-xs mb-4">{errors?.email}</span>

                <input type="text" name="password" value={formData.password} onChange={ e => setFormData({...formData, password: e.target.value})} className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Password" />
                <span className="text-red-700 pl-1 text-xs mb-4">{errors?.password}</span>

                <input type="text" name="password2" value={formData.password2} onChange={ e => setFormData({...formData, password2: e.target.value})} className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Confirm Password" />
                <span className="text-red-700 pl-1 text-xs mb-4">{errors?.password2}</span>

                <p className="text-xs text-gray-400 mt-6">By continuing, you agree to Flipkart's <Link to='/terms' className="text-blue-600">Terms of Use</Link> and <Link to='/privacy' className="text-blue-600">Privacy Policy</Link>.</p>
                <div className="flex items-center justify-center">
                
                <button type="submit" className="mt-4 py-3 px-5 text-white bg-orange-600 text-center text-sm font-semibold">Request OTP</button>
                
                </div><Link to='/register'><div className="mt-20 py-3 text-blue-600 text-center">Existing User? Login</div></Link>
            </div>
            </form>
        </AuthPage>
    )
    
}

export default LoginPages;