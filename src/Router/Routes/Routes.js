import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import ServicesDetails from "../../pages/Shared/ServicesDetails/ServicesDetails";
import Services from "../../pages/Shared/Services/Services";
import Reviews from "../../pages/Reviews/Reviews";
import MyReviews from "../../pages/MyReviews/MyReviews";
import AddService from "../../pages/AddService/AddService";
import Update from "../../pages/Update/Update";

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
            },
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: '/my-reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ({params}) => fetch(`http://localhost:5000/my-reviews/${params.id}`)
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            
        ]
        
    }
])

export default router;