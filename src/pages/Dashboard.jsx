import DashInfo from '../components/DashInfo';
import SideBar from '../components/SideBar';

function Dashboard() {
    return (
        <>
        <div className='flex gap-8'>
        <SideBar />
        <DashInfo />
        </div>
        </>
    )
}
export default Dashboard