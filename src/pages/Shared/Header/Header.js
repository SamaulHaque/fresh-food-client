import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const menuItems = <>
        <li className='font-semibold mr-3'><Link to='/'>Home</Link></li>
        <li className='font-semibold mr-3'><Link to='/my-all-services'>My Services</Link></li>
        
        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                        {
                            user?.uid ?
                             <>
                             <li className='font-semibold mr-3'><Link to='/my-reviews'>My Reviews</Link></li>
                             <li className='font-semibold mr-3'><Link to='/add-service'>Add Service</Link></li>
                             </> : 
                             <>
                             </>
                        }
                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                            user?.uid ?
                             <>
                             <li className='font-semibold mr-3'><Link to='/my-reviews'>My Reviews</Link></li>
                             <li className='font-semibold mr-3'><Link to='/add-service'>Add Service</Link></li>
                             </> : 
                             <>
                             </>
                        }

                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user?.uid ?
                        <div className=''>
                        <Link to='/login'>
                        <button onClick={handleLogOut} className='btn btn-sm btn-outline '>Log Out</button>
                        </Link>
                        </div>
                        :
                        <>
                        <Link to='/login'><button className='btn btn-sm btn-outline '>Login</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;