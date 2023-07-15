import AddProductForm from '../components/AddProductForm';
import SideBar from '../components/SideBar';

function NewProduct() {
    return (
        <>
        <div className='flex gap-8'>
        <SideBar />
        <AddProductForm />
        </div>
        </>
    )
}
export default NewProduct