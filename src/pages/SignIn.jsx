import { useState } from 'react';
import img1 from '../assets/images/zapposPBS-_CB1509642213_.svg';
import Footer_2 from '../components/Footer_2';
import { useNavigate } from "react-router-dom";



function SignIn() {
    const [err, setErr] = useState(false);
    const password = 'rework';
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pass === '') {
            setErr(true);
        }
        else if (pass == password) {
            navigate('/dashboard');
           }
    }


    return (
        <>
            <div className=' mb-28 text-center h-[67vh] pt-20'>
                <img src={img1} alt="logo" className='h-11 inline align-middle text-white' />
                <div className='border-1 border-gray-400 text-left w-85 mx-auto mt-4 rounded-md px-6 py-5 my-8 font-sans'>
                    <h1 className='text-3xl font-Arial'>Admin Sign in</h1>
                    <form action="">
                        <div className='my-2'>
                            <label className='text-sm flex justify-between font-semibold mb-0.5'>Password <a href="#" className='text-blue-custom font-normal hover:underline underline-offset-4'>Forgot your password?</a></label>
                            <input type="text" className='w-full rounded xl outline-none border-2 border-gray-300 text-sm text-black py-1 px-3 focus:border-black' value={pass} onChange={(e) => setPass(e.target.value)} />
                            {err === true && pass === '' ? <span className='text-red-600'>Password Required</span> : null}
                        </div>
                        <button className=' w-full bg-blue-custom text-white font-semibold text-sm mx-auto mt-2 my-2 py-1.5 rounded-md hover:bg-sky-700' onClick={handleSubmit}>Sign in</button>
                    </form>

                </div>
            </div>

            <Footer_2 className="sticky bottom-0" />

        </>
    )
}
export default SignIn