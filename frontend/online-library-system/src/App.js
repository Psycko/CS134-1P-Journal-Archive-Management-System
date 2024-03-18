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
import { AuthorizeAdmin, AuthorizeUser } from "./hooks/authorize";

function App() {
  const adminState = AuthorizeAdmin();
  const userState = AuthorizeUser();
  
  console.log(adminState);
  console.log(userState);
  return (
    <div className='App'>
        
        <Routes>
          <Route index element={userState ?<Home/> : <StudLogin/>} />
          <Route path="login" element={userState? <Home/>: <StudLogin/>} />
          <Route path="register" element={userState? <Home/> : <Register/>} />
          <Route path="category/mathematics" element={userState ? <MathManuscript/> : <StudLogin/>} />
          <Route path="category/robotics" element={userState ? <Robotics/> : <StudLogin/>} />
          <Route path="category/lifescience" element={userState ? <LifeSci/> : <StudLogin/>} />
          <Route path="category/socialscience" element={userState ? <SocSci/> : <StudLogin/>} />
          <Route path="admin-login" element={<AdminLogin/>} />
          <Route path="admin-monitor" element={adminState ? <Dashboard/> : <AdminLogin/>} />
          <Route path="admin-access" element={adminState ? <Admin/> : <AdminLogin/>} />
          <Route path="admin-pdf-management" element={adminState ? <PDFManagement/> : <AdminLogin/>} />
          <Route path="admin-pdf-monitor" element={adminState ? <PDFMonitor/> : <AdminLogin/>} />
          <Route path="admin-student-management" element={adminState ? <AccountManagement/> : <AdminLogin/>} />
          <Route path="*" element={<Error404/>} />
          
        </Routes>
      
      
    </div>
  );
}

export default App;
