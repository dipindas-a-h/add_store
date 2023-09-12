import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/register/register';
import DashBoard from './Dashboard/DashBoard';
import ROUTES from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Register /> */}

        <Routes>
          {/* Your route definitions */}
          <Route path="/" element={<Register />} />


          <Route path={ROUTES.HOME} element={<DashBoard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
