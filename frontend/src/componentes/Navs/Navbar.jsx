import { NavLink } from "react-router-dom";
import Links from './Links'


const NavBar = () => {

    return (
        <header className="bg-[#37373f] w-full">
            <div className="flex items-center justify-around px-0 py-4">
                <div className="area-logo">
                    <NavLink to="/"><img className="w-20 md:w-48" src="/data/logo/logoblanco.png" alt="" /></NavLink>
                </div>

                <div>
                    <p className="text-white font-sans text-base font-medium">Bienvenido/a</p>
                </div>

            </div>

            <Links />

        </header>
    )
}

export default NavBar;