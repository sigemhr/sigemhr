
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-between">
        <button
          onClick={() => navigate("/empleados/directorio")}
          className="text-blue-600 hover:text-blue-800 flex items-center gap-2 mb-4"
        >
          ← Volver al directorio
        </button>
        <div className="flex">
          <h1 className="text-3xl font-bold text-gray-900">Nuevo Empleado</h1>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
