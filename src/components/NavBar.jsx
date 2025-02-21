import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'
import { useUserContext } from '../context/UserContext';

const NavBar = () => {

    const { user, setUser} = useUserContext();

    return (
        <div className="bg-gradient-to-r
           from-blue-app-600  to-blue-app-700 rounded-bl-2xl rounded-br-2xl
     md:text-white  text-white px-4   top-0 sticky     z-[100] shadow-nav-bar">

            <header>

                <nav className="flex h-20 items-center justify-between">
                    {
                         user ? 
                         <NavLink to="/dashboard" className="w-[40% max-w-[130px]">
                            <img src={logo} className="block w-full" />
                        </NavLink> :
                        <NavLink to="/" className="w-[40% max-w-[130px]">
                            <img src={logo} className="block w-full" />
                       </NavLink> 
                    }
                    

                    <input type="checkbox" id="menu" className="peer/menu hidden" />

                    <label htmlFor="menu" 
                    className="w-10 h-10 bg-open-menu bg-cover bg-center
                     bg-blue-app-800 rounded-lg  cursor-pointer peer-checked/menu:bg-close-menu 
                     transition-all z-40 md:hidden"></label>

                    <ul 
                    className="fixed inset-0 bg-blue-app-700 
                            px-[5%] grid gap-6
                            auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full 
                            transition-[clip-path] duration-500 
                            md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
                                {
                                    user ? <li>
                                                <NavLink to="/dashboard" className="hover:underline">Dashboard</NavLink>
                                            </li> :
                                            <li>
                                            <NavLink to="/" className="hover:underline">Home</NavLink>
                                        </li>
                                }
                       
                        {
                            user ? 
                                <a  onClick={() => setUser(false)}>Logout</a>
                                :
                                
                                  <>
                                    <li>
                                    <NavLink className="hover:underline" to="/login">Login</NavLink>
                                    </li>
            
                                    <li>
                                        <NavLink className="hover:underline" to="/register">Registro</NavLink>
                                    </li>
                                
                                  </>
                        }
                       
                    </ul>

                </nav>



            </header>
        </div>
    )
}

export default NavBar