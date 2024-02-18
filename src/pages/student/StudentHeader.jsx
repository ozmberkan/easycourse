import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { BsClockFill } from "react-icons/bs";

export default function StudentHeader() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => { setTime(new Date()) }, 1000);
  }, [])

  return (
    <div className='h-20 text-white pt-4'>
      <nav className='flex justify-between items-center'>
        <Link to="/">
          <h1 className='font-damion text-[50px] cursor-pointer'>easycourse</h1>
        </Link>
        <div className='flex gap-x-4'>
          <p className='border-primary-color gap-x-4 border text-primary-color w-36  px-4 py-2 rounded-md font-montserrat flex justify-center items-center'>
            <BsClockFill />
            {time.toLocaleTimeString()}
          </p>
          <Link to="/studentmeet">
            <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Randevularım</button>
          </Link>
          <Link to="/studentprofile">
            <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Profilim</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
