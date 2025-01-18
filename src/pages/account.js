import MyAccountLayout from "../_comp/myaccount";

const AccountPage = () => {
    return (
        <MyAccountLayout>
            <div className="bg-white md:basis-3/4 basis-full">
                <div className="flex px-4 py-2  items-center bg-white shadow">
                    <div className="px-5 py-2 text-lg text-gray-800 text-center"><span className="ml-2"> My Account</span></div>
                </div>
                <div className="px-5 text-xl mt-3 font-bold">Personal Information</div>
                <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3 py-4">
                    <div className="relative">
                        <label className="text-xs absolute top-1 left-6">First Name</label>
                        <input type="text" className="outline-none w-[90%] border text-gray-600 border-gray-400 pb-2 pt-4 ml-3 pl-3" value={"Aditya"} disabled="true" placeholder="First Name" />
                    </div>
                    <div className="relative">
                        <label className="text-xs absolute top-1 left-6">Last Name</label>
                        <input type="text" className="outline-none w-[90%] border text-gray-600 border-gray-400 pb-2 pt-4 ml-3 pl-3" value={"Raj"} disabled="true" placeholder="First Name" />
                    </div>
                </div>
                <div className="px-5">
                    <label className="text-lg py-3">Your Gender</label>
                    <div className="flex gap-2">
                    <input type="radio" id="html" name="fav_language" value="HTML" disabled />
                    <label htmlFor="html">Male</label>
                    <input type="radio" id="css" name="fav_language" value="CSS" disabled/>
                    <label htmlFor="css">Female</label>
                    <input type="radio" id="css" name="fav_language" value="CSS" disabled/>
                    <label htmlFor="css">Others</label>
                    </div>
                </div>
                <div className="px-5 text-lg mt-6 font-semibold text-gray-700">Email Id</div>
                <div className="grid px-3 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3 py-2">
                    <div>
                        <label className="text-xs"></label>
                        <input type="text" className="outline-none w-[90%] border text-gray-600 border-gray-400 py-2 ml-3 pl-3" value={"adityaraj6220@gmail.com"} disabled="true" placeholder="First Name" />
                    </div>
                </div>
                <div className="px-5 text-lg mt-6 font-semibold text-gray-700">Phone Number</div>
                <div className="grid px-3 grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3 py-2">
                    <div>
                        <label className="text-xs"></label>
                        <input type="text" className="outline-none w-[90%] border text-gray-600 border-gray-400 py-2 ml-3 pl-3" value={"7050020659"} disabled="true" placeholder="First Name" />
                    </div>
                </div>

            </div>
        </MyAccountLayout>
    )
}

export default AccountPage;