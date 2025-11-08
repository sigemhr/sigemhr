import React, { useState } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  darkMode?: boolean;
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
}

export const Tabs: React.FC<TabsProps> = ({ 
  tabs, 
  darkMode = false,
  activeTab: externalActiveTab,
  onTabChange
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
  
  // Usa el activeTab externo si está disponible, sino usa el interno
  const activeTab = externalActiveTab !== undefined ? externalActiveTab : internalActiveTab;
  
  const handleTabClick = (tabId: string) => {
    if (externalActiveTab === undefined) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-lg p-6`}>
      {/* Tab Headers */}
      <div className={`flex border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
              activeTab === tab.id
                ? darkMode
                  ? 'border-blue-500 text-blue-400'
                  : 'border-blue-600 text-blue-600'
                : darkMode
                ? 'border-transparent text-gray-400 hover:text-gray-300'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className={`mt-6 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        {activeContent}
      </div>
    </div>
  );
};

// Ejemplo de uso
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTab, setCurrentTab] = useState('inicio');

  const exampleTabs: Tab[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
          <p>Este es el contenido de la pestaña de inicio. Aquí puedes mostrar cualquier componente o información que necesites.</p>
        </div>
      ),
    },
    {
      id: 'perfil',
      label: 'Perfil',
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Perfil de Usuario</h2>
          <p>Información del perfil del usuario.</p>
          <ul className="mt-4 space-y-2">
            <li>• Nombre: Juan Pérez</li>
            <li>• Email: juan@ejemplo.com</li>
            <li>• Rol: Desarrollador</li>
          </ul>
        </div>
      ),
    },
    {
      id: 'configuracion',
      label: 'Configuración',
      content: (
        <div>
          <h2 className="text-2xl font-bold mb-4">Configuración</h2>
          <p>Ajusta tus preferencias y configuraciones aquí.</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <span>Notificaciones</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Activar
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-8`}>
      <div className="max-w-4xl mx-auto">
        {/* Toggle Dark Mode */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentTab('inicio')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              Ir a Inicio
            </button>
            <button
              onClick={() => setCurrentTab('perfil')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              Ir a Perfil
            </button>
            <button
              onClick={() => setCurrentTab('configuracion')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
            >
              Ir a Configuración
            </button>
          </div>
          
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              isDarkMode
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            {isDarkMode ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
          </button>
        </div>

        {/* Tabs Component */}
        <Tabs 
          tabs={exampleTabs} 
          darkMode={isDarkMode}
          activeTab={currentTab}
          onTabChange={setCurrentTab}
        />
      </div>
    </div>
  );
}