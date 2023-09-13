import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/register/register';
import DashBoard from './Dashboard/DashBoard';
import ROUTES from './Routes/Routes';
import AddPlans from './Pages/Plans/AddPlans';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Register /> */}

        <Routes>
          {/* Your route definitions */}
          <Route path="/" element={<Register />} />


          <Route path={ROUTES.HOME} element={<DashBoard />} />
          <Route path={ROUTES.ADD_PLAN} element={<AddPlans/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
