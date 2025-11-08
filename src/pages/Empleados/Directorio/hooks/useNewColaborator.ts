import React from "react";
import { PERSONADEAFULT } from "../constants";
import {  type Departamento } from "../types/Persona";
import { colaboradorService } from "../services/colaboradorService";
import { PersonalValidation } from "../utils";
import { useToast } from "../../../../components/ui/Toast";

export const useNewColaborator = () => {
   const { showToast } = useToast();
  const [newColaborator, setNewColaborator] = React.useState(PERSONADEAFULT);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [departamentos, setDepartamentos] = React.useState<Departamento[]>([]);
  const [activeTab, setActiveTab] = React.useState('inicio');
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement > ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setNewColaborator((prev) => ({ ...prev, [name]: checked }));
    } else {
      setNewColaborator((prev) => ({ ...prev, [name]: value }));
    }

    // Limpiar error del campo
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  React.useEffect(() => {
    // Cargar departamentos y puestos
    fetchDepartamentos();
    
  }, []);

  const fetchDepartamentos = async () => {
    try {
      const response = await colaboradorService.getdepartmentsAndPositions();
      
      
      const data = await response.data;
      setDepartamentos(data);
    } catch (error:any) {
        setErrors(error)
      console.error("Error al cargar departamentos:", error);
    }
  };

 const handleSubmit = async () => {
    setLoading(true);
    try {
     const isValid = PersonalValidation.validate(newColaborator);
      if (!isValid.isValid) {
        showToast("Datos incompletos", "error");
        setErrors(isValid.errors);
        setLoading(false);
        return;
      }
     const response =  await colaboradorService.create(newColaborator);
     console.log('====================================');
     console.log(response);
     console.log('====================================');
     if(response.status === 201){
      // Éxito al crear el colaborador
      showToast("Colaborador creado con éxito", "success");
     }else{
      showToast("Error al crear el colaborador", "error");
     }

      // Aquí podrías redirigir o mostrar un mensaje de éxito
    } catch (error) {
      console.error("Error al crear el colaborador:", error);
    } finally {
      setLoading(false);
    }
  }

  return { handleChange, errors, newColaborator,departamentos ,activeTab,setActiveTab,loading,setLoading,handleSubmit};
};
