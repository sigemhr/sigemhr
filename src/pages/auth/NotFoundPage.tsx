import React from "react";

type NotFoundPageProps = {
  /** función opcional para navegar al inicio. Si no se provee, hace window.location.assign('/') */
  onGoHome?: () => void;
};

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onGoHome }) => {
  const handleGoHome = () => {
    if (onGoHome) return onGoHome();
    // Por defecto redirige a la raíz
    if (typeof window !== "undefined") window.location.assign("/");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white p-6">
      <section className="max-w-4xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
        <div className="flex flex-col-reverse sm:flex-row items-center gap-8">

          {/* Texto */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-6xl sm:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight">
              404
            </h1>

            <p className="mt-2 text-lg sm:text-xl text-slate-600">
              Página no encontrada
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl">
              Lo sentimos — la página que intentas visitar no existe o fue movida. Puedes
              volver al inicio o revisar la URL e intentar de nuevo.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4 justify-center sm:justify-start">
              <button
                onClick={handleGoHome}
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-slate-900 text-white font-medium shadow-sm hover:scale-[1.02] transform transition"
                aria-label="Ir al inicio"
              >
                Volver al inicio
              </button>

              <a
                href="javascript:history.back()"
                className="mt-3 sm:mt-0 inline-flex items-center justify-center rounded-lg px-5 py-3 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 transition text-sm"
                aria-label="Volver atrás"
              >
                Volver atrás
              </a>
            </div>
          </div>

          {/* Ilustración */}
          <div className="w-full sm:w-72 flex-shrink-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-56 h-56 sm:w-64 sm:h-64"
              role="img"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>

              <rect x="0" y="0" width="200" height="200" rx="20" fill="#F8FAFC" />

              <g transform="translate(30,30)">
                <circle cx="70" cy="40" r="40" fill="url(#g)" opacity="0.15" />

                <g transform="translate(30,28)">
                  <path d="M2 24c8-12 22-18 38-16 18 2 32 12 34 30 2 16-8 30-26 34-18 4-36-6-44-20-6-10-6-20-2-28z" fill="#E6EEF8" />
                  <path d="M18 6c6 0 10 4 10 10s-4 10-10 10-10-4-10-10 4-10 10-10z" fill="#fff" opacity="0.9" />
                </g>

                <g transform="translate(10,60)">
                  <rect x="0" y="0" width="120" height="10" rx="5" fill="#EDF2F7" />
                  <rect x="0" y="18" width="80" height="10" rx="5" fill="#EDF2F7" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400 text-center">Si crees que esto es un error, contacta con soporte.</p>
      </section>
    </main>
  );
};

export default NotFoundPage;
