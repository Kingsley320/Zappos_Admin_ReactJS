import ProductCard from "./ProductCard"
import img1 from '../assets/images/61ek-RXN-7L-_AC_SR255-340__FMwebp_.jpg';
import axios from "axios";
import { useEffect, useState } from "react";

function ShowProductsInfo() {
    const [products, setProducts] = useState([]);
    const ip = 'http://159.65.21.42:9000/';
    const delurl = `${ip}product`;
    const geturl = `${ip}products`;

    const handleLoad = async () => {
        try {
            let response = await axios.get(geturl);
            const data = response.data;
            // console.log(data);
            response ? setProducts(data) : log('network');
        } catch (err) {
            console.log(err);
        }
        // console.log(products);
    }

    const DeleteHandler = (id) => {
        console.log(`${delurl}/${id}`);
        if (window.confirm("Continue delete? ")) {
            axios.delete(`${delurl}/${id}`);
            // const newarr = products.filter(item => {item._id !== products._id && item.category === 'seyi'})
            // console.log(products);
            // console.log(newarr);
            // setProducts(newarr);
            handleLoad();
        }
    };

    useEffect(() => {
        handleLoad();
    }, [])

    return (
        <>
            <div className="w-full ">
                <div className="pt-8 p-3 mb-10 bg-white sticky top-0 border-b-1 border-l-1 border-purple-600">
                    <h1 className="text-3xl font-bold ">Products</h1>
                </div>
                <div className="grid grid-cols-3 gap-10 mr-5">
                    {
                        products.length > 0 ? (
                            products.filter(product => product.category === 'seyi').map(FilteredProducts => (
                                <ProductCard key={FilteredProducts._id} name={FilteredProducts.name} category={FilteredProducts.category} image={FilteredProducts.image} quantity={FilteredProducts.quantity} productDelete={() => DeleteHandler(FilteredProducts._id)} />

                            ))
                        ) :
                            (
                                <div className="w-full h-40 flex justify-middle align-middle">
                                    <h2 className="my-auto mx-auto text-3xl font-bold">Loading...</h2>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    )
}
export default ShowProductsInfo