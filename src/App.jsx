import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Home from './components/Home';
import Header from './components/Header';


const App = () => {
  return ( 
    <>
    <Header />
    <Routes>
      <Route 
       path="/"
       element={<Home/>}/>
       <Route 
       path="/Login"
       element={<Login/>}/>
        <Route 
       path="/Register"
       element={<Register/>}/>
    </Routes>
    <Footer />
    </>
   );
}
 
export default App;












// import './App.css';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Header from './components/Pages/Header';
// import Footer from './components/Pages/Footer';
// import Content from './components/Pages/Content';
// import Login from './components/Pages/Login';
// import MovieCard from './components/Pages/MovieCard';
// import Register from './components/Pages/Register';
// import Modal from './components/Modal/Modal';

// const App = () => {
//   return (<>
//     <Header />
//     <Modal />

//     <Routes>
//       <Route
//         path=""
//         element={<Content />} />

//       <Route
//         path="/MovieCard"
//         element={<Modal />} />
//       <Route
//         path='/Login'
//         element={<Login />}
//       />
//       <Route
//         path='/Register'
//         element={<Register />}
//       />
//       <Route
//         path="/"
//         element={<MovieCard />} />
//     </Routes>
//     <Footer />
//   </>);
// }

// export default App;
