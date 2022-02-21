import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/about";
import Education from "./components/education";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import {useState} from "react";
import Rrss from "./components/rrss";
import TicTacToe from "./components/ticTacToe";

function App() {

  const [page, setPage] = useState('about')

  return (
      <Router>
        <div className={'flex flex-col items-start text-gray-300 h-screen font-arimo bg-zinc-800'}>
          <div className={'px-10 flex justify-start items-center w-full h-10 bg-zinc-900 font-bold'}>
            <Link className={(page === 'about' ? 'bg-zinc-800 ' : '') + 'h-full flex items-center px-3 transition ease-in-out delay-150 hover:scale-125 duration-300 mx-5'} to={'/'} onClick={() => setPage('about')}>
              About
            </Link>
            <Link className={(page === 'education' ? 'bg-zinc-800 ' : '') + 'h-full flex items-center px-3 transition ease-in-out delay-150 hover:scale-125 duration-300 mx-5'} to={'/education'} onClick={() => setPage('education')}>
              Education
            </Link>
            <Link className={(page === 'portfolio' ? 'bg-zinc-800 ' : '') + 'h-full flex items-center px-3 transition ease-in-out delay-150 hover:scale-125 duration-300 mx-5'} to={'/portfolio'} onClick={() => setPage('portfolio')}>
              Portfolio
            </Link>
            <Link className={(page === 'contact' ? 'bg-zinc-800 ' : '') + 'h-full flex items-center px-3 transition ease-in-out delay-150 hover:scale-125 duration-300 mx-5'} to={'/contact'} onClick={() => setPage('contact')}>
              Contact
            </Link>
            <Link className={(page === 'ticTacToe' ? 'bg-zinc-800 ' : '') + 'h-full flex items-center px-3 transition ease-in-out delay-150 hover:scale-125 duration-300 mx-5'} to={'/ticTacToe'} onClick={() => setPage('ticTacToe')}>
              TicTacToe
            </Link>
          </div>
          <Routes>
            <Route path={'/'} element={<About/>}/>
            <Route path={'/education'} element={<Education/>}/>
            <Route path={'/portfolio'} element={<Portfolio/>}/>
            <Route path={'/contact'} element={<Contact/>}/>
            <Route path={'/ticTacToe'} element={<TicTacToe/>}/>
          </Routes>
          <Rrss/>
        </div>
      </Router>
  );
}

export default App;