import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Building2, Save, X } from "lucide-react";
import {
  H1,
  Input,
  Label,
  Span,
} from "../../../../components/ui/TextComponents";
import { useEditDepartment } from "./hooks/useEditDepartment";
import Container from "../../../../components/ui/Container";

const DepartmentEditOrCreate = () => {
  const { darkMode, department, setDepartment, handleDepartmentChange,handleSave } =
    useEditDepartment();
  const location = useLocation();
  const { departamento } = location.state || {};

  useEffect(() => {
    if (departamento) {
      setDepartment(departamento);
    }
  }, [departamento]);
  return (
    <div className="">
      <Container className=" rounded-lg shadow-sm p-6 mb-6 border border-slate-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-500 rounded-lg">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <H1 darkMode={darkMode} className="text-2xl font-bold">
              Editor de Departamento
            </H1>
          </div>
        </div>

        {/* Información General */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label
              darkMode={darkMode}
              className="block text-sm font-medium  mb-1"
            >
              Nombre del Departamento
            </Label>
            <Input
              darkMode={darkMode}
              name="nombre"
              type="text"
              value={department?.nombre}
              onChange={(e) => handleDepartmentChange(e)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <Label
              darkMode={darkMode}
              className="block text-sm font-medium mb-1"
            >
              Código
            </Label>
            <Input
              darkMode={darkMode}
              type="text"
              value={department.codigo}
              onChange={(e) => handleDepartmentChange(e)}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <Label darkMode={darkMode} className="block text-sm font-medium mb-1">
            Descripción
          </Label>
          <textarea
            value={department.descripcion ?? ""}
            onChange={(e) => handleDepartmentChange(e)}
            rows={3}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label
              darkMode={darkMode}
              className="block text-sm font-medium mb-1"
            >
              Jefe del Departamento
            </Label>
            <div className="px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-700">
              {department.jefe_id ?? "No asignado"}
            </div>
          </div>

          <div className="flex items-end">
            <Label
              darkMode={darkMode}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Input
                type="checkbox"
                checked={department.activo}
                onChange={(e) => handleDepartmentChange(e)}
                className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <Span darkMode={darkMode} className="text-sm font-medium ">
                Departamento Activo
              </Span>
            </Label>
          </div>
        </div>
        {/* Botones de Acción */}
        <div className="flex gap-4 mt-6 justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Save className="w-4 h-4" />
            Guardar Cambios
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">
            <X className="w-4 h-4" />
            Cancelar
          </button>
        </div>
      </Container>
    </div>
  );
};

export default DepartmentEditOrCreate;
