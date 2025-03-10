import LoginBanner from "../assets/login-banner.png";

const AuthPage = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-2">
            <div className="mx-auto max-w-[760px] mt-4 mb-10 bg-white flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
                {/* Left Side - Hidden on Small Screens */}
                <div className="hidden md:flex md:basis-2/5 bg-blue-500 text-white flex-col justify-center items-center p-8">
                    <h2 className="text-2xl font-extrabold text-center">Looks like you're new here!</h2>
                    <p className="text-gray-300 text-center mt-2">Sign up with your mobile number to get started</p>
                    <img src={LoginBanner} alt="Login Banner" className="w-full mt-10 rounded-lg" />
                </div>

                {/* Right Side - Login / Signup Form */}
                <div className="flex-grow md:basis-3/5 p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;
