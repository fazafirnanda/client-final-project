import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./views/Welcome"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Template from "./views/Template"
import NotFound from "./views/Notfound"
import InstructorWelcome from "./views/InstructorWelcome"
import Dashboard from "./views/TeacherSide/Dashboard"
import Welcome from "./views/Welcome"
import Login from "./views/Login"
import Register from "./views/Register"
import Profile from "./views/Profile"



const router = createBrowserRouter([
  {
    element: <Template/>,
    children: [
      {
        path : "/",
        element : <Welcome />,
      },
      {
        path : "/Home",
        element : <Home />,
      },
      {
        path : "/instructor",
        element : <InstructorWelcome />,
      },
      {
        path : "/instructor/dashboard",
        element : <Dashboard/>
      },
      {
          path: "*",
          element: <NotFound />,
      },
      {
        path: "/profile/user",
        element: <Profile />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // 
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
