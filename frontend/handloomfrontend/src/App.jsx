import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Mainhome from './UI/Mainhome';
import Customersignup from './UI/Customersignup';
import Customerlogin from './UI/Customerlogin';
import Customerhome from './UI/Customerhome';
import Artisansignup from './UI/Artisansignup';  // Corrected spelling
import Artisanlogin from './UI/Artisanlogin';    // Corrected spelling
import Artisanhome from './UI/Artisanhome';      // Corrected spelling

function App() {

  // Pages where `Mainnavbar` should be displayed

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/customersignup" element={<Customersignup />} />
          <Route path="/customerlogin" element={<Customerlogin />} />
          <Route path="/buyproducts" element={<div>Buy Products Page</div>} />
          <Route path="/artisanprofiles" element={<div>Artisan Profiles Page</div>} />
          <Route path="/aboutus" element={<div>About Us Page</div>} />
          <Route path="/cart" element={<div>Cart Page</div>} />
          <Route path="/signup" element={<Artisansignup />} />  {/* Corrected spelling */}
          <Route path="/customerhome" element={<Customerhome />} />
          <Route path="/artisanlogin" element={<Artisanlogin />} />  {/* Corrected spelling */}
          <Route path="/artisanhome" element={<Artisanhome />} />    {/* Corrected spelling */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
