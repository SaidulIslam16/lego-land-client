import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png"
import placeholder from "../../assets/profile-place-holder.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import Swal from 'sweetalert2'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Signout Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/alltoys'>All Toys</Link></li>
        {
            user?.email ? <>
                <li><Link to='/addatoy'>Add a Tody</Link></li>
                <li><Link to='/mytoys'>My Toys</Link></li>
            </> : ''
        }
        <li><Link to='/blogs'>Blogs</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img className="h-9" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div title={user?.displayName} className="w-10 h-10 rounded-full flex justify-center items-center">
                                    {
                                        user?.photoURL ? <img src={user?.photoURL} /> : <img src={placeholder} />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/profile' className="font-bold text-lg">{user?.displayName} <span className="badge"><FaUser /> </span></Link></li>
                                <li><button onClick={handleSignout}>Logout</button></li>
                            </ul>
                        </div>
                    </> :
                        <>
                            <Link to='/login'><button className='mr-5 bg-slate-200 py-2 px-4 rounded-lg hover:bg-slate-300'>Login</button></Link>
                            <Link to='/signup'><button className='mr-5 bg-slate-200 py-2 px-4 rounded-lg hover:bg-slate-300'>SignUp</button></Link>
                        </>
                }
            </div>
        </div>
    );
};

export default NavBar;