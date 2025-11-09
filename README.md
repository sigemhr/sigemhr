# Sistema de Recursos Humanos

Un sistema moderno de gestión de recursos humanos construido con tecnologías web de última generación.

## 🚀 Tecnologías

- **React 18** con TypeScript
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de CSS utility-first
- **TSX** - TypeScript + JSX

## 📋 Características

- Gestión de empleados
- Control de asistencias
- Administración de nómina
- Gestión de vacaciones y permisos
- Evaluaciones de desempeño
- Módulo de reclutamiento
- Reportes y analíticas

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/sistema-rh.git
cd sistema-rh
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` basado en `.env.example`:
```bash
cp .env.example .env
```

4. Configura las variables de entorno necesarias en el archivo `.env`

## 🚦 Uso

### Modo desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

### Build para producción

```bash
npm run build
```

### Preview del build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Estructura del proyecto

```
sistema-rh/
├── src/
│   ├── assets/          # Recursos estáticos
│   ├── components/      # Componentes reutilizables
│   ├── pages/          # Páginas de la aplicación
│   ├── hooks/          # Custom hooks
│   ├── services/       # Servicios y API calls
│   ├── types/          # Definiciones de TypeScript
│   ├── utils/          # Funciones utilitarias
│   ├── App.tsx         # Componente principal
│   └── main.tsx        # Punto de entrada
├── public/             # Archivos públicos
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## 🎨 Configuración de Tailwind

El proyecto utiliza Tailwind CSS con configuración personalizada. Puedes modificar los estilos en `tailwind.config.js`.

## 🔧 Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera el build de producción
- `npm run preview` - Previsualiza el build de producción
- `npm run lint` - Ejecuta el linter
- `npm run type-check` - Verifica los tipos de TypeScript

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- Tu Nombre - [@sigemhr](https://github.com/sigemhr)

## 📞 Contacto

Para preguntas o soporte, contacta a: sigemhr@gmail.com

---

Desarrollado con ❤️ usando React + Vite + Tailwind CSS