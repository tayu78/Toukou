import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from './contexts/UserContext';
import Topbar from "./components/Topbar";
import Posts from "./routes/Posts";
import Users from './routes/Users';
import CurrentUser from './routes/CurrentUser';
import SignForm from "./routes/SignForm";
import PrivateRoute from "./components/PrivateRoute";



function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="pt-20">
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <Topbar />
          {/* <div className='w-2/3 ml-auto'> */}   
        <Routes>
          <Route  element={<PrivateRoute user={user} />}>
              <Route path="/" element={<Posts />} />
              <Route path="/users" element={<Users />} />
              <Route path="/currentUser" element={<CurrentUser />} />
          </Route>
          <Route path="/signUp" element={ <SignForm />} />
          <Route path="/signIn" element={ <SignForm isSignIn />} />
          <Route path="*" element={<h1>404 Page not found</h1>} />
        </Routes>
        {/* </div> */}
        </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
