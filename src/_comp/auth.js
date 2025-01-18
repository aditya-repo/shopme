import LoginBanner from "../assets/login-banner.png";

const AuthPage = ({ children }) => {
    return (
        <div className="container mx-auto px-4 py-2">
            <div className="mx-auto max-w-[760px] mt-4 mb-10 bg-white flex">
                <div className="basis-2/5 bg-blue-500 text-white">
                    <div className="py-8 px-10">
                        <h2 className="text-2xl py-6 font-extrabold">Looks like you're new here!</h2>
                        <p className="text-gray-300 mb-20">Sign up with your mobile number to get started</p>
                        <img src={LoginBanner} alt="Login Banner" className="w-full mt-20 rounded-full" />
                    </div>
                </div>
                <div className="basis-3/5">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AuthPage;