import img1 from '../assets/images/61ek-RXN-7L-_AC_SR255-340__FMwebp_.jpg';

function ProductCard(props) {

    return (
        <>
            <div>
                <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img className="block mx-auto h-24 sm:mx-0 sm:shrink-0" src={props.image} alt="product" />
                    <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                            <p className="text-lg text-black font-semibold">
                                {props.name}
                            </p>
                            <p className="text-slate-500 font-medium">
                                {props.category}
                            </p>
                        </div>
                        <div className='flex gap-2'>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View</button>
                            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" 
                            onClick={props.productDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductCard