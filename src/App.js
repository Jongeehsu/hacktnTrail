import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route ,} from 'react-router-dom';
import SignAndLog from './pages/SignAndLog';
import Navbar from './components/Navbar';
import DetailArrange from './pages/DetailArrange';
import BriefArrange from './pages/BriefArrange';



function App() {

  

  return (
    <>
  
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/post' exact element={<SignAndLog />} />
          <Route path='/trips' exact element={<Home/>} />
          <Route path='/sign-up' exact element={<SignAndLog/>} />
          <Route path='/briefarrange' exact element={<BriefArrange/>} />
          <Route path='/detailarrange'  exact element={<DetailArrange/>} />
        </Routes>
      </Router>
     
    </>
    
  
   
  );
}

export default App ;
