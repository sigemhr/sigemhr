import { Building2,  Plus } from 'lucide-react'
import React from 'react'
import { FilterComponent } from './Filter'

export const HeaderDepartment = ({setVista,darkMode, searchTerm, setSearchTerm, filtroActivo, setFiltroActivo}: {setVista: React.Dispatch<React.SetStateAction<string>>, darkMode: boolean, searchTerm: string, setSearchTerm: React.Dispatch<React.SetStateAction<string>>, filtroActivo: string, setFiltroActivo: React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <>
        <div className={` rounded-lg shadow-sm p-6 mb-6 ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Building2 className="w-8 h-8 text-blue-600" />
                    <div>
                        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Gestión de Departamentos</h1>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Administra departamentos, puestos y jefes</p>
                    </div>
                </div>
                <button
                    onClick={() => setVista('agregar')}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <Plus className="w-5 h-5" />
                    Nuevo Departamento
                </button>
            </div>
             <FilterComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} filtroActivo={filtroActivo} setFiltroActivo={setFiltroActivo}/>
        </div>
        </>
    )
}
