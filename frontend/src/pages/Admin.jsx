import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'

function Admin() {
    const user = useSelector((state) => state?.user?.user);
  return (
    <div className='min-h-[calc(100vh-80vh)] md:flex hidden'>

        <aside
        className='bg-white h-screen w-[300px] max-w-60'>
            <div className='h-32 flex flex-col  justify-center itmes-center '>
                <div className='text-5xl cursor-pointer relative flex justify-center'>
                    {
                        user?.profilePic?(
                            <img src={user?.profilePic} alt="profilePic" className='w-20 h-20 rounded-full' />
                        ):(
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profilePic" className='w-20 h-20 rounded-full' />
                        )
                        
                    }

                </div>
                <p className='capitalize font-semibold text-lg justify-center items-center'>{user?.name}</p>
                <p className='text-sm'>{user?.role}</p>

            </div>
            <div>
                <nav className='flex flex-col gap-2 justify-center items-center'>
                    <Link to={"all-users"}> All users </Link>
                    <Link to={"products"}> Products </Link>
                </nav>
            </div>
        </aside>
        <main className='flex-1 p-10'>
            <Outlet/>
        </main>
        
    </div>
  )
}

export default Admin