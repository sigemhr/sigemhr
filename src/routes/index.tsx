import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import Login from '../pages/auth/Login';
import NotFoundPage from '../pages/auth/NotFoundPage';
import { PrivateRoute } from './PrivateRoutes';
import AdminDashboard from '../pages/home/Admin/AdminDashboard';
import { DashboardLayout } from '../Layouts/DashboardLayout';
import { ThemeProvider } from '../context/ThemeContext';
import AccessControl from '../pages/configuration/AccessControl';
import DirectorioPage from '../pages/Empleados/Directorio';
import DirectorioDetalle from '../pages/Empleados/Directorio/[id]';
import CrearEmpleado from '../pages/Empleados/Directorio/nuevo';

const AppRouter: React.FC = () => {
  return (
     <ThemeProvider>

    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>

            <Route element={<DashboardLayout />}>
              <Route path="/home_admin" element={<AdminDashboard />} />
               <Route path="/configuracion/usuarios" element={<AccessControl />} />
               <Route path='/empleados/directorio' element={<DirectorioPage />}/>
               <Route path='/empleados/nuevo' element={<CrearEmpleado />} />
                <Route path='/empleados/:id' element={<DirectorioDetalle />}/>
             
            </Route>

          </Route>
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
     </ThemeProvider>
  );
};

export default AppRouter;