
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import React, { useState, type ReactElement, type ReactNode } from "react";
// import { ChevronDown } from "lucide-react";

// // 🧩 Interfaces
// interface DropDownProps {
//   children: ReactNode;
//   darkMode?: boolean;
//   expanded?: boolean;
//   onChange?: (expanded: boolean) => void;
// }

// interface DropDownHeaderProps {
//   children: ReactNode;
//   thumbnail?: ReactNode;
//   darkMode?: boolean;
//   isExpanded?: boolean;
//   toggleExpanded?: () => void;
//   variant?: Variant;
// }

// interface DropDownBodyProps {
//   children: ReactNode;
//   darkMode?: boolean;
//   isExpanded?: boolean;
//   clasesName?: string;
// }

// interface ThumbnailProps {
//   number?: number | string;
//   label: string;
//   darkMode?: boolean;
//   icon?: React.ReactNode;
//   imageSrc?: string;
// }

// type Variant = "default" | "success" | "info" | "warning" | "danger" | "ghost";

// // 🎛 Componente Principal
// export const DropDown: React.FC<DropDownProps> = ({
//   children,
//   darkMode = false,
//   expanded: controlledExpanded,
//   onChange,
// }) => {
//   const [internalExpanded, setInternalExpanded] = useState<boolean>(false);
//   const isControlled = controlledExpanded !== undefined;
//   const isExpanded = isControlled ? controlledExpanded : internalExpanded;

//   const toggleExpanded = (): void => {
//     if (isControlled) {
//       onChange?.(!isExpanded);
//     } else {
//       setInternalExpanded(!isExpanded);
//     }
//   };

//   return (
//     <div
//       className={`rounded-xl border transition-all duration-300 shadow-sm ${
//         darkMode
//           ? "bg-gray-800 border-gray-700 text-gray-100"
//           : "bg-white border-gray-200 text-gray-800"
//       } ${isExpanded ? "shadow-md" : ""}`}
//     >
//       {React.Children.map(children, (child) =>
//         React.isValidElement(child)
//           ? React.cloneElement(child as ReactElement<any>, {
//               darkMode,
//               isExpanded,
//               toggleExpanded,
//             })
//           : child
//       )}
//     </div>
//   );
// };

// // 🧱 Header
// export const DropDownHeader: React.FC<DropDownHeaderProps> = ({
//   children,
//   thumbnail,
//   darkMode = false,
//   isExpanded = false,
//   toggleExpanded,
//   variant = "default",
// }) => {
//   const variantClasses: any = {
//     default: {
//       light:
//         "hover:bg-gray-50 text-gray-800 rounded-xl active:bg-gray-100 transition-colors",
//       dark: "hover:bg-gray-700 text-gray-100 rounded-xl active:bg-gray-600 transition-colors",
//     },
//     success: {
//       light:
//         "bg-green-50 text-green-700 hover:bg-green-100 border-green-200 rounded-xl",
//       dark: "bg-green-900/30 text-green-300 hover:bg-green-800/40 border-green-800",
//     },
//     info: {
//       light:
//         "bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 rounded-xl",
//       dark: "bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 border-blue-800",
//     },
//     warning: {
//       light:
//         "bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border-yellow-200 rounded-xl",
//       dark:
//         "bg-yellow-900/30 text-yellow-200 hover:bg-yellow-800/40 border-yellow-800",
//     },
//     danger: {
//       light:
//         "bg-red-50 text-red-700 hover:bg-red-100 border-red-200 rounded-xl",
//       dark: "bg-red-900/30 text-red-300 hover:bg-red-800/40 border-red-800",
//     },
//     ghost: {
//       light: "hover:bg-gray-50 text-gray-600 rounded-xl",
//       dark: "hover:bg-gray-700 text-gray-300 rounded-xl",
//     },
//   };

//   const colorClasses = darkMode
//     ? variantClasses[variant].dark
//     : variantClasses[variant].light;

//   return (
//     <div
//       className={`flex items-center justify-between w-full px-4 py-3 cursor-pointer select-none ${colorClasses}`}
//       onClick={toggleExpanded}
//     >
//       <div className="flex items-center gap-4 flex-1">
//         {thumbnail && <div className="flex-shrink-0">{thumbnail}</div>}
//         <div className="flex-1 text-sm font-medium">{children}</div>
//       </div>
//       <ChevronDown
//         className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
//           isExpanded ? "rotate-180" : ""
//         } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
//       />
//     </div>
//   );
// };

// // 📦 Body
// export const DropDownBody: React.FC<DropDownBodyProps> = ({
//   children,
//   darkMode = false,
//   isExpanded = false,
//   clasesName = "",
// }) => {
//   return (
//     <div
//       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//         isExpanded ? "max-h-[500px] overflow-y-scroll opacity-100" : "max-h-0 opacity-0"
//       }`}
//     >
//       <div
//         className={`p-4 border-t text-sm ${
//           darkMode ? "border-gray-700 text-gray-200" : "border-gray-200 text-gray-700"
//         } ${clasesName}`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// // 🧩 Thumbnail
// export const Thumbnail: React.FC<ThumbnailProps> = ({
//   number,
//   label,
//   darkMode = false,
//   icon,
//   imageSrc,
// }) => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center">
//       <div
//         className={`w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-sm ${
//           darkMode ? "bg-primary/30 text-blue-400" : "bg-gray-100 text-blue-700"
//         }`}
//       >
//         {icon ? (
//           <div className="text-lg">{icon}</div>
//         ) : imageSrc ? (
//           <img
//             src={imageSrc}
//             alt={label}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         ) : (
//           <span className="text-sm font-semibold">{number}</span>
//         )}
//       </div>
//       <span
//         className={`text-xs mt-1 ${
//           darkMode ? "text-gray-400" : "text-gray-500"
//         }`}
//       >
//         {label}
//       </span>
//     </div>
//   );
// };

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, type ReactElement, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// 🧩 Interfaces
interface DropDownProps {
  children: ReactNode;
  darkMode?: boolean;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
}

interface DropDownHeaderProps {
  children: ReactNode;
  thumbnail?: ReactNode;
  darkMode?: boolean;
  isExpanded?: boolean;
  toggleExpanded?: () => void;
  variant?: Variant;
}

interface DropDownBodyProps {
  children: ReactNode;
  darkMode?: boolean;
  isExpanded?: boolean;
  clasesName?: string;
}

interface ThumbnailProps {
  number?: number | string;
  label: string;
  darkMode?: boolean;
  icon?: React.ReactNode;
  imageSrc?: string;
}

type Variant = "default" | "success" | "info" | "warning" | "danger" | "ghost";

// 🎛 Componente Principal
export const DropDown: React.FC<DropDownProps> = ({
  children,
  darkMode = false,
  expanded: controlledExpanded,
  onChange,
}) => {
  const [internalExpanded, setInternalExpanded] = useState<boolean>(false);
  const isControlled = controlledExpanded !== undefined;
  const isExpanded = isControlled ? controlledExpanded : internalExpanded;

  const toggleExpanded = (): void => {
    if (isControlled) {
      onChange?.(!isExpanded);
    } else {
      setInternalExpanded(!isExpanded);
    }
  };

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 shadow-sm backdrop-blur-sm ${
        darkMode
          ? "bg-gray-900/70 border-gray-700 text-gray-100"
          : "bg-white/80 border-gray-200 text-gray-800"
      } ${isExpanded ? "shadow-md" : "shadow-sm"}`}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as ReactElement<any>, {
              darkMode,
              isExpanded,
              toggleExpanded,
            })
          : child
      )}
    </div>
  );
};

// 🧱 Header — estilo Fluent 2
export const DropDownHeader: React.FC<DropDownHeaderProps> = ({
  children,
  thumbnail,
  darkMode = false,
  isExpanded = false,
  toggleExpanded,
  variant = "default",
}) => {
  const variantClasses: any = {
    default: {
      light:
        "hover:bg-gray-100/80 active:bg-gray-200 text-gray-800 rounded-2xl transition-colors",
      dark: "hover:bg-gray-800/70 active:bg-gray-700 text-gray-100 rounded-2xl transition-colors",
    },
    success: {
      light:
        "bg-green-50 text-green-700 hover:bg-green-100/90 border-green-100 rounded-2xl",
      dark:
        "bg-green-900/30 text-green-300 hover:bg-green-800/40 border-green-800",
    },
    info: {
      light:
        "bg-blue-50 text-blue-700 hover:bg-blue-100/90 border-blue-100 rounded-2xl",
      dark: "bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 border-blue-800",
    },
    warning: {
      light:
        "bg-yellow-50 text-yellow-700 hover:bg-yellow-100/90 border-yellow-100 rounded-2xl",
      dark:
        "bg-yellow-900/30 text-yellow-200 hover:bg-yellow-800/40 border-yellow-800",
    },
    danger: {
      light:
        "bg-red-50 text-red-700 hover:bg-red-100/90 border-red-100 rounded-2xl",
      dark: "bg-red-900/30 text-red-300 hover:bg-red-800/40 border-red-800",
    },
    ghost: {
      light: "hover:bg-gray-100/70 text-gray-600 rounded-2xl",
      dark: "hover:bg-gray-800/70 text-gray-300 rounded-2xl",
    },
  };

  const colorClasses = darkMode
    ? variantClasses[variant].dark
    : variantClasses[variant].light;

  return (
    <div
      className={`flex items-center justify-between w-full px-4 py-3 cursor-pointer select-none ${colorClasses}`}
      onClick={toggleExpanded}
    >
      <div className="flex items-center gap-3 flex-1">
        {thumbnail && <div className="flex-shrink-0">{thumbnail}</div>}
        <div className="flex-1 text-[15px] font-semibold leading-snug tracking-wide">
          {children}
        </div>
      </div>
      <ChevronDown
        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${
          isExpanded ? "rotate-180" : ""
        } ${darkMode ? "text-gray-400" : "text-gray-500"}`}
      />
    </div>
  );
};

// 📦 Body — animación y colores Fluent 2
export const DropDownBody: React.FC<DropDownBodyProps> = ({
  children,
  darkMode = false,
  isExpanded = false,
  clasesName = "",
}) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isExpanded
          ? "max-h-[600px] opacity-100"
          : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`p-4 border-t text-[14px] font-normal ${
          darkMode
            ? "border-gray-700 text-gray-200 bg-gray-900/60"
            : "border-gray-200 text-gray-700 bg-white/70"
        } ${clasesName}`}
      >
        {children}
      </div>
    </div>
  );
};

// 🧩 Thumbnail — estilo Fluent
export const Thumbnail: React.FC<ThumbnailProps> = ({
  number,
  label,
  darkMode = false,
  icon,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shadow-sm ${
          darkMode
            ? "bg-blue-900/30 text-blue-400 border border-blue-800"
            : "bg-blue-50 text-blue-700 border border-blue-100"
        }`}
      >
        {icon ? (
          <div className="text-lg">{icon}</div>
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={label}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <span className="text-sm font-semibold">{number}</span>
        )}
      </div>
      <span
        className={`text-xs mt-1 font-medium ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
