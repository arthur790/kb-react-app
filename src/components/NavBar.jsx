import { NavLink } from 'react-router-dom'
import logo from '../assets/react.svg'

const NavBar = () => {

    return (
        <div className="bg-white text-black 
         px-4   top-0 sticky     z-[100] shadow-nav-bar">

            <header>

                <nav className="flex h-20 items-center justify-between">

                    <NavLink to="/" className="w-[40% max-w-[130px]">
                        <img src={logo} className="block w-full" />
                    </NavLink>

                    <input type="checkbox" id="menu" className="peer/menu hidden" />

                    <label htmlFor="menu" 
                    className="w-10 h-10 bg-open-menu bg-cover bg-center
                     bg-green-color rounded-lg  cursor-pointer peer-checked/menu:bg-close-menu 
                     transition-all z-40 md:hidden"></label>

                    <ul 
                    className="fixed inset-0 bg-menu-color 
                            px-[5%] grid gap-6
                            auto-rows-max content-center justify-items-center clip-circle-0 peer-checked/menu:clip-circle-full 
                            transition-[clip-path] duration-500 
                            md:clip-circle-full md:relative md:grid-flow-col md:p-0 md:bg-transparent">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>

                        <li>
                            <NavLink to="/register">Registro</NavLink>
                        </li>
                    </ul>

                </nav>



            </header>
        </div>
    )
}

export default NavBar