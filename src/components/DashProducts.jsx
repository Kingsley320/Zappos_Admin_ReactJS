
function DashProducts(props) {
    return (
        <>
            <tr className="w-full grid grid-cols-5  text-left border-t-gray-300  pt-2 border-t-1 mt-2 h-12">
                <td className='text-xs'>{props.id}</td>
                <td className='text-xs w-14 overflow-hidden'><img src={props.image} alt="product" /></td>
                <td className='w-4'>{props.cat}</td>
                <td className=''>{props.quantity}</td>
                <td className='text-xs'>{props.description}</td>
            </tr>
        </>
    )
}
export default DashProducts