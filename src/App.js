import React, {useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './pages/homePage/Account';
// import Home from './pages/Home';
import Signin from './pages/regiter/Signin';
import LogIn from './pages/regiter/LogIn';
import SignUp from './pages/regiter/SignUo';
// import Profel from "./profil/Profel";
// import * as te from "tw-elements";
// import Profel from './pages/profil/Profel';
import Main from "./pages/Main";
import Beli from "./pages/homePage/Beli.jsx";
import MyBookmark from './pages/homePage/MyBookmark';
// import Test from './pages/homePage/Test';
import Haircuts from './pages/homePage/Haircuts'
import Manicure from "./pages/homePage/Manucure";
import Makeup from "./pages/homePage/Makeup";
import Ucaladki from "./pages/homePage/Ucaladki";
import SalonProfel from './pages/homePage/SalonProfel';

function App() {
  useEffect(() => {
  const importTE = async () => {
    await import("tw-elements");
  };
  importTE();
}, []);

  return (
    <div>
      <AuthContextProvider>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/beli" element={<Beli />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/logUp" element={<SignUp />} />
          {/* <Route path="/profel" element={<Profel />} /> */}
          <Route path="/mybookmark" element={<MyBookmark />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/haircuts" element={<Haircuts />} />
          <Route path="/manicure" element={<Manicure />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/ucaladki" element={<Ucaladki />} />
          <Route path="/salonprofel" element={<SalonProfel />} />

          {/* <Route path="/movie" element={<Movies />} /> */}
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
