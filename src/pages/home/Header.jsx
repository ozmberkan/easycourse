import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useMedia from '/src/hooks/useMedia'
import { BottomSheet } from 'react-spring-bottom-sheet'
import 'react-spring-bottom-sheet/dist/style.css'
import { BsThreeDots } from "react-icons/bs";



export default function Header() {

    const [open, setOpen] = useState(false)


    const isMobile = useMedia(1024);

    if (isMobile) {
        return (
            <div className='bg-white rounded-bl-lg rounded-br-lg px-4 py-4'>
                <nav className='flex justify-between items-center'>
                    <Link to="/" className='font-damion text-[30px] cursor-pointer flex justify-center items-center'>easycourse</Link>
                    <button onClick={() => setOpen(true)} className='text-black text-[40px] mr-2 flex justify-center items-center'><BsThreeDots /></button>
                </nav>
                <BottomSheet open={open} onDismiss={() => setOpen(false)}>
                    <div className='flex flex-col w-full px-4 py-4 gap-y-4'>
                        <Link to="/login" className='text-primary-color  border border-primary-color  px-4 py-2 rounded-md font-montserrat flex justify-center items-center'>Giriş Yap</Link>
                        <Link to="/register" className='text-primary-color  border border-primary-color  px-4 py-2 rounded-md font-montserrat flex justify-center items-center'>Kayıt Ol</Link>
                    </div>
                </BottomSheet>
            </div>
        )
    }



    return (
        <div className='h-20 text-white pt-4'>
            <nav className='flex justify-between items-center'>
                <Link to="/">
                    <h1 className='font-damion text-[50px] cursor-pointer'>easycourse</h1>
                </Link>
                <div className='flex gap-x-4'>
                    <Link to="/advantage" className='bg-primary-color text-white  px-4 py-2 rounded-md font-montserrat flex justify-center items-center'>Avantajlar</Link>
                    <Link to="/login">
                        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Giriş Yap</button>
                    </Link>
                    <Link to="/register">
                        <button className='bg-primary-color px-4 py-2 rounded-md font-montserrat'>Kayıt Ol</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}