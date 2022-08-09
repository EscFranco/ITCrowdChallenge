import { useEffect, useState } from "react";
import _ from "lodash"
import UpdateProduct from "./UpdateProduct";

const TableItems = ({ productos, deleteproduct, updateitem }) => {

    const [paginatedPosts, setpaginatedPosts] = useState()
    const [currentPage, setcurrentPage] = useState(1)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setpaginatedPosts(_(productos).slice(0).take(pageSize).value());
    }, [productos]);

    const pageSize = 10
    const pageCount = productos ? Math.ceil(productos.length / pageSize) : 0;
    if (pageCount === 1) return null;

    const pages = Array(pageCount).fill(1).map((x, y) => x + y)

    const pagination = (pageNumber) => {
        setcurrentPage(pageNumber);
        const startIndex = (pageNumber - 1) * pageSize
        const paginate = _(productos).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginate)
    }

    const next = () => {
        if (currentPage >= pageCount) {

        } else {
            const next = currentPage + 1
            pagination(next)
        }
    }

    const back = () => {
        if (currentPage > 1) {
            const back = currentPage - 1
            pagination(back)
        } else {

        }
    }

    return (

        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            {
                !paginatedPosts ? (
                    "No data found"
                ) : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    <span className="sr-only">Image</span>
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    ID
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    NOMBRE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    CATEGORIA
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    MARCA
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    PRECIO
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    BORRAR
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedPosts.map(item => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={item.id}>
                                        <td className="p-4 w-32">
                                            <img src={item.image} alt={item.name} />
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                            {item.id}
                                        </td>
                                        <td className="py-4 px-6">
                                            {item.name}
                                        </td>
                                        <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white first-letter:capitalize">
                                            {item.type}
                                        </td>
                                        <td className="py-4 px-6">
                                            {item.brand}
                                        </td>
                                        <td className="py-4 px-6">
                                            ${item.price}
                                        </td>
                                        <td className="py-4 px-6">
                                            <button onClick={() => setShowModal(true)} className="font-medium text-green-600 dark:text-green-500 hover:underline">Edit</button>
                                            {showModal ? (<UpdateProduct updateitem={updateitem} productos={productos} close={() => setShowModal(false)} id={item.id} />) : null }
                                            <br />
                                            <button onClick={() => deleteproduct(item.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )
            }
            <nav className="flex justify-center items-center pt-4 pb-4" aria-label="Table navigation">
                <ul className="inline-flex -space-x-px">
                    <button onClick={back} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Prev
                    </button>
                    {
                        pages.map((page, index) => (
                            <li key={index}  className={page === currentPage ? "z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" : "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white focus:border-blue-400"}>
                                <p onClick={() => pagination(page)}> {page} </p>
                            </li>
                        ))
                    }
                    <button onClick={next} className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        Next
                    </button>
                </ul>
            </nav>

        </div>
    )

}

export default TableItems