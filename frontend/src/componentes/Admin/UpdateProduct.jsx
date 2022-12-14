

const UpdateProduct = ({ updateitem, productos, close, id }) => {

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                MODIFCAR PRODUCTO
                            </h3>
                            <button
                                className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={close}
                            >
                                <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <form className="pt-6" onSubmit={updateitem}>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="name">Modifcar nombre del producto</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="name" name="name" placeholder="Nombre del Producto" required />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="price">Modificar precio</label>
                                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" id="price" name="price" placeholder="Precio" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Seleccionar ID</label>
                                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="id">
                                        {productos.map(item => {
                                            return (
                                                <option value={item.id} key={item.id}>
                                                    {item.id}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={close}
                                    >
                                        Cerrar
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="submit" 
                                    >
                                        Modifcar
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default UpdateProduct