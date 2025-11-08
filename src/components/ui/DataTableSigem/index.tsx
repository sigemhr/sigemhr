import React from 'react';
import { Search, Filter, MoreVertical, Download, Plus, Loader2 } from 'lucide-react';

// Tipos para el componente
export interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  title: string;
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  showSearch?: boolean;
  showFilters?: boolean;
  onAddNew?: () => void;
  addButtonText?: string;
  itemsPerPage?: number;
  currentPage?: number;
  totalItems?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable<T extends Record<string, any>>({
  title,
  columns,
  data,
  loading = false,
  showSearch = true,
  showFilters = true,
  onAddNew,
  addButtonText = 'Añadir',
  itemsPerPage = 10,
  currentPage = 1,
  totalItems,
  onPageChange,
}: DataTableProps<T>) {
  const totalPages = Math.ceil((totalItems || data.length) / itemsPerPage);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        
        <div className="flex items-center gap-3">
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                disabled={loading}
              />
            </div>
          )}
          
          {showFilters && (
            <button 
              className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading}
            >
              <Filter className="w-4 h-4" />
              Filtrar
            </button>
          )}
          
          <button className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
            <Download className="w-5 h-5 text-gray-600" />
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
          
          {onAddNew && (
            <button
              onClick={onAddNew}
              disabled={loading}
              className="hover:cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Plus className="w-4 h-4" />
              {addButtonText}
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.width || ''}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {loading ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-16">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    <p className="text-sm text-gray-500">Cargando datos...</p>
                  </div>
                </td>
              </tr>
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-16 text-center">
                  <p className="text-sm text-gray-500">No hay datos disponibles</p>
                </td>
              </tr>
            ) : (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-4 py-4 text-sm">
                      {column.render
                        ? column.render(row)
                        : row[column.key as keyof T]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-500">
          {loading ? '...' : `${totalItems || data.length} Empleados`}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ‹
          </button>
          
          {[...Array(Math.min(totalPages, 3))].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => onPageChange?.(page)}
                disabled={loading}
                className={`w-8 h-8 rounded-lg text-sm font-medium disabled:cursor-not-allowed ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            );
          })}
          
          <button
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ›
          </button>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>{itemsPerPage} por vista </span>
          <button className="p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed" disabled={loading}>
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Ejemplo de uso con datos de empleados
// interface Employee {
//   id: number;
//   name: string;
//   avatar: string;
//   status: 'online' | 'offline';
//   hours: string;
//   progress: number;
//   tasks: number;
//   completion: number;
//   time: string;
//   timeColor: string;
// }

// function EmployeeTableExample() {
//   const employees: Employee[] = [
//     {
//       id: 1,
//       name: 'Matthew Vargas',
//       avatar: 'https://i.pravatar.cc/150?img=1',
//       status: 'online',
//       hours: '7h 40 min',
//       progress: 60,
//       tasks: 1,
//       completion: 25,
//       time: '09:10',
//       timeColor: 'text-green-600'
//     },
//     {
//       id: 2,
//       name: 'Bruce Wagner',
//       avatar: 'https://i.pravatar.cc/150?img=2',
//       status: 'online',
//       hours: '4h 00 min',
//       progress: 30,
//       tasks: 1,
//       completion: 10,
//       time: '11:59',
//       timeColor: 'text-teal-600'
//     },
//     {
//       id: 3,
//       name: 'Andreea Cook',
//       avatar: 'https://i.pravatar.cc/150?img=3',
//       status: 'online',
//       hours: '7h 40 min',
//       progress: 20,
//       tasks: 0,
//       completion: 0,
//       time: '12:04',
//       timeColor: 'text-yellow-600'
//     },
//   ];

//   const columns: Column<Employee>[] = [
//     {
//       key: 'name',
//       header: 'Empleado',
//       width: 'w-64',
//       render: (row) => (
//         <div className="flex items-center gap-3">
//           <img
//             src={row.avatar}
//             alt={row.name}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <div className="font-medium text-gray-900">{row.name}</div>
//             <div className="flex items-center gap-2 mt-1">
//               <span className={`w-2 h-2 rounded-full ${row.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`} />
//               <span className="text-xs text-gray-500 capitalize">{row.status}</span>
//             </div>
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: 'hours',
//       header: 'Horas',
//       render: (row) => <span className="text-gray-600">{row.hours}</span>,
//     },
//     {
//       key: 'progress',
//       header: 'Progreso',
//       render: (row) => (
//         <div>
//           <div className="text-xs font-medium text-gray-900 mb-1">{row.progress}%</div>
//           <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
//             <div
//               className="h-full bg-blue-500 rounded-full"
//               style={{ width: `${row.progress}%` }}
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       key: 'tasks',
//       header: 'Tareas',
//       render: (row) => (
//         <div className="text-center">
//           <div className="text-sm font-medium text-gray-900">{row.tasks} tarea{row.tasks !== 1 ? 's' : ''}</div>
//           <div className="w-20 h-1.5 bg-gray-200 rounded-full mt-2" />
//         </div>
//       ),
//     },
//     {
//       key: 'completion',
//       header: 'Completado',
//       render: (row) => <span className="text-gray-900 font-medium">{row.completion}%</span>,
//     },
//     {
//       key: 'time',
//       header: 'Hora',
//       render: (row) => (
//         <div className="flex items-center gap-2">
//           <span className={`font-medium ${row.timeColor}`}>{row.time}</span>
//           <div className="flex gap-1">
//             <div className="w-12 h-1.5 bg-teal-500 rounded-full" />
//             <div className="w-8 h-1.5 bg-green-500 rounded-full" />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <DataTable
//         title="Empleados"
//         columns={columns}
//         data={employees}
//         onAddNew={() => console.log('Añadir empleado')}
//         addButtonText="Añadir empleado"
//         totalItems={259}
//         currentPage={1}
//       />
//     </div>
//   );
// }

// export default EmployeeTableExample;