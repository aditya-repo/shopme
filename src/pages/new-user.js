import { Link, useNavigate } from "react-router-dom";
import AuthPage from "../_comp/auth";
import URL, { API } from "../config/url";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import registerSchema, { registerInitialValues } from "../config/validate/register";
import { useAuth } from "../config/authcontext";


const RegisterPage = () => {

const navigate = useNavigate()

    const {login} = useAuth()

    const [errors, setErrors] = useState(null);

    const formik = useFormik({
        initialValues: registerInitialValues,
        validationSchema: registerSchema,
        onSubmit: async (values) => {
        
            try {
                const response = await axios.post(URL.REGISTER(), values);
                setErrors(null);
                // login(response.data.sessionkey)
                localStorage.setItem("token", response.data.sessionkey);
                navigate('/')
            } catch (error) {
                console.error("API Error:", error);
                setErrors(error.response?.data?.message || "An error occurred.");
            }
        }
        
    });


    return (
        <AuthPage>
            <form onSubmit={formik.handleSubmit}>
                <div className="py-16 px-8">
                    <div className="mb-4" >
                        <input type="text" name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Name" />
                        {formik.touched.name && formik.errors.name && (
                            <span className="text-red-700 pl-1 text-xs">{formik.errors.name}</span>
                        )}
                    </div>
                    <div className="mb-4" >
                        <input type="text" name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="block w-full p-2 outline-none border-b border-gray-400"
                            placeholder="Enter Email Id" />
                        {formik.touched.email && formik.errors.email && (
                            <span className="text-red-700 pl-1 text-xs">{formik.errors.email}</span>
                        )}
                    </div>
                    <div className="mb-4" >
                        <input type="password" name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Enter Password" />
                        {formik.touched.password && formik.errors.password && (
                            <span className="text-red-700 pl-1 text-xs">{formik.errors.password}</span>
                        )}
                    </div>
                    <div className="mb-4" >
                        <input type="password" name="password2"
                            value={formik.values.password2}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="block w-full p-2 outline-none border-b border-gray-400" placeholder="Confirm Password" />
                        {formik.touched.password2 && formik.errors.password2 && (
                            <span className="text-red-700 pl-1 text-xs">{formik.errors.password2}</span>
                        )}
                    </div>

                    <p className="text-xs text-gray-400 mt-6">By continuing, you agree to Flipkart's <Link to='/terms' className="text-blue-600">Terms of Use</Link> and <Link to='/privacy' className="text-blue-600">Privacy Policy</Link>.</p>
                    <div className="flex items-center justify-center">

                        { /*<button type="submit" className="mt-4 py-3 px-5 text-white bg-orange-600 text-center text-sm font-semibold">Request OTP</button> */}
                        <button type="submit" className="mt-4 py-3 px-5 text-white bg-orange-600 text-center text-sm font-semibold">Sign up</button>

                    </div><Link to='/login'><div className="mt-20 py-3 text-blue-600 text-center">Existing User? Login</div></Link>
                </div>
            </form>
        </AuthPage>
    )

}

export default RegisterPage;