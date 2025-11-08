// Detalle del elemento seleccionado de Directorio

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { User, Mail, Phone, MapPin, Briefcase, FileText, CreditCard, Camera, Save, X, AlertCircle } from "lucide-react";

// Props / Types
export type Employee = {
  id?: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string | null;
  correo_electronico: string;
  telefono?: string | null;
  telefono_emergencia?: string | null;
  fecha_nacimiento?: string | null;
  sexo?: "masculino" | "femenino" | "otro" | null;
  estado_civil?: string | null;
  nacionalidad?: string;
  direccion?: string | null;
  colonia?: string | null;
  ciudad?: string | null;
  estado?: string | null;
  pais?: string | null;
  codigo_postal?: string | null;
  departamento_id?: number | null;
  puesto_id?: number | null;
  fecha_contratacion?: string | null;
  fecha_baja?: string | null;
  salario?: number | null;
  bono?: number | null;
  tipo_contrato?: "tiempo completo" | "medio tiempo" | "temporal" | "prácticas" | "honorarios";
  turno?: "matutino" | "vespertino" | "nocturno" | "mixto" | null;
  estatus?: "activo" | "inactivo" | "baja";
  dias_vacaciones?: number;
  dias_restantes_vacaciones?: number;
  nss?: string | null;
  rfc?: string | null;
  curp?: string | null;
  infonavit?: string | null;
  numero_empleado: string;
  banco?: string | null;
  numero_cuenta?: string | null;
  clabe_interbancaria?: string | null;
  foto?: string | null;
  observaciones?: string | null;
  es_supervisor?: boolean;
  tiene_acceso_sistema?: boolean;
  usuario_id?: number | null;
  creado_por?: number | null;
  actualizado_por?: number | null;
};

type Props = {
  initial?: Partial<Employee>;
  onSubmit: (payload: Employee) => Promise<void> | void;
  onCancel?: () => void;
  departamentos?: { id: number; nombre: string }[];
  puestos?: { id: number; nombre: string }[];
};

export default function DirectorioDetalle() {
  const initial: Partial<Employee> = {};
  const [form, setForm] = useState<Employee>({
    id: initial.id,
    nombre: initial.nombre ?? "",
    apellido_paterno: initial.apellido_paterno ?? "",
    apellido_materno: initial.apellido_materno ?? null,
    correo_electronico: initial.correo_electronico ?? "",
    telefono: initial.telefono ?? null,
    telefono_emergencia: initial.telefono_emergencia ?? null,
    fecha_nacimiento: initial.fecha_nacimiento ?? null,
    sexo: (initial.sexo as any) ?? null,
    estado_civil: initial.estado_civil ?? null,
    nacionalidad: initial.nacionalidad ?? "Mexicana",
    direccion: initial.direccion ?? null,
    colonia: initial.colonia ?? null,
    ciudad: initial.ciudad ?? null,
    estado: initial.estado ?? null,
    pais: initial.pais ?? "México",
    codigo_postal: initial.codigo_postal ?? null,
    departamento_id: initial.departamento_id ?? null,
    puesto_id: initial.puesto_id ?? null,
    fecha_contratacion: initial.fecha_contratacion ?? null,
    fecha_baja: initial.fecha_baja ?? null,
    salario: initial.salario ?? null,
    bono: initial.bono ?? null,
    tipo_contrato: initial.tipo_contrato ?? "tiempo completo",
    turno: (initial.turno as any) ?? null,
    estatus: (initial.estatus as any) ?? "activo",
    dias_vacaciones: initial.dias_vacaciones ?? 0,
    dias_restantes_vacaciones: initial.dias_restantes_vacaciones ?? 0,
    nss: initial.nss ?? null,
    rfc: initial.rfc ?? null,
    curp: initial.curp ?? null,
    infonavit: initial.infonavit ?? null,
    numero_empleado: initial.numero_empleado ?? "",
    banco: initial.banco ?? null,
    numero_cuenta: initial.numero_cuenta ?? null,
    clabe_interbancaria: initial.clabe_interbancaria ?? null,
    foto: initial.foto ?? null,
    observaciones: initial.observaciones ?? null,
    es_supervisor: initial.es_supervisor ?? false,
    tiene_acceso_sistema: initial.tiene_acceso_sistema ?? false,
    usuario_id: initial.usuario_id ?? null,
    creado_por: initial.creado_por ?? null,
    actualizado_por: initial.actualizado_por ?? null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type } = e.target as HTMLInputElement;
    let val: any = value;
    if (type === "number") {
      val = value === "" ? null : Number(value);
    }
    if (type === "checkbox") {
      val = (e.target as HTMLInputElement).checked;
    }
    setForm((s) => ({ ...s, [name]: val }));
    setErrors((e) => ({ ...e, [name]: "" }));
  }

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setForm((s) => ({ ...s, foto: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }

  function validate(): boolean {
    const err: Record<string, string> = {};
    if (!form.nombre.trim()) err.nombre = "El nombre es obligatorio";
    if (!form.apellido_paterno?.trim()) err.apellido_paterno = "El apellido paterno es obligatorio";
    if (!form.correo_electronico?.trim()) err.correo_electronico = "El correo es obligatorio";
    if (form.correo_electronico && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.correo_electronico)) err.correo_electronico = "Correo inválido";
    if (!form.numero_empleado?.trim()) err.numero_empleado = "Número de empleado es obligatorio";
    setErrors(err);
    return Object.keys(err).length === 0;
  }
  

  async function handleSubmit(e: FormEvent) {
    // e.preventDefault();
    // if (!validate()) return;
    // setSubmitting(true);
    // try {
    //   await onSubmit(form);
    // } catch (error) {
    //   console.error(error);
    //   setErrors((s) => ({ ...s, _global: "Ocurrió un error al guardar" }));
    // } finally {
    //   setSubmitting(false);
    // }
  }

  const inputClass = "mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const errorClass = "text-red-600 text-xs mt-1 flex items-center gap-1";

  return (
    <form className="max-w-7xl mx-auto p-6" onSubmit={handleSubmit}>
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {initial.id ? "Editar empleado" : "Nuevo empleado"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Complete la información del empleado
            </p>
          </div>
          
          {/* Foto del empleado */}
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              {form.foto ? (
                <img src={form.foto} alt="Foto empleado" className="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow-md" />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center border-4 border-gray-100 shadow-md">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
              )}
              <label className="absolute bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full cursor-pointer shadow-lg transition-colors">
                <Camera className="w-4 h-4" />
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
              </label>
            </div>
            <span className="text-xs text-gray-500">Cambiar foto</span>
          </div>
        </div>
      </div>

      {/* Error global */}
      {errors._global && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-2 text-red-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="text-sm font-medium">{errors._global}</span>
        </div>
      )}

      {/* Identidad básica */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Identidad</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Nombre <span className="text-red-500">*</span></label>
            <input name="nombre" value={form.nombre} onChange={handleChange} className={inputClass} placeholder="Ej: Juan" />
            {errors.nombre && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.nombre}</p>}
          </div>

          <div>
            <label className={labelClass}>Apellido paterno <span className="text-red-500">*</span></label>
            <input name="apellido_paterno" value={form.apellido_paterno} onChange={handleChange} className={inputClass} placeholder="Ej: Pérez" />
            {errors.apellido_paterno && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.apellido_paterno}</p>}
          </div>

          <div>
            <label className={labelClass}>Apellido materno</label>
            <input name="apellido_materno" value={form.apellido_materno ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: García" />
          </div>

          <div>
            <label className={labelClass}>Número de empleado <span className="text-red-500">*</span></label>
            <input name="numero_empleado" value={form.numero_empleado} onChange={handleChange} className={inputClass} placeholder="Ej: EMP001" />
            {errors.numero_empleado && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.numero_empleado}</p>}
          </div>
        </div>
      </div>

      {/* Contacto */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Contacto</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Correo electrónico <span className="text-red-500">*</span></label>
            <input name="correo_electronico" type="email" value={form.correo_electronico} onChange={handleChange} className={inputClass} placeholder="ejemplo@correo.com" />
            {errors.correo_electronico && <p className={errorClass}><AlertCircle className="w-3 h-3" />{errors.correo_electronico}</p>}
          </div>

          <div>
            <label className={labelClass}>
              <Phone className="w-4 h-4 inline mr-1" />
              Teléfono
            </label>
            <input name="telefono" value={form.telefono ?? ""} onChange={handleChange} className={inputClass} placeholder="55 1234 5678" />
          </div>

          <div>
            <label className={labelClass}>
              <Phone className="w-4 h-4 inline mr-1" />
              Teléfono de emergencia
            </label>
            <input name="telefono_emergencia" value={form.telefono_emergencia ?? ""} onChange={handleChange} className={inputClass} placeholder="55 8765 4321" />
          </div>
        </div>
      </div>

      {/* Datos personales */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <User className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Datos personales</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Fecha de nacimiento</label>
            <input name="fecha_nacimiento" type="date" value={form.fecha_nacimiento ?? ""} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Sexo</label>
            <select name="sexo" value={form.sexo ?? ""} onChange={handleChange} className={inputClass}>
              <option value="">--Seleccione--</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Estado civil</label>
            <input name="estado_civil" value={form.estado_civil ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: Soltero" />
          </div>

          <div>
            <label className={labelClass}>Nacionalidad</label>
            <input name="nacionalidad" value={form.nacionalidad ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: Mexicana" />
          </div>
        </div>
      </div>

      {/* Dirección */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Dirección</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="md:col-span-2 lg:col-span-4">
            <label className={labelClass}>Dirección completa</label>
            <input name="direccion" value={form.direccion ?? ""} onChange={handleChange} className={inputClass} placeholder="Calle, número, etc." />
          </div>

          <div>
            <label className={labelClass}>Colonia</label>
            <input name="colonia" value={form.colonia ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: Centro" />
          </div>

          <div>
            <label className={labelClass}>Ciudad</label>
            <input name="ciudad" value={form.ciudad ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: Ciudad de México" />
          </div>

          <div>
            <label className={labelClass}>Estado</label>
            <input name="estado" value={form.estado ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: CDMX" />
          </div>

          <div>
            <label className={labelClass}>País</label>
            <input name="pais" value={form.pais ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: México" />
          </div>

          <div>
            <label className={labelClass}>Código postal</label>
            <input name="codigo_postal" value={form.codigo_postal ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: 01000" />
          </div>
        </div>
      </div>

      {/* Información laboral */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Información laboral</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>Departamento</label>
            <select name="departamento_id" value={form.departamento_id ?? ""} onChange={handleChange} className={inputClass}>
              <option value="">--Seleccione--</option>
              {/* {departamentos.map((d) => (
                <option key={d.id} value={d.id}>{d.nombre}</option>
              ))} */}
            </select>
          </div>

          <div>
            <label className={labelClass}>Puesto</label>
            <select name="puesto_id" value={form.puesto_id ?? ""} onChange={handleChange} className={inputClass}>
              <option value="">--Seleccione--</option>
              {/* {puestos.map((p) => (
                <option key={p.id} value={p.id}>{p.nombre}</option>
              ))} */}
            </select>
          </div>

          <div>
            <label className={labelClass}>Fecha de contratación</label>
            <input name="fecha_contratacion" type="date" value={form.fecha_contratacion ?? ""} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Fecha de baja</label>
            <input name="fecha_baja" type="date" value={form.fecha_baja ?? ""} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Tipo de contrato</label>
            <select name="tipo_contrato" value={form.tipo_contrato} onChange={handleChange} className={inputClass}>
              <option value="tiempo completo">Tiempo completo</option>
              <option value="medio tiempo">Medio tiempo</option>
              <option value="temporal">Temporal</option>
              <option value="prácticas">Prácticas</option>
              <option value="honorarios">Honorarios</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Turno</label>
            <select name="turno" value={form.turno ?? ""} onChange={handleChange} className={inputClass}>
              <option value="">--Seleccione--</option>
              <option value="matutino">Matutino</option>
              <option value="vespertino">Vespertino</option>
              <option value="nocturno">Nocturno</option>
              <option value="mixto">Mixto</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Estatus</label>
            <select name="estatus" value={form.estatus} onChange={handleChange} className={inputClass}>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="baja">Baja</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Salario mensual</label>
            <input name="salario" type="number" step="0.01" value={form.salario ?? ""} onChange={handleChange} className={inputClass} placeholder="$0.00" />
          </div>

          <div>
            <label className={labelClass}>Bono</label>
            <input name="bono" type="number" step="0.01" value={form.bono ?? ""} onChange={handleChange} className={inputClass} placeholder="$0.00" />
          </div>

          <div>
            <label className={labelClass}>Días de vacaciones</label>
            <input name="dias_vacaciones" type="number" value={form.dias_vacaciones ?? 0} onChange={handleChange} className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Días restantes</label>
            <input name="dias_restantes_vacaciones" type="number" value={form.dias_restantes_vacaciones ?? 0} onChange={handleChange} className={inputClass} />
          </div>

          <div className="md:col-span-2 lg:col-span-4 flex flex-wrap items-center gap-6 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input name="es_supervisor" type="checkbox" checked={!!form.es_supervisor} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm font-medium text-gray-700">Es supervisor</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input name="tiene_acceso_sistema" type="checkbox" checked={!!form.tiene_acceso_sistema} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm font-medium text-gray-700">Tiene acceso al sistema</span>
            </label>
          </div>
        </div>
      </div>

      {/* Documentos */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Documentos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className={labelClass}>NSS</label>
            <input name="nss" value={form.nss ?? ""} onChange={handleChange} className={inputClass} placeholder="Número de Seguridad Social" />
          </div>

          <div>
            <label className={labelClass}>RFC</label>
            <input name="rfc" value={form.rfc ?? ""} onChange={handleChange} className={inputClass} placeholder="Registro Federal" />
          </div>

          <div>
            <label className={labelClass}>CURP</label>
            <input name="curp" value={form.curp ?? ""} onChange={handleChange} className={inputClass} placeholder="Clave Única" />
          </div>

          <div>
            <label className={labelClass}>Infonavit</label>
            <input name="infonavit" value={form.infonavit ?? ""} onChange={handleChange} className={inputClass} placeholder="Número Infonavit" />
          </div>
        </div>
      </div>

      {/* Información bancaria */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Información bancaria</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Banco</label>
            <input name="banco" value={form.banco ?? ""} onChange={handleChange} className={inputClass} placeholder="Ej: BBVA" />
          </div>

          <div>
            <label className={labelClass}>Número de cuenta</label>
            <input name="numero_cuenta" value={form.numero_cuenta ?? ""} onChange={handleChange} className={inputClass} placeholder="0123456789" />
          </div>

          <div>
            <label className={labelClass}>CLABE interbancaria</label>
            <input name="clabe_interbancaria" value={form.clabe_interbancaria ?? ""} onChange={handleChange} className={inputClass} placeholder="18 dígitos" maxLength={18} />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className={labelClass}>Observaciones</label>
            <textarea name="observaciones" value={form.observaciones ?? ""} onChange={handleChange} rows={4} className={inputClass} placeholder="Notas adicionales sobre el empleado..." />
          </div>
        </div>
      </div>

      {/* Acciones */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => { } }
            disabled={submitting}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
          >
            <X className="w-4 h-4" />
            Cancelar
          </button>
          
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-sm transition-colors"
          >
            {submitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Guardando...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Guardar empleado
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}