import React from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 sticky-top">
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-primary  block py-6">
                        <img src={logo} alt="Logo" className='w-12'/>
                    </a>
                </div>
                <div className="flex items-center justify-center px-4">
                   <nav>
                    <a href='#https://www.instagram.com/designgrapic_bkm' target='_blank' className='mr-[10px] hover:text-primary'>Instagram</a>
                    <a href='#https://api.whatsapp.com/send?phone=628987061272'  target='_blank' className='hover:text-primary'>Contact</a>
                   </nav>
                </div>
            </div>
        </div>

    </header>
  )
}
