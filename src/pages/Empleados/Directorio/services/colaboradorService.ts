// services/colaboradorService.ts
import Request from "../../../../services/http";
import type { EmpleadoResponse,  Personal } from "../types/Persona";

const request = new Request();
const baseURL = "colaboradores";



export class ColaboradorService {
  async getAll(params?: Record<string, any>): Promise<EmpleadoResponse> {
    const response = await request.get(baseURL, params);

    return response.result
  }
  async getPerPage(params:number): Promise<EmpleadoResponse> {
    const response = await request.get(`${baseURL}?page=${params}`,{});

    return response.result
  }
  async getById(id: number | string): Promise<Personal> {
    const response = await request.get(`${baseURL}/${id}`);
    return response.result
  }

  async create(data: Partial<Personal>){
    const response = await request.post(baseURL, data);
    return response.result
  }

  async update(id: number | string, data: Partial<Personal>): Promise<Personal> {
    const response = await request.put(`${baseURL}/${id}`, data);
    return response.result
  }

  async delete(id: number | string): Promise<void> {
    await request.delete(`${baseURL}/${id}`);
  }
  async getdepartmentsAndPositions(){
     const response = await request.get(`departmentsandgroups/getDepartmensAnGroups`, {});
    return response.result
  }
}

export const colaboradorService = new ColaboradorService();
