import { useState, useEffect } from 'react';
import img1 from '../assets/images/zapposPBS-_CB1509642213_.svg';
// import {useHistory} from 'react-router-dom';
import axios from 'axios';



function AddProductForm() {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [err, setErr] = useState(false);
    const [show, setShow] = useState(false);
    const ip = "http://159.65.21.42:9000/";
    const url = `${ip}create/product`;
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            name === '' || category === '' | description === '' | img === '' | price === '' | quantity === ''
        ) {
            setErr(true);
            return;
        }
        const product = {
            name: name,
            category: category,
            description: description,
            image: img,
            price: price,
            quantity: quantity,

        }
        setName('');
        setCategory('');
        setDesc('');
        setImg('');
        setPrice('');
        setQuantity('');
        console.log((product));

        try {
            const resp = await axios.post(url, product);
            console.log(resp);
            setShow(true);
            setTimeout(()=>setShow(false),2500);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className=' w-full '>
                {/* <img src={img1} alt="logo" className='h-11 inline align-middle text-white' /> */}
                <div className="pt-8 p-3 mb-10 bg-white sticky top-0 border-b-1 border-l-1 border-purple-600">
                    <h1 className="text-3xl font-bold ">Add Product</h1>
                </div>


                <div className='w-full  pr-8 mt-4 rounded-md  my-8 font-sans'>
                {
                    show === true ? (
                        <div className='flex align-middle justify-center bg bg-green-500 w-full h-10 text-white text-lg font-semibold text-center mb-4'>
                    <p className='my-auto'>Product Created</p>
                </div>
                    ) : (null)
                }
                    <form className='w-full  bg-white p-10 rounded-xl'>
                        <div>

                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Name</label>
                                <input type="text" placeholder='Product Name' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={name} onChange={(e) => setName(e.target.value)} />
                                {err === true && name === '' ? <span className='text-red-600'>Password Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Product Category</label>
                                <select className='w-full text-sm block font-semibold mb-0.5 rounded-xl outline-none border-1 h-10 px-2 focus:border-purple-600' value={category} onChange={(e) => setCategory(e.target.value)}>
                                    <option value="">Select Category</option>
                                    <option value="seyi">Seyi</option>
                                </select>
                                {err === true && category === '' ? <span className='text-red-600'>Password Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Product Image</label>
                                <input type="text" placeholder='Image Link' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black p-1.5 px-3 h-10 focus:border-purple-600 ' value={img} onChange={(e) => setImg(e.target.value)} />
                                {err === true && img === '' ? <span className='text-red-600'>Image Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Price</label>
                                <input type="number" placeholder='Product Price' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={price} onChange={(e) => setPrice(e.target.value)} />
                                {err === true && price === '' ? <span className='text-red-600'>Price Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Quantity</label>
                                <input type="number" placeholder='Product Quantity' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                {err === true && quantity === '' ? <span className='text-red-600'>Quantity Required</span> : null}
                            </div>
                            <div className='my-2'>
                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Description</label>
                                <input type="text" placeholder='Product Description' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={description} onChange={(e) => setDesc(e.target.value)} />
                                {err === true && description === '' ? <span className='text-red-600'>Description Required</span> : null}
                            </div>
                        </div>
                        <button className=' w-full bg-purple-600 hover:bg-purple-900 text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md' onClick={handleSubmit}>Add Product</button>
                    </form>

                </div>
            </div>
        </>
    )
}
export default AddProductForm