import React from "react";
import clsx from "clsx";

interface BaseProps extends React.HTMLAttributes<HTMLElement> {
    darkMode?: boolean;
    children: React.ReactNode;
}

const colors = {
    light: {
        text: "text-gray-900",
        subtle: "text-gray-600",
        bg: "bg-white",
        card: "bg-gray-50",
        border: "border-gray-200",
        primary: "bg-blue-600 text-white hover:bg-blue-700",
    },
    dark: {
        text: "text-gray-100",
        subtle: "text-gray-400",
        bg: "bg-gray-900",
        card: "bg-gray-800",
        border: "border-gray-700",
        primary: "bg-blue-500 text-white hover:bg-blue-400",
    },
};

/* ===========================
   🪶 TIPOGRAFÍA
=========================== */
export const H1: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h1
        className={clsx(
            "text-4xl font-semibold tracking-tight mb-3",
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
        {children}
    </h1>
);

export const H2: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h2
        className={clsx(
            "text-3xl font-semibold tracking-tight mb-2",
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
        {children}
    </h2>
);

export const H3: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h3
        className={clsx(
            "text-2xl font-semibold mb-1",
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
        {children}
    </h3>
);

export const H4: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h4
        className={clsx(
            "text-xl font-medium mb-1",
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
        {children}
    </h4>
);

export const H5: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h5
        className={clsx(
            "text-lg font-medium mb-1",
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
        {children}
    </h5>
);

export const H6: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <h6
        className={clsx(
            "text-base font-semibold mb-1 uppercase tracking-wide",
            darkMode ? colors.dark.subtle : colors.light.subtle,
            className
        )}
        {...props}
    >
        {children}
    </h6>
);

export const P: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <p
        className={clsx(
            "text-base leading-relaxed",
            darkMode ? colors.dark.subtle : colors.light.subtle,
            className
        )}
        {...props}
    >
        {children}
    </p>
);

export const Label: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <label
        className={clsx(
            "text-sm font-medium",
            darkMode ? colors.dark.subtle : colors.light.subtle,
            className
        )}
        {...props}
    >
        {children}
    </label>
);

export const Small: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <small
        className={clsx(
            "text-sm",
            darkMode ? colors.dark.subtle : colors.light.subtle,
            className
        )}
        {...props}
    >
        {children}
    </small>
);

export const Span: React.FC<BaseProps> = ({ children, darkMode, className, ...props }) => (
    <span
        className={clsx(
            darkMode ? colors.dark.text : colors.light.text,
            className
        )}
        {...props}
    >
    {children}
  </span>
);

/* ===========================
   🧱 ELEMENTOS BASE
=========================== */

// Button
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    darkMode?: boolean;
    variant?: "primary" | "outline" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
                                                  children,
                                                  darkMode,
                                                  variant = "primary",
                                                  className,
                                                  ...props
                                              }) => {
    const mode = darkMode ? colors.dark : colors.light;
    const base = "rounded-md px-4 py-2 font-medium transition-all duration-150 focus:outline-none";
    const variants = {
        primary: `${mode.primary}`,
        outline: `${mode.border} border ${mode.text} bg-transparent hover:bg-opacity-10`,
        ghost: `bg-transparent ${mode.text} hover:bg-opacity-5`,
    };

    return (
        <button className={clsx(base, variants[variant], className)} {...props}>
            {children}
        </button>
    );
};

// Input
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    darkMode?: boolean;
}

export const Input: React.FC<InputProps> = ({ darkMode, className, ...props }) => (
    <input
        className={clsx(
            "w-full rounded-md px-3 py-2 border focus:ring-2 focus:ring-blue-500 outline-none",
            darkMode ? `${colors.dark.bg} ${colors.dark.text} ${colors.dark.border}` : `${colors.light.bg} ${colors.light.text} ${colors.light.border}`,
            className
        )}
        {...props}
    />
);

// Card
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    darkMode?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, darkMode, className, ...props }) => (
    <div
        className={clsx(
            "rounded-2xl shadow-sm p-5 border transition-colors",
            darkMode ? `${colors.dark.card} ${colors.dark.border}` : `${colors.light.card} ${colors.light.border}`,
            className
        )}
        {...props}
    >
        {children}
    </div>
);

// Divider
export const Divider: React.FC<{ darkMode?: boolean; className?: string }> = ({ darkMode, className }) => (
    <hr
        className={clsx(
            "my-4 border-t",
            darkMode ? colors.dark.border : colors.light.border,
            className
        )}
    />
);
