import  {useEffect, useState} from "react";
import {colaboradorService} from "../../../../Empleados/Directorio/services/colaboradorService.ts";
import type {Response} from "../../../../../services/http.ts";
import type {Departamento} from "../type/Department.ts";
import {FILTER_TERM, SEARCH_TERM, VISTA} from "../constants/const.ts";


export const useDepartment = () => {

    const [departments, setDepartments] = useState<Departamento[]>([])
    const [searchTerm, setSearchTerm] = useState<string>(SEARCH_TERM);
    const [filtroActivo, setFiltroActivo] = useState(FILTER_TERM);
    const [vista, setVista] = useState<string>(VISTA); // lista, agregar, editar
    const [loading, setLoading] = useState<boolean>(false)
    const [err, setErr] = useState<null | Error>(null)
   

    const fetchDepartments = async () => {
        try {
            setLoading(true)
            const respuesta: Response = await colaboradorService.getdepartmentsAndPositions()

            if (respuesta && respuesta.statusCode === 200) {

                setDepartments(respuesta.result.data)
            }
        } catch (error) {
            setErr(error as Error)
        } finally {
            setLoading(false)
        }
    }

   

    useEffect(():void=>{
       fetchDepartments()
    },[])
    return {err,departments,loading,vista, setVista,setSearchTerm,setFiltroActivo,searchTerm,filtroActivo}
}