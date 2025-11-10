import type { CreatePersonalDTO } from "../../types/Persona"
import React from "react";

interface PersonalDataFormProps {
    newColaborator: CreatePersonalDTO
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) => void
   
}
export const AditionalData: ({newColaborator, handleChange}: PersonalDataFormProps) => React.JSX.Element = ({ newColaborator, handleChange }: PersonalDataFormProps):React.JSX.Element => {
  return (
     <div className="space-y-6">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Observaciones
                   </label>
                   <textarea
                     name="observaciones"
                     value={newColaborator.observaciones}
                     onChange={handleChange}
                     rows={4}
                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                     placeholder="Notas adicionales sobre el empleado..."
                   />
                 </div>

                 <div className="space-y-4">
                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       name="es_supervisor"
                       checked={newColaborator.es_supervisor}
                       onChange={handleChange}
                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                     />
                     <label className="ml-2 block text-sm text-gray-900">
                       Es supervisor
                     </label>
                   </div>

                   <div className="flex items-center">
                     <input
                       type="checkbox"
                       name="tiene_acceso_sistema"
                       checked={newColaborator.tiene_acceso_sistema}
                       onChange={handleChange}
                       className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                     />
                     <label className="ml-2 block text-sm text-gray-900">
                       Tiene acceso al sistema
                     </label>
                   </div>
                 </div>

                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                   <p className="text-sm text-blue-800">
                     <strong>Nota:</strong> Una vez creado el empleado, podrás agregar su fotografía y
                     vincular su usuario del sistema desde la página de edición.
                   </p>
                 </div>
               </div>
  )
}
