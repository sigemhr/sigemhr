// types/personal.types.ts

/**
 * Enums y tipos para la tabla Personal
 */

export type Sexo = 'masculino' | 'femenino' | 'otro';

export type TipoContrato = 
  | 'tiempo completo' 
  | 'medio tiempo' 
  | 'temporal' 
  | 'prácticas' 
  | 'honorarios';

export type Turno = 'matutino' | 'vespertino' | 'nocturno' | 'mixto';

export type EstatusPersonal = 'activo' | 'inactivo' | 'baja';

/**
 * Interfaz principal para Personal
 */
export interface Personal {
  id: number;
  
  // Información Personal
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string | null;
  correo_electronico: string;
  telefono: string | null;
  telefono_emergencia: string | null;
  fecha_nacimiento: string | null; // ISO date string
  sexo: Sexo | null;
  estado_civil: string | null;
  nacionalidad: string;
  
  // Dirección
  direccion: string | null;
  colonia: string | null;
  ciudad: string | null;
  estado: string | null;
  pais: string;
  codigo_postal: string | null;
  
  // Información Laboral
  departamento: Departamento
  puesto: Puesto
  fecha_contratacion: string | null; // ISO date string
  fecha_baja: string | null; // ISO date string
  salario: number | null;
  bono: number | null;
  tipo_contrato: TipoContrato;
  turno: Turno | null;
  estatus: EstatusPersonal;
  
  // Vacaciones
  dias_vacaciones: number;
  dias_restantes_vacaciones: number;
  
  // Información Fiscal
  nss: string | null; // Número de Seguridad Social
  rfc: string | null; // Registro Federal de Contribuyentes
  curp: string | null; // Clave Única de Registro de Población
  infonavit: string | null;
  numero_empleado: string;
  
  // Información Bancaria
  banco: string | null;
  numero_cuenta: string | null;
  clabe_interbancaria: string | null;
  
  // Otros
  foto: string | null;
  observaciones: string | null;
  
  // Permisos y Roles
  es_supervisor: boolean;
  tiene_acceso_sistema: boolean;
  
  // Relaciones
  usuario_id: number | null;
  creado_por: number | null;
  actualizado_por: number | null;
  

}

/**
 * DTO para crear nuevo Personal
 * Omite campos auto-generados y timestamps
 */
export interface CreatePersonalDTO {
  // Información Personal (requeridos)
  nombre: string;
  apellido_paterno: string;
  correo_electronico: string;
  numero_empleado: string;
  
  // Información Personal (opcionales)
  apellido_materno?: string;
  telefono?: string;
  telefono_emergencia?: string;
  fecha_nacimiento?: string;
  sexo?: Sexo;
  estado_civil?: string;
  nacionalidad?: string;
  
  // Dirección
  direccion?: string;
  colonia?: string;
  ciudad?: string;
  estado?: string;
  pais?: string;
  codigo_postal?: string;
  
  // Información Laboral
  departamento_id?: number;
  puesto_id?: number;
  fecha_contratacion?: string;
  salario?: number;
  bono?: number;
  tipo_contrato?: TipoContrato;
  turno?: Turno;
  estatus?: EstatusPersonal;
  
  // Vacaciones
  dias_vacaciones?: number;
  dias_restantes_vacaciones?: number;
  
  // Información Fiscal
  nss?: string;
  rfc?: string;
  curp?: string;
  infonavit?: string;
  
  // Información Bancaria
  banco?: string;
  numero_cuenta?: string;
  clabe_interbancaria?: string;
  
  // Otros
  foto?: string;
  observaciones?: string;
  
  // Permisos
  es_supervisor?: boolean;
  tiene_acceso_sistema?: boolean;
  
  // Relaciones
  usuario_id?: number;
}

/**
 * DTO para actualizar Personal
 * Todos los campos son opcionales
 */
export interface UpdatePersonalDTO extends Partial<CreatePersonalDTO> {
  id: number;
  fecha_baja?: string;
}

/**
 * Interfaz para Personal con relaciones populadas
 */


/**
 * Filtros para búsqueda de Personal
 */
export interface PersonalFilters {
  search?: string;
  departamento_id?: number | number[];
  puesto_id?: number | number[];
  estatus?: EstatusPersonal | EstatusPersonal[];
  tipo_contrato?: TipoContrato | TipoContrato[];
  turno?: Turno | Turno[];
  sexo?: Sexo | Sexo[];
  es_supervisor?: boolean;
  tiene_acceso_sistema?: boolean;
  fecha_contratacion_desde?: string;
  fecha_contratacion_hasta?: string;
  salario_min?: number;
  salario_max?: number;
  ciudad?: string;
  estado?: string;
  nacionalidad?: string;
}



/**
 * Estadísticas de Personal
 */
export interface PersonalStats {
  total: number;
  activos: number;
  inactivos: number;
  bajas: number;
  por_departamento: Array<{
    departamento_id: number;
    departamento_nombre: string;
    cantidad: number;
  }>;
  por_puesto: Array<{
    puesto_id: number;
    puesto_nombre: string;
    cantidad: number;
  }>;
  por_tipo_contrato: Array<{
    tipo: TipoContrato;
    cantidad: number;
  }>;
  por_turno: Array<{
    turno: Turno;
    cantidad: number;
  }>;
  salario_promedio: number;
  edad_promedio: number;
}

/**
 * Opciones para select
 */
export interface SelectOption<T = string> {
  value: T;
  label: string;
}


export interface Departamento {
  id: number
  nombre: string
  codigo: string
  descripcion: string
  jefe_id: number | null
  activo: boolean
  created_at: string | null
  updated_at: string | null
}

export interface Puesto {
  id: number
  departamento_id: number
  nombre: string
  codigo: string
  nivel: string
  descripcion: string
  salario_min: string
  salario_max: string
  activo: boolean
  created_at: string | null
  updated_at: string | null
}

export interface Link {
  url: string | null
  label: string
  page: number | null
  active: boolean
}

export interface PaginatedResponse<T> {
  current_page: number
  data: T[]
  first_page_url: string | null
  from: number | null
  last_page: number
  last_page_url: string | null
  links: Link[]
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number | null
  total: number
}
export type EmpleadoResponse = PaginatedResponse<Personal>