import React from 'react';
import fotoSatu from '../assets/foto1.jpg';
import fotoKedua from '../assets/foto2.jpg'

export default function FeaturedWorks() {
  return (
    <section className='pt-36'>
        <div>
        <img src={fotoKedua} alt='' className='float-left'/>
        <h1>Designing Dashboards</h1>
        <div>
            <p>2020</p>
            <p>Vanilla FE</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div>
        <img src='' alt=''/>
        <h1>Designing Dashboards</h1>
        <div>
            <p>2020</p>
            <p>Vanilla FE</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div>
        <img src='' alt=''/>
        <h1>Designing Dashboards</h1>
        <div>
            <p>2020</p>
            <p>Vanilla FE</p>
        </div>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    </section>
  )
}
