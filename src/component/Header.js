import React from 'react';
import '../css/app.css';
import logo from '../assets/logoheader.png'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
   <section id="home" className="pt-36 dark:bg-dark pb-36">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-4 lg:w-1/2">
                    <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl ">Haloo semua👋, Mau Belajar Design? <span className="block text-4xl text-dark font-bold mt-1 tracking-wide lg:text-5xl dark:text-white pb-6"> Yuuk Gabung Design Grapic </span> </h1> 
                    <Link to='mailto:zaqiinmtqn171206@gmail.com' target='_blank' className="font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-md hover:opacity-75 hover:drop-shadow-2xl active:ring-2 active:ring-teal-600 transition-all duration-100 ease-in-out">Hubungi</Link>
                </div>
                <div className="w-48 self-end px-4 lg:w-1/2 lg:right-0">
                    <div className="mt-10 relative">
                        <img src={logo} alt="logo" className="max-w-full mx-auto relative z-10 " />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
