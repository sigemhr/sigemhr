import React from 'react'
import { useNavigate } from 'react-router-dom';

interface ButtonSectionProps {
  tabs: { id: string; label: string; content: React.ReactNode }[];
  activeTab: string;
  setActiveTab: (tabId: string) => void;
  loading: boolean;
  handleSubmit: () => void;
}
const ButtonSection: React.FC<ButtonSectionProps> = ({
  tabs,
  activeTab,
  setActiveTab,
  loading,
  handleSubmit
}) => {
  const navigate = useNavigate();
  return (
     <div className="flex justify-between items-center pt-6 mt-6 border-t">
        <button
          type="button"
          onClick={() => navigate("/empleados/directorio")}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>

        <div className="flex gap-3">
          {activeTab !== "inicio" && (
            <button
              type="button"
              onClick={() => {
                const currentIndex = tabs.findIndex((t) => t.id === activeTab);
                if (currentIndex > 0) {
                  setActiveTab(tabs[currentIndex - 1].id);
                }
              }}
              className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Anterior
            </button>
          )}

          {activeTab !== "laboral" ? (
            <button
              type="button"
              onClick={() => {
                const currentIndex = tabs.findIndex((t) => t.id === activeTab);
                if (currentIndex < tabs.length - 1) {
                  setActiveTab(tabs[currentIndex + 1].id);
                }
              }}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Siguiente
            </button>
          ) : (
            <button
            onClick={handleSubmit}
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Creando...
                </>
              ) : (
                "✓ Crear Empleado"
              )}
            </button>
          )}
        </div>
      </div>
  )
}

export default ButtonSection
