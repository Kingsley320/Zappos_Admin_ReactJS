import { BsCartFill, BsPersonFill } from "react-icons/bs";
import img1 from '../assets/images/61ek-RXN-7L-_AC_SR255-340__FMwebp_.jpg';
import axios from 'axios';
import { useEffect, useState } from "react";
import DashProducts from "./DashProducts";

function DashInfo() {
    const [prodlen, setProductsNo] = useState(0);
    const [userslen, setUsersNo] = useState(0);
    // const [cartlen, setCartNo] = useLocalStorage(0);
    const ip = 'http://159.65.21.42:9000/';
    const geturl = `${ip}products`;
    const usersurl = `${ip}users`;
    const cartlen = JSON.parse(window.localStorage.getItem('cart')).length;
    // console.log(window.localStorage.getItem('taskDataBase').length);
   


    const [products, setProducts] = useState([]);
    const delurl = `${ip}product`;


    const handleLoad = async () => {
        try {
            let response = await axios.get(geturl);
            const data = response.data;
            // console.log(data);
            response ? setProducts(data) : console.log('network');
        } catch (err) {
            console.log(err);
        }
        // console.log(products);
    }

    const handleLength = async () => {
        // for total products
        try {
            let response = await axios.get(geturl);
            const data = response.data;
            const myProducts = data.filter(i => i.category === 'seyi')
            // console.log(myProducts);
            myProducts ? setProductsNo(myProducts.length) : log('network');
        } catch (err) {
            console.log(err);
        }
        // for total users  
        try {
            let response = await axios.get(usersurl);
            const data = response.data;
            response ? setUsersNo(data.length) : log('network');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleLength();
        handleLoad();
    })

    return (
        <>
            <div className="w-full">
                <div className="pt-8 p-3 mb-10 bg-white ">
                    <h1 className="text-3xl font-bold">Dashboard</h1>
                </div>

                <div className="grid grid-cols-3 gap-10 mr-5">
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-blue-300 ">
                            <BsPersonFill className="my-auto mx-auto text-blue-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{prodlen}</h3>
                            <small className="text-gray-500">Total Products</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-pink-300 ">
                            <BsPersonFill className="my-auto mx-auto text-pink-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{userslen}</h3>
                            <small className="text-gray-500">Total Users</small>
                        </div>
                    </div>
                    <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                        <div className="flex align-middle h-14 w-14 rounded-full bg-green-300 ">
                            <BsCartFill className="my-auto mx-auto text-green-800 h-6 w-6  " />
                        </div>
                        <div>
                            <h3>{cartlen}</h3>
                            <small className="text-gray-500">Cart Items</small>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-white mt-8 rounded-lg p-3 mr-8">
                    <table className="w-full mr-5">
                        <thead>
                            <tr className="w-full grid grid-cols-5  mr-3">
                                <th className="text-left">Id</th>
                                <th className="text-left text-xs">Image</th>
                                <th className="text-left ">Category</th>
                                <th className="text-left">Quantity</th>
                                <th className="text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.length > 0 ? (
                                    products.filter(product => product.category === 'seyi').map(product => (
                                        <DashProducts key={product._id} id={product._id} image={product.image} cat={product.category} price={`$${product.price}`} quantity={product.quantity} description={product.description} />

                                    ))
                                ) : (
                                    <tr className="w-full h-40 flex justify-middle align-middle">
                                        <th className="my-auto mx-auto text-3xl font-bold">Loading...</th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default DashInfo