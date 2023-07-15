import UserTableRow from "./UserTableRow";
import axios from "axios";
import { useEffect, useState } from "react";

function ShowUsersInfo() {
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState([]);
    const ip = 'http://159.65.21.42:9000';
    const url = `${ip}/users`;
    const updurl = `${ip}/user`;
    const delurl = `${ip}/user`;

    const handleLoad = async () => {
        try {
            let response = await axios.get(url);
            const data = response.data;
            // console.log(data);
            response ? setUsers(data) : log('network');
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => {
        // console.log(`${delurl}/${id}`);
        if (window.confirm("Continue delete? ")) {
            axios.delete(`${delurl}/${id}`)
            setShow(true);
            setTimeout(() => setShow(false),2500);
            handleLoad();
        }
    }

    useEffect(() => {
        handleLoad();
    }, [])

    return (
        <>
            <div className="w-full ">
                <div className="sticky top-0">
                    <div className="pt-8 p-3 mb-10 bg-white  border-b-1 border-l-1 border-purple-600">
                        <h1 className="text-3xl font-bold ">Users</h1>

                    </div>
                    {
                        show === true ? (
                            <div className='flex align-middle justify-center bg bg-green-500 w-full h-10 text-white text-lg font-semibold text-center mt-4'>
                                <p className='my-auto'>User Deleted</p>
                            </div>
                        ) : (null)
                    }
                </div>

                <div className="w-full bg-white mt-8 rounded-lg p-3 mr-8">
                    <table className="w-full mr-5">
                        <thead>
                            <tr className="w-full grid grid-cols-5  mr-5">
                                <th className="text-left">Id</th>
                                <th className="text-left">name</th>
                                <th className="text-left">phone</th>
                                <th className="text-left">email</th>
                                <th className="text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? (
                                    users.map(user => (
                                        <UserTableRow id={user._id} name={user.name} phone={user.phone} email={user.email} key={user._id} userDelete={() => handleDelete(user._id)} updateUser={() => UpdateHandler(user._id)} />
                                    ))
                                ) :
                                    (
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
export default ShowUsersInfo