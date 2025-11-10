import type { Personal } from "../../../../Empleados/Directorio/types/Persona.ts";


export interface Puesto {
  id: number;
  departamento_id: number;
  nombre: string;
  codigo: string;
  nivel: string;
  descripcion: string | null;
  salario_min: string;
  salario_max: string;
  activo: boolean;
  created_at: string | null;
  updated_at: string | null;
}

export interface Departamento {
  id: number;
  nombre: string;
  codigo: string;
  descripcion: string | null;
  jefe_id: number | null;
  activo: boolean;
  created_at: string;
  updated_at: string;
  puestos?: Puesto[];
  jefe?: Personal;
  personal?: Personal[];
}

// Tipos para crear/actualizar (sin campos autogenerados)
export interface CreateDepartamento {
  nombre: string;
  codigo: string;
  descripcion?: string | null;
  jefe_id?: number | null;
  activo?: boolean;
}

export interface UpdateDepartamento {
  nombre?: string;
  codigo?: string;
  descripcion?: string | null;
  jefe_id?: number | null;
  activo?: boolean;
}

export interface CreatePuesto {
  departamento_id: number;
  nombre: string;
  codigo: string;
  nivel: string;
  descripcion?: string | null;
  salario_min: string;
  salario_max: string;
  activo?: boolean;
}

export interface UpdatePuesto {
  departamento_id?: number;
  nombre?: string;
  codigo?: string;
  nivel?: string;
  descripcion?: string | null;
  salario_min?: string;
  salario_max?: string;
  activo?: boolean;
}