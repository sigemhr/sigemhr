// services/colaboradorService.ts
import Request from "../../../../../services/http";
import type { EmpleadoResponse } from "../../../../Empleados/Directorio/types/Persona";
import type { CreateDepartamento } from "../type/Department";

const request = new Request();
const baseURL = "departmentsandgroups";



export class DepartmentService {
  async getAll(params?: Record<string, any>): Promise<EmpleadoResponse> {
    const response = await request.get(baseURL, params);

    return response.result
  }
   async getAllActiveUsers(params?: Record<string, any>): Promise<EmpleadoResponse> {
      const response = await request.get(`${baseURL}/getActiveUsers`, params);
  
      return response.result
    }
  // async getPerPage(params:number): Promise<EmpleadoResponse> {
  //   const response = await request.get(`${baseURL}?page=${params}`,{});

  //   return response.result
  // }
  // async getById(id: number | string): Promise<Personal> {
  //   const response = await request.get(`${baseURL}/${id}`);
  //   return response.result
  // }

  async create(data: Partial<CreateDepartamento>){
    const response = await request.post(baseURL, data);
    return response.result
  }

  // async update(id: number | string, data: Partial<Personal>): Promise<Personal> {
  //   const response = await request.put(`${baseURL}/${id}`, data);
  //   return response.result
  // }

  // async delete(id: number | string): Promise<void> {
  //   await request.delete(`${baseURL}/${id}`);
  // }
  // async getdepartmentsAndPositions():Promise<Response>{
  //    return await request.get(`departmentsandgroups/getDepartmensAnGroups`, {});

  // }
}

export const departmentService = new DepartmentService();
