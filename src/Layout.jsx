
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import { SideNav } from './components/SideNav'

const Layout = () => {
    return (
        <main className='layout_container w-full h-full bg-[#FFFFFF]  flex-col'>
            <Header />
            <div className='w-full  h-[100vh] overflow-hidden  flex items-start justify-start gap-1'>
                <SideNav />
                <div className='outlet_container w-full h-[100vh] mt-20 p-5 overflow-x-hidden overflow-y-scroll mb-24'>
                    <Outlet />
                </div>
            </div>


        </main>
    )
}

export default Layout