import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Rute() {
  return (
    <section className='w-full text-center pt-20 pb-20 text-2xl bg-slate-100'>
        <Link to='projek' className='hover:text-primary active:text-primary focus:border-b-8 focus:border-primary mr-4'>Projek</Link>
        <Link to='artikel' className='hover:text-primary active:text-primary  focus:border-b-8 focus:border-primary'>Artikel</Link>      
        <Outlet />
    </section>
  )
}
