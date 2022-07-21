import {Link, Route, Routes} from 'react-router-dom'
import './css/app.css';
import Footer from './component/Footer';
import Header from './component/Header';
import JustArrived from './component/JustArrived';
import Navbar from './component/Navbar';
import Projek from './component/Projek';
import Rute from './component/Rute';
import Blog from './component/Blog';

function App() {
  return (
    <div className="App">
         <Navbar/>
         <Header />
        <JustArrived/>
        <button className='text-center w-full py-20'>
        <Link to='/rute' className='bg-slate-300 focus:bg-slate-500 rounded-full py-4 px-3 text-lg'>Lihat kami lebih lanjut.</Link>
        </button>
      <Routes>
        <Route path='rute' element={<Rute/>}>
          <Route path='projek' element={ <Projek />} />
          <Route path='artikel' element={ <Blog />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
