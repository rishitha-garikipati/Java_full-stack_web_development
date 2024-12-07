import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Mainhome from './UI/Mainhome';
import Customersignup from './UI/Customersignup';
import Customerlogin from './UI/Customerlogin';
import Customerhome from './UI/Customerhome';
import Artisansignup from './UI/Artisansignup';
import Artisanlogin from './UI/Artisanlogin';
import Artisanhome from './UI/Artisanhome';
import Adminsignup from './UI/Adminsignup';
import Adminlogin from './UI/Adminlogin';
import Adminhome from './UI/Adminhome';
import Addproducts from './UI/Addproducts';
import Viewproducts from './UI/Viewproducts';
import Editproducts from './UI/Editproducts';
import Buyproducts from './UI/Buyproducts';
import Addcart from './UI/Addcart';
import { CartProvider } from './UI/CartContext';
import Editartisan from './UI/Editartisan';
import Editcustomer from './UI/Editcustomer';
import AboutUs from './UI/Aboutus';
import Support from './UI/Support';
import Customersupport from './UI/Customersupport';


function App() {

  // Pages where `Mainnavbar` should be displayed

  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainhome />} />
          <Route path="/customersignup" element={<Customersignup />} />
          <Route path="/customerlogin" element={<Customerlogin />} />
          <Route path="/buyproducts" element={<Buyproducts/>} />
          <Route path="/artisanprofiles" element={<div>Artisan Profiles Page</div>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/cart" element={<Addcart/>} />
          <Route path="/artisansignup" element={<Artisansignup/>} />
          <Route path="/customerhome" element={<Customerhome />}/>
          <Route path="/artisanlogin" element={<Artisanlogin/>}/>
          <Route path="/artisanhome" element={<Artisanhome/>}/>
          <Route path="/adminsignup" element={<Adminsignup/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/adminhome" element={<Adminhome/>}/>
          <Route path="/addproducts" element={<Addproducts/>}/>
          <Route path="/viewproducts" element={<Viewproducts/>}/>
          <Route path="/editproducts" element={<Editproducts/>}/>
          <Route path="/viewartisan" element={<Editartisan/>}/>
          <Route path="/viewcustomers" element={<Editcustomer/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/customersupport" element={<Customersupport/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
