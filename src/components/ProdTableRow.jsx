import img1 from '../assets/images/zapposPBS-_CB1509642213_.svg'

function ProdTableRow(props) {
    return (
        <>
            <tr className="w-full grid grid-cols-5  text-left border-t-gray-300  pt-2 border-t-1 mt-2">
                <td className='text-xs'>{props.id}</td>
                <td className='text-xs overflow-clip w-32'><img src={props.image} /></td>
                <td className='w-4'>{props.cat}</td>
                <td className=''>{props.quantity}</td>
                <td className='text-xs'>{props.description}</td>
                <td className="flex gap-3"><button className="text-red-700 bg-red-300 font-bold rounded-md hover:brightness-75 px-2 py-0.5">Delete</button>
                    <button className="text-sky-700 bg-sky-300 font-bold rounded-md hover:brightness-75 px-2 py-0.5">Update</button>
                </td>
            </tr>
        </>
    )
}
export default ProdTableRow