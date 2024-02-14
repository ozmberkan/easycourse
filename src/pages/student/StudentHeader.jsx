import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function StudentHeader() {

  return (
    // ilk section baslangic
    <div className='h-20 text-white pt-4'>
        <nav className='flex justify-between items-center'>
          <Link to="/">
          <h1 className='font-damion text-[50px] cursor-pointer'>easycourse</h1>
          </Link>
          <div className='flex gap-x-4'>
            <Link to="/">
              <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Derslerim</button>
            </Link>
            <Link to="/studentmeet">
              <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Randevularım</button>
            </Link>
            <Link to="/studentprofile">
              <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Profilim</button>
            </Link>
          </div>
        </nav>
    </div>
    // ilk section bitis
  );
}
