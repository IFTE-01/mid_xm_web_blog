import './index.css'
import { Link } from "react-router-dom"
 
const Navbar =()=>
{
    return(
        <>
        <div className=" bg-gray-800 py-8 px-8 text-gray-50 fixed w-full z-100 md-2">
            <div className="flex justify-between">
                <p className='text-3xl'>Cat Blog</p>
                <div className='flex justify-center gap-5 text-2xl'>
                    <Link to="/">Home</Link> 
                    <Link to="/dashboard">Dashboard</Link >
                    <Link to="/Login">Login</Link >
                    <Link to="/Signup">Sign up</Link >
                </div>
            </div>
        </div>
        </>
    );
}
export default Navbar;
