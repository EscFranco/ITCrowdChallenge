import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Links = () => {

    const [categories, setCategories] = useState([])
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        fetch("https://challengeitcrowd.herokuapp.com/productos", {
            method: "GET"
        })
            .then((res) => res.json())
            .then(json => {
                const list = json.map((element) => element.type)
                setCategories([...new Set(list)])
            })
    }

    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-end items-center mx-auto md:justify-center">
                <button onClick={() => setIsNavOpen((prev) => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={isNavOpen ? "w-full md:block md:w-auto" : "hidden md:block"} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {categories.map((element, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={element.replace(/ /g, "-")}>
                                        <p className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent first-letter:capitalize">{element}</p>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Links