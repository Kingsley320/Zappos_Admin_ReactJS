import ShowProductsInfo from "../components/ShowProductsInfo"
import SideBar from "../components/SideBar"

function Products() {
    return (
        <>
            <div className='flex gap-8'>
                <SideBar />
                <ShowProductsInfo />
            </div>
        </>
    )
}
export default Products