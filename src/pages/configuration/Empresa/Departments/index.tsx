import { DropDown, DropDownBody, DropDownHeader } from "../../../../components/ui/DropDown/index.tsx";
import { useTheme } from "../../../../context/ThemeContext.tsx";
import { HeaderDepartment } from "./components/Header.tsx";
import { useDepartment } from "./hooks/useDepartment.ts";
import { Building2, Users, Briefcase, Plus, Edit2, Trash2 } from 'lucide-react';




export default function Departments() {
    const { darkMode } = useTheme();
    const {
        departments,
        setVista,
        setSearchTerm,
        searchTerm,
        setFiltroActivo,
        filtroActivo
    } = useDepartment()




    return (
        <div className={`min-h-screen rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} p-6`}>
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <HeaderDepartment setVista={setVista} darkMode={darkMode} searchTerm={searchTerm} setSearchTerm={setSearchTerm} filtroActivo={filtroActivo} setFiltroActivo={setFiltroActivo} />


                {/* Lista de departamentos */}
                <div className="space-y-4">
                    {departments.map(dep => (
                        <DropDown key={dep.id} darkMode={darkMode} >
                            <DropDownHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-semibold text-gray-900">{dep.nombre}</h3>
                                            <span
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                                                {dep.codigo}
                                            </span>
                                            <span className={`px-3 py-1 text-sm font-medium rounded-full ${dep.activo
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                                }`}>
                                                {dep.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{dep.descripcion}</p>


                                        <div className="flex items-center gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-600">Jefe:</span>
                                                <span className="font-medium text-gray-900">{dep.jefe?.nombre} {dep.jefe?.apellido_paterno}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-600">{dep.personal?.length} empleados</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Briefcase className="w-4 h-4 text-gray-400" />
                                                <span className="text-gray-600">{dep.puestos?.length} puestos</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">

                                        <button
                                            title="save"
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                            <Edit2 className="w-5 h-5" />
                                        </button>
                                        <button
                                            title='delete'
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                            </DropDownHeader>
                            <DropDownBody>
                                <div className="border-t border-gray-200 bg-gray-50 p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="text-lg font-semibold text-gray-900">Puestos del
                                            Departamento</h4>
                                        <button
                                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                                            <Plus className="w-4 h-4" />
                                            Agregar Puesto
                                        </button>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        {dep.puestos?.map(puesto => (
                                            <div key={puesto.id}
                                                className="bg-white rounded-lg p-4 border border-gray-200">
                                                <div className="flex items-start justify-between mb-2">
                                                    <div>
                                                        <h5 className="font-semibold text-gray-900">{puesto.nombre}</h5>
                                                        <p className="text-sm text-gray-600">{puesto.codigo}</p>
                                                    </div>
                                                    <span
                                                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded">
                                                        {puesto.nivel}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-sm">
                                                    <span className="text-gray-600">Salario:</span>
                                                    <span className="font-medium text-gray-900">
                                                        ${parseFloat(puesto.salario_min).toLocaleString()} - ${parseFloat(puesto.salario_max).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>



                            </DropDownBody>
                        </DropDown>



                    ))}
                </div>

                {departments.length === 0 && (
                    <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                        <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No se encontraron departamentos</h3>
                        <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
                    </div>
                )}
            </div>
        </div>
    );
}