import React from 'react'
import image from '../assets/image/image'
import { useNavigate } from 'react-router-dom';
import IconList from '../component/IconList';
export default function Success({setIsConnected}) {
  const addressAccount = localStorage.getItem('addressAccount')
  const balanceAccount = localStorage.getItem('balance')
  const handleLogout = () => {
    setIsConnected(false);
    localStorage.removeItem('addressAccount')
  };
    return (
        <div className='relative flex items-center justify-center h-screen'>
            <div className='lg:w-[35%] w-full m-auto absolute  rounded-md flex flex-col gap-y-4 p-4 shadow-formShadow items-center'>
                <div className='my-4 text-center'>
                    <h1 className='text-base font-bold'>You are connected .</h1>
                    <img src={image.eth} alt='ETH' className='w-32 mx-auto my-4' />
                    <p className='text-2xl font-bold text-center'>Balance: {balanceAccount} ETH</p>
                    <p className='my-2'>{addressAccount}</p>
                </div>
                <IconList/>
                <button className='w-full h-10 mt-4 text-white rounded-md ndv__button' onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    )
}
