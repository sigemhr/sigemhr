import React, { use, useEffect } from 'react'
import { useTheme } from '../../../../../context/ThemeContext';
import type { CreateDepartamento,  } from '../type/Department';
import { departmentService } from '../services/departmentService';
import { colaboradorService } from '../../../../Empleados/Directorio/services/colaboradorService';

export const useEditDepartment = () => {
    const {darkMode} = useTheme();
    const [loading, setLoading] = React.useState<boolean>(false);
    const [department, setDepartment] = React.useState<CreateDepartamento>({
    nombre: '',
    codigo: '',
    descripcion: '',
    jefe_id: null,
    activo: true,
  });

     const handleDepartmentChange = (e) => {
    setDepartment({...department, [e.target.name]: e.target.value });
  };
    const handleSave = async () => {
        setLoading(true);
        try {
            await departmentService.create(department);
        }catch (error) {
        }finally {
            setLoading(false);
        }

    }
    const fetchData = async () => {
        
        try {
           const activos =  await departmentService.getAllActiveUsers();
              console.log('Usuarios activos:', activos);
        } catch (error) {
            // Manejo de errores
        } finally {
           
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

  return {darkMode, department, setDepartment, handleDepartmentChange, handleSave};
}

