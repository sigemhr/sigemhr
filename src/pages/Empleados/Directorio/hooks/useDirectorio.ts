// hooks/useDirectorio.ts
import { useEffect, useState } from "react";
import { colaboradorService } from "../services/colaboradorService";
import type { Personal } from "../types/Persona";


export function useDirectorio() {
  const [colaboradores, setColaboradores] = useState<Personal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total,setTotal]=useState<number>(0)
  const [per_page,setPerPage]=useState<number>(0)
  const [current_page,setCurrentPage]=useState<number>(1)


  const cargarColaboradores = async () => {
    try {
      setLoading(true);
      const data = await colaboradorService.getAll();
   setCurrentPage(data.current_page)
      setTotal(data.total)
      setColaboradores(data.data);
      setPerPage(data.per_page)
    } catch (err: any) {
      setError(err.message || "Error al cargar colaboradores");
    } finally {
      setLoading(false);
    }
  };

  const onPageChange=async(page:number)=>{
     setLoading(true);
    const data = await colaboradorService.getPerPage(page); 
    setTotal(data.total)
      setColaboradores(data.data);
      setPerPage(data.per_page)
      setCurrentPage(data.current_page)
       setLoading(false);
  }

  useEffect(() => {
    cargarColaboradores();
  }, []);

  return {
    onPageChange,
    colaboradores,
    loading,
    error,
    reload: cargarColaboradores,
    total,
    per_page,
    current_page

  };
}
