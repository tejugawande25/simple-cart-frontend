import React from "react";
import{BrowserRouter ,Route ,Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Dashboard from "./components/dashboard/dashboard";
import Footer from "./components/footer/footer";


function App(){
  return(
        <>
        <BrowserRouter>
        <Routes>
          <Route element={<Navbar />} path="/navbar"></Route>
          <Route element={<Dashboard/>} path="/dashboard"></Route>
          <Route element={<Footer />} path="/footer"></Route>
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
