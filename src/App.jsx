import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Checklist from './pages/Checklist';
import Login from './pages/Login';
import backgroundImage from './assets/hblgreen.png';

function App() {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div className="px-auto">
        <Navbar />
        <div>
        
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pages/Tutorial" element={<Tutorial />} />
              <Route path="/pages/Checklist" element={<Checklist  tasks={['Buy groceries', 'Finish homework', 'Walk the dog']} />} />
              <Route path="/pages/Login" element={<Login />} />
            </Routes>
          
        </div>
      </div>
      
    </div>

  );
}


export default App;
