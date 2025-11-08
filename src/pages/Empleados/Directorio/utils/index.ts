import type { CreatePersonalDTO, Personal } from "../types/Persona";

/**
 * Utilidades de validación
 */
export class PersonalValidation {
  static isValidRFC(rfc: string): boolean {
    const rfcPattern = /^[A-ZÑ&]{3,4}\d{6}[A-Z0-9]{3}$/;
    return rfcPattern.test(rfc);
  }

  static isValidCURP(curp: string): boolean {
    const curpPattern = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$/;
    return curpPattern.test(curp);
  }

  static isValidNSS(nss: string): boolean {
    return /^\d{11}$/.test(nss);
  }

  static isValidCLABE(clabe: string): boolean {
    return /^\d{18}$/.test(clabe);
  }

  static isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  static isValidPhone(phone: string): boolean {
    // Formato: 555-123-4567 o 5551234567 o +52 555 123 4567
    const phonePattern = /^(\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
    return phonePattern.test(phone.replace(/\s/g, ''));
  }

  static isValidCodigoPostal(cp: string): boolean {
    return /^\d{5}$/.test(cp);
  }
  static validate(newColaborator: CreatePersonalDTO): { isValid: boolean; errors: Record<string, string> } {
    const newErrors: Record<string, string> = {};

    // Validaciones básicas
    if (!newColaborator.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio.";
    }
    if (!newColaborator.apellido_paterno.trim()) {
      newErrors.apellido_paterno = "El apellido paterno es obligatorio.";
    }
    if (!newColaborator.correo_electronico.trim()) {
      newErrors.correo_electronico = "El email es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(newColaborator.correo_electronico)) {
      newErrors.correo_electronico = "El email no es válido.";
    }
    // Agrega más validaciones según sea necesario
    
  
    return {  isValid: Object.keys(newErrors).length === 0, errors: newErrors};
  }
}

/**
 * Utilidades de formato
 */
export class PersonalFormatter {
  static formatNombreCompleto(personal: Personal): string {
    const partes = [
      personal.nombre,
      personal.apellido_paterno,
      personal.apellido_materno,
    ].filter(Boolean);
    return partes.join(' ');
  }

  static formatTelefono(telefono: string): string {
    // Formato: 555-123-4567
    const cleaned = telefono.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return telefono;
  }

  static formatSalario(salario: number): string {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN',
    }).format(salario);
  }

  static formatFecha(fecha: string | null): string {
    if (!fecha) return 'N/A';
    return new Date(fecha).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  static calcularEdad(fecha_nacimiento: string | null): number | null {
    if (!fecha_nacimiento) return null;
    const hoy = new Date();
    const nacimiento = new Date(fecha_nacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }

  static calcularAntiguedad(fecha_contratacion: string | null): string {
    if (!fecha_contratacion) return 'N/A';
    const hoy = new Date();
    const contratacion = new Date(fecha_contratacion);
    const años = hoy.getFullYear() - contratacion.getFullYear();
    const meses = hoy.getMonth() - contratacion.getMonth();
    
    if (años === 0) {
      return `${meses} ${meses === 1 ? 'mes' : 'meses'}`;
    }
    return `${años} ${años === 1 ? 'año' : 'años'}`;
  }

  
 
}