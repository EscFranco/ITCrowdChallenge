const NewProduct = ({newitem}) => {

    return (
        <div className="w-5/12">
            <h2>NUEVO PRODUCTO</h2>
            <form className="pt-6" onSubmit={newitem}>
                <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nuevo producto</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="name" name="name" placeholder="Nombre del producto"  required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Descripcion</label>
                    <textarea rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Poner la descripcion" type="text" id="description" name="descripcion" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="imgUrl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Imagen del producto</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="url" id="image" name="image" placeholder="Ruta de la imagen" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Precio</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="number" id="price" name="price" placeholder="Precio" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Marca</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="brand" name="brand" placeholder="Marca" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Categoria</label>
                    <select name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="procesadores">Procesadores</option>
                        <option value="placas de video">Placas de video</option>
                        <option value="motherboards">Motherboards</option>
                        <option value="memoria RAM">Memoria RAM</option>
                        <option value="monitores">Monitores</option>
                        <option value="perifericos">Perifericos</option>
                    </select>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Enviar</button>
            </form>
        </div>
    )
}

export default NewProduct