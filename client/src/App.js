import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './contexts/UserContext';
import Topbar from "./components/Topbar";
import Posts from "./routes/Posts";
import SignForm from "./routes/SignForm";
import PrivateRoute from "./components/PrivateRoute";



function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="pt-20 ">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
        <Topbar />
        <Routes>
          <Route  element={<PrivateRoute user={user} />}>
             <Route path="/" element={ <Posts />} />
          </Route>
          <Route path="/signUp" element={ <SignForm />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
