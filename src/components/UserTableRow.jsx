import img1 from '../assets/images/zapposPBS-_CB1509642213_.svg'
import UpdateUserModal from './UpdateUserModal'

function UserTableRow(props) {
    return (
        <>
            <tr className="w-full grid grid-cols-5  text-left border-t-gray-300  pt-2 border-t-1 mt-2">
                <td className='text-xs '>{props.id}</td>
                <td className=''>{props.name}</td>
                <td className=''>{props.phone}</td>
                <td className=''>{props.email}</td>
                <td className="flex gap-3 ml-3"><button className="text-red-700 bg-red-300 font-bold rounded-md hover:brightness-75 px-2 py-0.5" onClick={props.userDelete}>Delete</button>
                    <UpdateUserModal onClick={props.updateUser}/>
                </td>
            </tr>
        </>
    )
}
export default UserTableRow