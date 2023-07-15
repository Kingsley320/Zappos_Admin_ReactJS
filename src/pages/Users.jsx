import ShowUsersInfo from "../components/ShowUsersInfo"
import SideBar from "../components/SideBar"

function Users() {
    return (
        <>
            <div className='flex gap-8'>
                <SideBar />
                <ShowUsersInfo />
            </div>
        </>
    )
}
export default Users