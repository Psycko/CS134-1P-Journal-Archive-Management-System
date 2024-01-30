import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/NoPage';
import MathManuscript from './pages/Math';
import LifeSci from './pages/Lifesci';
import SocSci from './pages/Socsci';
import Robotics from './pages/Robotics';
import Admin from './pages/Admin';


function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route index element={<Home/>} />
          <Route path="category/mathematics" element={<MathManuscript/>} />
          <Route path="category/robotics" element={<Robotics/>} />
          <Route path="category/lifescience" element={<LifeSci/>} />
          <Route path="category/socialscience" element={<SocSci/>} />
          <Route path="admin-access" element={<Admin/> } />
          <Route path="*" element={<Error404/>} />
        </Routes>
      
     
      
    </div>
  );
}

export default App;
