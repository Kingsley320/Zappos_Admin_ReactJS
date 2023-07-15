import { BsShop } from "react-icons/bs";    

function AdminCard(props) {
    return (
        <>
            <div className="flex gap-5 bg-white px-10 py-3 text-lg rounded-lg">
                <div className="flex align-middle h-14 w-14 rounded-full bg-sky-300 ">
                    <BsShop className="my-auto mx-auto text-sky-800 h-6 w-6  " />
                </div>
                <div>
                    <h3>{props.num}</h3>
                    <small className="text-gray-500">{props.heading}</small>
                </div>
            </div>
        </>
    )
}
export default AdminCard