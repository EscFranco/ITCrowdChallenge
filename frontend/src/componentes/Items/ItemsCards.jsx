import { Link } from "react-router-dom"

const ItemsCards = ({ productos }) => {

    return (
        <div className="pt-4 grid justify-items-center grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2">
            {
                productos.map(item => {
                    return (
                        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700" key={item.id}>
                            <img className="p-8 rounded-t-lg" src={item.image} alt={item.name} />
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                                <div className="flex items-center mt-2.5 mb-5">
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                                    <Link to={`/${item.type.replace(/ /g, "-").toLowerCase()}/${item.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver mas</Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )


}

export default ItemsCards