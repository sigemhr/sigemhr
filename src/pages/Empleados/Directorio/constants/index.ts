import type { CreatePersonalDTO, EstatusPersonal, Personal, SelectOption, Sexo, TipoContrato, Turno } from "../types/Persona";

/**
 * Constantes para opciones de select
 */
export const SEXO_OPTIONS: SelectOption<Sexo>[] = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' },
  { value: 'otro', label: 'Otro' },
  
];

export const TIPO_CONTRATO_OPTIONS: SelectOption<TipoContrato>[] = [
  { value: 'tiempo completo', label: 'Tiempo Completo' },
  { value: 'medio tiempo', label: 'Medio Tiempo' },
  { value: 'temporal', label: 'Temporal' },
  { value: 'prácticas', label: 'Prácticas' },
  { value: 'honorarios', label: 'Honorarios' },
];

export const TURNO_OPTIONS: SelectOption<Turno>[] = [
  { value: 'matutino', label: 'Matutino' },
  { value: 'vespertino', label: 'Vespertino' },
  { value: 'nocturno', label: 'Nocturno' },
  { value: 'mixto', label: 'Mixto' },
];

export const ESTATUS_OPTIONS: SelectOption<EstatusPersonal>[] = [
  { value: 'activo', label: 'Activo' },
  { value: 'inactivo', label: 'Inactivo' },
  { value: 'baja', label: 'Baja' },
];

export const ESTADO_CIVIL_OPTIONS: SelectOption[] = [
  { value: 'soltero', label: 'Soltero(a)' },
  { value: 'casado', label: 'Casado(a)' },
  { value: 'divorciado', label: 'Divorciado(a)' },
  { value: 'viudo', label: 'Viudo(a)' },
  { value: 'union_libre', label: 'Unión Libre' },
];

export const ESTADOS_MEXICO: SelectOption[] = [
  { value: 'Aguascalientes', label: 'Aguascalientes' },
  { value: 'Baja California', label: 'Baja California' },
  { value: 'Baja California Sur', label: 'Baja California Sur' },
  { value: 'Campeche', label: 'Campeche' },
  { value: 'Chiapas', label: 'Chiapas' },
  { value: 'Chihuahua', label: 'Chihuahua' },
  { value: 'CDMX', label: 'Ciudad de México' },
  { value: 'Coahuila', label: 'Coahuila' },
  { value: 'Colima', label: 'Colima' },
  { value: 'Durango', label: 'Durango' },
  { value: 'Guanajuato', label: 'Guanajuato' },
  { value: 'Guerrero', label: 'Guerrero' },
  { value: 'Hidalgo', label: 'Hidalgo' },
  { value: 'Jalisco', label: 'Jalisco' },
  { value: 'México', label: 'Estado de México' },
  { value: 'Michoacán', label: 'Michoacán' },
  { value: 'Morelos', label: 'Morelos' },
  { value: 'Nayarit', label: 'Nayarit' },
  { value: 'Nuevo León', label: 'Nuevo León' },
  { value: 'Oaxaca', label: 'Oaxaca' },
  { value: 'Puebla', label: 'Puebla' },
  { value: 'Querétaro', label: 'Querétaro' },
  { value: 'Quintana Roo', label: 'Quintana Roo' },
  { value: 'San Luis Potosí', label: 'San Luis Potosí' },
  { value: 'Sinaloa', label: 'Sinaloa' },
  { value: 'Sonora', label: 'Sonora' },
  { value: 'Tabasco', label: 'Tabasco' },
  { value: 'Tamaulipas', label: 'Tamaulipas' },
  { value: 'Tlaxcala', label: 'Tlaxcala' },
  { value: 'Veracruz', label: 'Veracruz' },
  { value: 'Yucatán', label: 'Yucatán' },
  { value: 'Zacatecas', label: 'Zacatecas' },
];
  export const PERSONADEAFULT:CreatePersonalDTO={
    nombre: '',
    apellido_paterno: '',
    apellido_materno: '',
    correo_electronico: '',
    telefono: '',
    telefono_emergencia: '',
    fecha_nacimiento: '',
    sexo: 'masculino',
    estado_civil: '',
    nacionalidad: 'Mexicana',
    direccion: '',
    colonia: '',
    ciudad: '',
    estado: '',
    pais: 'México',
    codigo_postal: '',
    departamento_id: 0,
    puesto_id: 0,
    fecha_contratacion: '',
    salario: 0,
    bono: 0,
    tipo_contrato: 'tiempo completo',
    turno: 'matutino',
    estatus: 'activo',
    dias_vacaciones: 0,
    nss: '',
    rfc: '',
    curp: '',
    infonavit: '',
    numero_empleado: '',
    banco: '',
    numero_cuenta: '',
    clabe_interbancaria: '',
    observaciones: '',
    es_supervisor: false,
    tiene_acceso_sistema: false,
  }