import { SearchIcon } from 'lucide-react'


export const FilterComponent = ({searchTerm, setSearchTerm, filtroActivo, setFiltroActivo}: {searchTerm: string, setSearchTerm: React.Dispatch<React.SetStateAction<string>>, filtroActivo: string, setFiltroActivo: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <div>
            {/* Barra de búsqueda y filtros */}
            <div className=" rounded-lg  p-4 mb-6 mt-5">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 relative">
                        <SearchIcon
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o código..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setFiltroActivo('todos')}
                            className={`px-4 py-2 rounded-lg transition-colors ${filtroActivo === 'todos'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setFiltroActivo('activos')}
                            className={`px-4 py-2 rounded-lg transition-colors ${filtroActivo === 'activos'
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Activos
                        </button>
                        <button
                            onClick={() => setFiltroActivo('inactivos')}
                            className={`px-4 py-2 rounded-lg transition-colors ${filtroActivo === 'inactivos'
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            Inactivos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
