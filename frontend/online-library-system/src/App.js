import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/NoPage';
import MathManuscript from './pages/Math';
import LifeSci from './pages/Lifesci';
import SocSci from './pages/Socsci';
import Robotics from './pages/Robotics';
import Admin from './pages/Admin';
import StudLogin from './pages/StudLogin';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/studMonitor';
import PDFManagement from './pages/pdfManagement';
import PDFMonitor from './pages/pdfMonitor';
import AccountManagement from './pages/accountManagement';

function App() {
  return (
    <div className='App'>
        
        <Routes>
          <Route index element={<StudLogin/>} />
          <Route path="register" element={<Register/>} />
          <Route path="category/all" element={<Home/>} />
          <Route path="category/mathematics" element={<MathManuscript/>} />
          <Route path="category/robotics" element={<Robotics/>} />
          <Route path="category/lifescience" element={<LifeSci/>} />
          <Route path="category/socialscience" element={<SocSci/>} />
          <Route path="admin-login" element={<AdminLogin/>} />
          <Route path="admin-monitor" element={<Dashboard/>} />
          <Route path="admin-access" element={<Admin/> } />
          <Route path="admin-pdf-management" element={<PDFManagement/>} />
          <Route path="admin-pdf-monitor" element={<PDFMonitor/>} />
          <Route path="admin-student-management" element={<AccountManagement/>} />
          <Route path="*" element={<Error404/>} />
          
        </Routes>
      
    </div>
  );
}

export default App;
