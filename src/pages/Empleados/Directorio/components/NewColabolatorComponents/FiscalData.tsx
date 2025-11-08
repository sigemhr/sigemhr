import type { CreatePersonalDTO } from "../../types/Persona"

interface PersonalDataFormProps {
  newColaborator: CreatePersonalDTO
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement >) => void
   
}
const FiscalData = ({newColaborator,handleChange}:PersonalDataFormProps) => {
  return (
      <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      NSS (Seguro Social)
                    </label>
                    <input
                      type="text"
                      name="nss"
                      value={newColaborator.nss}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">RFC</label>
                    <input
                      type="text"
                      name="rfc"
                      value={newColaborator.rfc}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CURP</label>
                    <input
                      type="text"
                      name="curp"
                      value={newColaborator.curp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Infonavit
                    </label>
                    <input
                      type="text"
                      name="infonavit"
                      value={newColaborator.infonavit}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Datos Bancarios</h3>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Banco
                      </label>
                      <input
                        type="text"
                        name="banco"
                        value={newColaborator.banco}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Número de Cuenta
                        </label>
                        <input
                          type="text"
                          name="numero_cuenta"
                          value={newColaborator.numero_cuenta}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CLABE Interbancaria
                        </label>
                        <input
                          type="text"
                          name="clabe_interbancaria"
                          value={newColaborator.clabe_interbancaria}
                          onChange={handleChange}
                          maxLength={18}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default FiscalData
