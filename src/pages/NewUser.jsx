import NewUserForm from '../components/NewUserForm';
import SideBar from '../components/SideBar';

function NewUser() {
    return (
        <>
        <div className='flex gap-8'>
        <SideBar />
        <NewUserForm />
        </div>
        </>
    )
}
export default NewUser