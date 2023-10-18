import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './auth/register/register';
import ROUTES from './Routes/Routes';
import AddPlans from './Pages/Plans/AddPlans';
import NewDashBoard from './Dashboard/NewDashBoard';
import './components/Buttons/AddNewButton/addbutton.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Register /> */}

        <Routes>
          {/* Your route definitions */}
          <Route path="/" element={<Register />} />


          <Route path={ROUTES.HOME} element={<NewDashBoard />} />
          <Route path="/" element={<NewDashBoard />}>
        <Route path={ROUTES.ADD_PLAN} element={<AddPlans />} />
        {/* Add other page routes here */}
      </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
