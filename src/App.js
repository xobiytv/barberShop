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
import * as te from "tw-elements";

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
          <Route path="/" element={<Signin />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/logUp" element={<SignUp />} />
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
