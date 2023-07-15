import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';

function UpdateUserModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState(false);
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const ip = "http://159.65.21.42:9000";
    const url = `${ip}/users`;
    const updurl = `${ip}/user`;


    const duplicate = () => {
        openModal();

    }

    const handleSubmit = async (id) => {
        if (
            name === '' || phone === '' | email === '' | password === ''
        ) {
            setErr(true);
            return;
        }
        const newUser = {
            name: name,
            phone: phone,
            email: email,
            password: password,
        }
        // setName('');
        // setPhone('');
        // setEmail('');
        // setPassword('');
        console.log((newUser));

        try {
            let response = await axios.get(url);
            const data = response.data;
            console.log(data);
            response ? setUsers(data) : log('network');
            console.log(users);
        } catch (err) {
            console.log(err);
        }

        const UpdateHandler = (id) => {
            if (window.confirm("Continue update? ")) {
                axios.put((`${updurl}/${id}`), newUser);
                console.log(`${updurl}/${id}`);
                console.log(users);
            }
            setShow(true);
            setTimeout(() => setShow(false), 2500);
        }
        UpdateHandler(id);
    }

    // const handleLoad = async () => {
    //     try {
    //         let response = await axios.get(url);
    //         const data = response.data;
    //         console.log(data);
    //         response ? setUsers(data) : log('network');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    

    // useEffect(() => {
    //     handleLoad();
    // }, [])



    return (
        <>
            <div  onLoad={() => handleLoad}>
                <button
                    type="button"
                    onClick={duplicate}
                    className="text-sky-700 bg-sky-300 font-bold rounded-md hover:brightness-75 px-2 py-0.5"
                // onClick= {(id) => updateUser}
                >
                    Update
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-4 text-gray-900"
                                    >
                                        Update User Info
                                    </Dialog.Title>
                                    <form className='w-full  bg-white p-10 rounded-xl'>
                                        <div>

                                            <div className='mb-4'>
                                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Full Name</label>
                                                <input type="text" placeholder='Full Name' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10'
                                                    value={name} onChange={(e) => setName(e.target.value)}
                                                />
                                                {err === true && name === '' ? <span className='text-red-600'>Full Name Required</span> : null}

                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Phone Number</label>
                                                <input type="text" placeholder="User's Phone Number" className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10'
                                                    value={phone} onChange={(e) => setPhone(e.target.value)}
                                                />
                                                {err === true && phone === '' ? <span className='text-red-600'>Phone Number Required</span> : null}
                                            </div>
                                            <div className='my-4'>
                                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Email</label>
                                                <input type="email" placeholder='Email' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                {err === true && email === '' ? <span className='text-red-600'>Email Required</span> : null}
                                            </div>
                                            <div className='mt-4'>
                                                <label htmlFor="" className='text-sm block font-semibold mb-0.5'>Password</label>
                                                <input type="password" placeholder='Password' className='w-full rounded-xl outline-none border-1 border-gray-300 text-sm text-black py-1 px-3 focus:border-purple-600 h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
                                                {err === true && password === '' ? <span className='text-red-600'>Password Required</span> : null}
                                            </div>
                                        </div>
                                    </form>

                                    <div>
                                        <button className=' w-full bg-gray-400 hover:bg-gray-600 text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md' onClick={closeModal}>Close</button>
                                        <button className=' w-full bg-purple-600 hover:bg-purple-900 text-white font-semibold text-sm mx-auto mt-2 my-2 py-2 rounded-md'  onClick={() => handleSubmit(users._id)}>Update User</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default UpdateUserModal