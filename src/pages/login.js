import { Link } from "react-router-dom";
import AuthPage from "../_comp/auth";
import URL from "../config/url";
import axios from "axios";
import { useState } from "react";
import { useFormik } from "formik";
import loginSchema, { initialLoginValues } from "../config/validate/login";

const LoginPages = () => {
    const [errors, setErrors] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: initialLoginValues.email,
            password: initialLoginValues.password,
        },
        validationSchema: loginSchema,
        onSubmit: async (values) => {
            
            try {
                const response = await axios.post(URL.LOGIN(), values);
                console.log(response);
                setErrors(null);
                
                localStorage.setItem("token", response.data.token);
                window.location.href = "/";
            } catch (error) {
                setErrors(error.response?.data?.message || "An error occurred.");
            }
        },
    });

    return (
        <AuthPage>
            <form onSubmit={formik.handleSubmit} className="py-16 px-8">
                <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full p-2 outline-none border-b border-gray-400"
                    placeholder="Enter Email"
                />
                <span className="text-red-700 pl-1 text-xs">{formik.touched.email && formik.errors.email}</span>

                <input
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="block w-full p-2 outline-none border-b border-gray-400"
                    placeholder="Enter Password"
                />
                <span className="text-red-700 pl-1 text-xs">{formik.touched.password && formik.errors.password}</span>

                {errors && <p className="text-red-700 text-sm mt-2">{errors}</p>}

                <div className="flex items-center justify-center">
                    <button type="submit" className="mt-4 py-3 px-5 text-white bg-orange-600 text-center text-sm font-semibold">
                        Login
                    </button>
                </div>

                <Link to="/register">
                    <div className="mt-20 py-3 text-blue-600 text-center">New User? Sign Up</div>
                </Link>
            </form>
        </AuthPage>
    );
};

export default LoginPages;
