import React from 'react'
import Header from '/src/pages/home/Header.jsx'
import registerill from '/src/assets/registerill.png'
import googleImg from '/src/assets/googleLogo.png'
import facebookImg from '/src/assets/facebookLogo.png'
import Footer from '/src/pages/home/Footer.jsx'
import useMedia from '/src/hooks/useMedia'

export default function Register() {

  const isMobile = useMedia(1024);

  if (isMobile) {
    return (
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
        <div className='container mx-auto flex flex-col px-4 py-4'>
          <Header />
          <div className='bg-white shadow-xl w-full  items-center rounded-xl max-h-full flex flex-col mt-6'>
            <div className='flex justify-center items-center w-full bg-white  rounded px-1 py-1 max-h-full'>
              <img src={registerill} alt="" className='object-cover w-[150px] drop-shadow-lg mt-1' />
            </div>
            <div className='flex justify-start items-center w-full h-full py-8 flex-col px-12'>
              <h1 className='text-primary-color font-montserrat font-bold text-[20px] mb-4'>Kayıt Ol</h1>
              <span className='text-black font-montserrat text-opacity-50 font-semibold text-xs text-center'>Avantajlardan yararlanmak için easycourse ailesine katıl!</span>
              <form className='flex justify-center items-center flex-col w-full mt-4 gap-y-4'>
                <input type="email" placeholder='E-posta Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="password" placeholder='Parola Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="password" placeholder='Parola Tekrar Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="number" placeholder='Telefon Numarası Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <button className='w-full py-4 bg-primary-color text-white rounded-lg font-montserrat font-bold' type='submit'>Kayıt Ol</button>
                <div className='w-full flex gap-x-4 flex-col gap-y-2'>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-3 text-center w-full  rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={googleImg} alt="" className='w-4 h-4' />
                    <p>Google ile Kayıt Ol!</p>
                  </a>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-3 text-center  w-full rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={facebookImg} alt="" className='w-4 h-4' />
                    <p>Google ile Kayıt Ol!</p>
                  </a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

    )
  }

  return (
    <>
      <div className='w-full h-screen bg-[url("/src/assets/mainWallpaper.png")] bg-cover bg-center' >
        <div className='container mx-auto flex flex-col gap-y-12 h-screen'>
          <Header />
          <div className='bg-white  shadow-xl w-full h-[700px] grid grid-cols-2 items-center rounded-xl max-h-full'>
            <div className='flex justify-start items-center w-full h-full py-8 flex-col px-12'>
              <h1 className='text-primary-color font-montserrat font-bold text-[40px] mb-4'>Kayıt Ol</h1>
              <span className='text-black font-montserrat text-opacity-50 font-semibold text-xl'>Avantajlardan yararlanmak için easycourse ailesine katıl!</span>
              <form className='flex justify-center items-center flex-col w-full mt-4 gap-y-4'>
                <input type="email" placeholder='E-posta Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="password" placeholder='Parola Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="password" placeholder='Parola Tekrar Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <input type="number" placeholder='Telefon Numarası Giriniz...' className='w-full py-4 px-4 border-[2px] rounded-lg border-primary-color' />
                <button className='w-full py-4 bg-primary-color text-white rounded-lg font-montserrat font-bold' type='submit'>Kayıt Ol</button>
                <div className='w-full flex gap-x-4'>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full  rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={googleImg} alt="" className='w-4 h-4' />
                    <p>
                    Google ile Kayıt Ol!
                    </p>
                  </a>
                  <a href="#" className='text-primary-color font-montserrat font-semibold border border-primary-color py-6 px-12 w-full rounded-lg flex gap-x-4 text-sm justify-center items-center'>
                    <img src={facebookImg} alt="" className='w-4 h-4' />
                    <p>
                    Facebook ile Kayıt Ol!
                    </p>
                    
                  </a>
                </div>
              </form>
            </div>
            <div className='flex justify-center items-center w-full h-full bg-primary-color rounded-tr-lg rounded-br-lg px-4 py-4 max-h-full'>
              <img src={registerill} alt="" className='object-cover w-[600px]' />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}
