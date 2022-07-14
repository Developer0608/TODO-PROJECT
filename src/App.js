import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./protectedRoute";
import TodoAction from "./Components/TodoAction";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
    const [isAuthenticated, setAuthenticated] = useState("");

    useEffect(() => {
        const isUserLoggedIn = localStorage.getItem('email');
        if(window.history.length < 3) {
            setAuthenticated(true);
            if (isUserLoggedIn) {
                console.log('window.history length', window.history.length);
                window.history.pushState(null, null, "/main");
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
        }else{
            setAuthenticated(false)
        }
    }, []);


  return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/main" element={<TodoAction />}/>
                {/*<Route exact path="/main" element={*/}
                {/*   <ProtectedRoute>*/}
                {/*    <TodoAction />*/}
                {/*   </ProtectedRoute>*/}
                {/*} />*/}
            </Routes>
        </BrowserRouter>
  )
}

export default App;
