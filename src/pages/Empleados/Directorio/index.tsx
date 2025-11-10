import { Archive,  Pencil,  ShieldUserIcon,  } from "lucide-react";
import Container from "../../../components/ui/Container";
import { DataTable, type Column } from "../../../components/ui/DataTableSigem";
import { formatDate } from "../../../services/helpers/datesFunctions";
import { useDirectorio } from "./hooks/useDirectorio";
import type { Personal } from "./types/Persona";
import { useNavigate } from "react-router-dom";

// Página principal del módulo Directorio
export default function DirectorioPage() {
  const navigate = useNavigate();
  const {colaboradores,total,per_page,onPageChange,current_page,loading} = useDirectorio()
  const columns: Column<Personal>[] = [
    {
      key: 'name',
      header: 'Empleado',
      width: 'w-64',
      render: (row) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/username?username=${row.nombre}+${row.apellido_paterno}`}
            alt={row.nombre}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-gray-900">{row.nombre} {row.apellido_paterno} {row.apellido_materno} </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500 capitalize">{row.fecha_contratacion&&formatDate(new Date(row.fecha_contratacion),'ddd, DD MMM YYYY')}</span>
            </div>
          </div>
        </div>
      ),
    },
     {
      key: 'area',
      header: 'Área / Puesto',
      width: 'w-64',
      render: (row) => (
        <div className="flex items-center gap-3">
        
          <div>
            <div className="font-medium text-gray-900">{row.departamento.descripcion} </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-gray-500 capitalize"> {row.puesto.descripcion} </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: 'emp',
      header: 'Numero de empleado',
      width: 'w-64',
      render: (row) => (
        <div className="flex items-center gap-3">
        
          <div>
            <div className="font-medium text-gray-900">{row.numero_empleado} </div>
            
          </div>
        </div>
      ),
    },
    {
      key: 'sis',
      header: 'Acceso al sistema',
      width: 'w-64',
      render: (row) => (
        <div className="flex items-center gap-3">
        
          <div>
            <div className="font-medium text-gray-900">{row.tiene_acceso_sistema?'si':'no'} </div>
            
          </div>
        </div>
      ),
    },
     {
      key: 'sis',
      header: 'Acciones',
      width: 'w-64',
      render: (_row) => (
        ///botones de ver,editar y dar de baja
        <div className="flex items-center gap-3">
        
          <div>
            <button title="Ver detalles" className="hover:cursor-pointer text-blue-500 hover:underline mr-2"><ShieldUserIcon/></button>
            <button title="Editar" className="hover:cursor-pointer text-green-500 hover:underline mr-2"><Pencil/></button>
            <button title="Baja" className="hover:cursor-pointer text-red-500 hover:underline"><Archive  /></button>
          </div>
        </div>

       
      ),
    },
  ]

  const handleCreateUser = () => {
  //crea el metodo para redireccionar a la pagina de creacion de usuario con el id del personal url: /empleados/nuevo
   navigate(`/empleados/nuevo`);
    


  }
  return (
    <Container>
      {total ? <DataTable
        title="Gestion de Empleados"
        columns={columns??[]}
        data={colaboradores}
        onAddNew={handleCreateUser}
        addButtonText="Añadir empleado"
        totalItems={total}
        currentPage={current_page}
        itemsPerPage={per_page}
        onPageChange={onPageChange}
        loading={loading}
      />:null}
    </Container>
  );
}
