import React from 'react'
import SignIn from "./regiter/Signin";
// import LogIn from './regiter/LogIn';

const Home = () => {
  return (
    <div>
      {/* <h1 className="text-center text-3xl font-bold py-8">Home Page</h1> */}
      <SignIn />
      {/* <LogIn/> */}
    </div>
  );
}

export default Home