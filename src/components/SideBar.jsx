import { BsColumnsGap, BsTextRight, BsFillBagFill, BsFillBagPlusFill, BsFillPersonPlusFill, BsFillPersonFill, BsPower } from "react-icons/bs";
import DashInfo from "./DashInfo";
import { Link } from "react-router-dom";
import Products from "../pages/Products";
import NewProduct from "../pages/NewProduct";
import Users from "../pages/Users";
import NewUser from "../pages/NewUser";
import SignIn from "../pages/SignIn";

function SideBar() {
    return (
        <>
            <div className="h-screen w-64 rounded-ee-2xl rounded-tr-2xl  py-8 bg-purple-800 text-white sticky top-0">
                <h1 className="flex justify-between text-2xl font-semibold mb-10 px-5">Admin. <BsTextRight /></h1>
                <div>
                    <Link to="/dashboard" element={<DashInfo />} className="w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsColumnsGap className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " /> Dashboard</Link>

                    <Link to="/products" element={<Products />} className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsFillBagFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Products</Link>

                    <Link to='/add-product' element={<NewProduct />}><button className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsFillBagPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " /> New Product</button></Link>
                    
                    <Link to='/users' element={<Users />}><button className="w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsFillPersonFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125 " />Users</button></Link>

                    <Link to='/new-user' element={<NewUser />}><button className="w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsFillPersonPlusFill className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />New user</button></Link>

                    <Link to="/" element={<SignIn />}><button className=" w-full flex gap-4 my-1 py-4 px-5 hover:bg-purple-600 group focus:pl-14 focus:bg-purple-600"><BsPower className="text-lg my-auto group-hover:scale-125 group-focus:scale-125  " />Logout</button></Link>
                </div>
            </div>
        </>
    )
}
export default SideBar