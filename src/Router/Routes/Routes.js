import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Services from "../../pages/Shared/Services/Services";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element: <Services></Services>
            }
        ]
        
    }
])

export default router;