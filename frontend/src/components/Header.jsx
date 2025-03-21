import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import domain from '../common';
import { toast } from 'react-toastify';
function Header() {
  
  const user = useSelector((state) => state?.user?.user);
  console.log("User:", user);
  // if (!user) {
  //   return <div>Loading...</div>;
  // }
  
  const handleLogout = async () => {

    try {
        const fetchData = await fetch(domain.logout_user.url, {
            method: domain.logout_user.method,
            credentials: "include", // ✅ Required to send cookies
        });

        const data = await fetchData.json();

        if (data.success) {
            toast.success(data.message);
            window.location.reload();
        } else {
            toast.error("Logout failed");
        }
    } catch (error) {
        console.error("Error during logout:", error);
        toast.error("Something went wrong!");
    }
};


  return (
    <header className='w-screen px-4 py-2 shadow-md'>
      <div className='w-full flex pl-4  h-[60px] justify-between items-center bg-yellow-200 text-black'>
        <div>
          <Link to={'/Login'}  >
          {
            user?.profilePic ? (
              <Link to={'/admin'}>
              <img src={user.profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
              </Link>
              
            ) : (
              
              <Logo />
            )
          }
         
          </Link>
        </div>
        <div>
          
        <div className='hidden md:flex flex-row w-full max-w-sm border rounded-full'>
        <input type="search" name="" id="" placeholder='search' className='w-3xl h-9 outline-none rounded-l-3xl pl-2 border'/>
       <div className='text-2xl items-center justify-center bg-blue-200 rounded-r-3xl max-w-[50px] h-9'>
       <FaSearch className='items-center justify-center'  /> </div>   
        </div>
        </div>
        <div className='flex flex-row gap-2'>
          <div>
            <CiUser className='text-2xl'/>
            
      
            
          </div>
         <div className='flex justify-start flex-row gap-2'>
          <FaCartShopping className='text-2xl'/>
          <div className='bg-red-400 text-white text-sm absolute top-0 right-0    rounded-full w-4 h-4 flex justify-center items-center'>
            <span>0</span>
          </div>
          {
            user ? (
              <div>
                <button className='text-sm bg-red-400 text-white px-4 py-1 rounded-full hover:bg-red-800 cursor-pointer  ' onClick={handleLogout}>
            Logout
          </button>
              </div>
            ) : (
              <div>
                <Link to={'/Login'}><div className='text-sm bg-red-400 text-white px-4 py-1 rounded-full hover:bg-red-800 cursor-pointer  '>
            login
          </div></Link>
              </div>
            )
          }

         </div>
        </div>
       
      </div>
    </header>
  )
}

export default Header