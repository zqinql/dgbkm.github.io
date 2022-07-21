import React from 'react';
import vektor1 from '../assets/vektor1.jpg';
import vektor2 from '../assets/vektor2.jpg';
import silvia from '../assets/silvia_15 upload2.png';
import logoFA from  '../assets/logofa.jpg'


export default function Projek() {
  return (
    <section id="portfolio" className="pt-20 pb-16 bg-slate-100 dark:bg-dark">
    <div className="container">
        <div className="w-full px-4">
            <div className="m-auto text-center mb-16">
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Project</h2>
                <p className="font-medium text-md text-secondary md:text-lg dark:text-slate-300">Kumpulan projek terbaru dari kami.</p>
            </div>
        </div>
        <div className="w-full flex px-4 flex-wrap justify-center xl:w-10/12 mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src={vektor1} alt="Portfolio" width="w-full" />
                </div>
                <h3 className="text-xl font-semibold text-dark mt-5 mb-3 dark:text-white"> Vektor Muka </h3>
                <p className="font-medium text-base text-secondary dark:text-slate-300">Karya: Zainal Muttaqin. Menggunakan Coreldraw</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src={silvia} alt="Game Suit" width="w-full" />
                </div>
                <h3 className="text-xl font-semibold text-dark mt-5 mb-3 dark:text-white"> Vektor Mobil </h3>
                <p className="font-medium text-base text-secondary dark:text-slate-300">Karya: Fiqi. Menggunakan Coreldraw
                </p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src={logoFA} alt="Bootstrap Portfolio" width="80%" />
                </div>
                <h3 className="text-xl font-semibold text-dark mt-5 mb-3"> Logo FA </h3>
                <p className="font-medium text-base text-secondary dark:text-slate-300">Karya: Zainal Muttaqin. Menggunakan Coreldraw.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src={vektor2} alt="Bootstrap Portfolio" width="w-full" />
                </div>
                <h3 className="text-xl font-semibold text-dark mt-5 mb-3"> Vektor Muka </h3>
                <p className="font-medium text-base text-secondary dark:text-slate-300">Karya: Agung Ridho. Menggunakan Coreldraw.</p>
            </div>
           
          
        </div>
    </div>
</section>
  )
}
