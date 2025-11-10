import React, { type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes, forwardRef } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

// ============================================
// TIPOS Y INTERFACES
// ============================================

interface BaseFormProps {
  label?: string;
  error?: string;
  hint?: string;
  darkMode?: boolean;
  required?: boolean;
  containerClassName?: string;
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseFormProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseFormProps {
  resize?: boolean;
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'>, BaseFormProps {
  options: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, BaseFormProps {
  description?: string;
}

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>, BaseFormProps {
  description?: string;
}

interface RadioGroupProps extends BaseFormProps {
  name: string;
  options: { value: string; label: string; description?: string; disabled?: boolean }[];
  value?: string;
  onChange?: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
}

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'>, BaseFormProps {
  description?: string;
  size?: 'sm' | 'md' | 'lg';
}

// ============================================
// COMPONENTES AUXILIARES
// ============================================

const FormLabel: React.FC<{ 
  htmlFor?: string; 
  required?: boolean; 
  darkMode?: boolean;
  children: React.ReactNode;
}> = ({ htmlFor, required, darkMode, children }) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm font-medium mb-2 ${
      darkMode ? 'text-gray-200' : 'text-gray-700'
    }`}
  >
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
);

const FormError: React.FC<{ error?: string; darkMode?: boolean }> = ({ error, darkMode }) => {
  if (!error) return null;
  return (
    <div className={`flex items-center gap-1 mt-1.5 text-xs ${
      darkMode ? 'text-red-400' : 'text-red-600'
    }`}>
      <AlertCircle className="w-3.5 h-3.5" />
      <span>{error}</span>
    </div>
  );
};

const FormHint: React.FC<{ hint?: string; darkMode?: boolean }> = ({ hint, darkMode }) => {
  if (!hint) return null;
  return (
    <p className={`mt-1.5 text-xs ${
      darkMode ? 'text-gray-400' : 'text-gray-500'
    }`}>
      {hint}
    </p>
  );
};

// ============================================
// INPUT
// ============================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      darkMode = false,
      required = false,
      leftIcon,
      rightIcon,
      size = 'md',
      containerClassName = '',
      className = '',
      type = 'text',
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-4 py-3 text-base',
    };

    const baseClasses = `
      w-full rounded-lg border transition-all duration-200
      focus:outline-none focus:ring-2
      ${leftIcon ? 'pl-10' : ''}
      ${rightIcon || isPassword ? 'pr-10' : ''}
      ${sizeClasses[size]}
      ${error ? 'border-red-500 focus:ring-red-500/20' : ''}
      ${disabled ? 'cursor-not-allowed opacity-60' : ''}
    `;

    const lightClasses = `
      bg-white border-gray-300 text-gray-900
      placeholder:text-gray-400
      focus:border-teal-500 focus:ring-teal-500/20
      ${!error && 'hover:border-gray-400'}
    `;

    const darkClasses = `
      bg-gray-800 border-gray-600 text-gray-100
      placeholder:text-gray-500
      focus:border-teal-400 focus:ring-teal-400/20
      ${!error && 'hover:border-gray-500'}
    `;

    return (
      <div className={containerClassName}>
        {label && (
          <FormLabel htmlFor={props.id} required={required} darkMode={darkMode}>
            {label}
          </FormLabel>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {leftIcon}
            </div>
          )}
          
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            className={`
              ${baseClasses}
              ${darkMode ? darkClasses : lightClasses}
              ${className}
            `}
            {...props}
          />
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          )}
          
          {rightIcon && !isPassword && (
            <div className={`absolute right-3 top-1/2 -translate-y-1/2 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {rightIcon}
            </div>
          )}
        </div>
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================
// TEXTAREA
// ============================================

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      darkMode = false,
      required = false,
      resize = true,
      containerClassName = '',
      className = '',
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      w-full px-4 py-2.5 rounded-lg border text-sm
      transition-all duration-200
      focus:outline-none focus:ring-2
      ${!resize && 'resize-none'}
      ${error ? 'border-red-500 focus:ring-red-500/20' : ''}
      ${disabled ? 'cursor-not-allowed opacity-60' : ''}
    `;

    const lightClasses = `
      bg-white border-gray-300 text-gray-900
      placeholder:text-gray-400
      focus:border-teal-500 focus:ring-teal-500/20
      ${!error && 'hover:border-gray-400'}
    `;

    const darkClasses = `
      bg-gray-800 border-gray-600 text-gray-100
      placeholder:text-gray-500
      focus:border-teal-400 focus:ring-teal-400/20
      ${!error && 'hover:border-gray-500'}
    `;

    return (
      <div className={containerClassName}>
        {label && (
          <FormLabel htmlFor={props.id} required={required} darkMode={darkMode}>
            {label}
          </FormLabel>
        )}
        
        <textarea
          ref={ref}
          rows={rows}
          disabled={disabled}
          className={`
            ${baseClasses}
            ${darkMode ? darkClasses : lightClasses}
            ${className}
          `}
          {...props}
        />
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

// ============================================
// SELECT
// ============================================

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      darkMode = false,
      required = false,
      options,
      placeholder,
      size = 'md',
      containerClassName = '',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-4 py-3 text-base',
    };

    const baseClasses = `
      w-full rounded-lg border transition-all duration-200
      focus:outline-none focus:ring-2
      appearance-none cursor-pointer
      ${sizeClasses[size]}
      ${error ? 'border-red-500 focus:ring-red-500/20' : ''}
      ${disabled ? 'cursor-not-allowed opacity-60' : ''}
      pr-10
    `;

    const lightClasses = `
      bg-white border-gray-300 text-gray-900
      focus:border-teal-500 focus:ring-teal-500/20
      ${!error && 'hover:border-gray-400'}
    `;

    const darkClasses = `
      bg-gray-800 border-gray-600 text-gray-100
      focus:border-teal-400 focus:ring-teal-400/20
      ${!error && 'hover:border-gray-500'}
    `;

    return (
      <div className={containerClassName}>
        {label && (
          <FormLabel htmlFor={props.id} required={required} darkMode={darkMode}>
            {label}
          </FormLabel>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            disabled={disabled}
            className={`
              ${baseClasses}
              ${darkMode ? darkClasses : lightClasses}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
          
          <div className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Select.displayName = 'Select';

// ============================================
// CHECKBOX
// ============================================

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      description,
      error,
      hint,
      darkMode = false,
      required = false,
      containerClassName = '',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      w-4 h-4 rounded border-2 transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      cursor-pointer
      ${disabled ? 'cursor-not-allowed opacity-60' : ''}
      ${error ? 'border-red-500' : ''}
    `;

    const lightClasses = `
      border-gray-300 text-teal-600
      focus:ring-teal-500
      ${!error && 'hover:border-gray-400'}
    `;

    const darkClasses = `
      border-gray-600 bg-gray-800 text-teal-400
      focus:ring-teal-400 focus:ring-offset-gray-900
      ${!error && 'hover:border-gray-500'}
    `;

    return (
      <div className={containerClassName}>
        <div className="flex items-start gap-3">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              type="checkbox"
              disabled={disabled}
              className={`
                ${baseClasses}
                ${darkMode ? darkClasses : lightClasses}
                ${className}
              `}
              {...props}
            />
          </div>
          
          {(label || description) && (
            <div className="flex-1">
              {label && (
                <label
                  htmlFor={props.id}
                  className={`block text-sm font-medium cursor-pointer ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {label}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </label>
              )}
              {description && (
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

// ============================================
// RADIO
// ============================================

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      label,
      description,
      error,
      hint,
      darkMode = false,
      required = false,
      containerClassName = '',
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = `
      w-4 h-4 border-2 transition-all duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2
      cursor-pointer
      ${disabled ? 'cursor-not-allowed opacity-60' : ''}
      ${error ? 'border-red-500' : ''}
    `;

    const lightClasses = `
      border-gray-300 text-teal-600
      focus:ring-teal-500
      ${!error && 'hover:border-gray-400'}
    `;

    const darkClasses = `
      border-gray-600 bg-gray-800 text-teal-400
      focus:ring-teal-400 focus:ring-offset-gray-900
      ${!error && 'hover:border-gray-500'}
    `;

    return (
      <div className={containerClassName}>
        <div className="flex items-start gap-3">
          <div className="flex items-center h-5">
            <input
              ref={ref}
              type="radio"
              disabled={disabled}
              className={`
                ${baseClasses}
                ${darkMode ? darkClasses : lightClasses}
                ${className}
              `}
              {...props}
            />
          </div>
          
          {(label || description) && (
            <div className="flex-1">
              {label && (
                <label
                  htmlFor={props.id}
                  className={`block text-sm font-medium cursor-pointer ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {label}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </label>
              )}
              {description && (
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Radio.displayName = 'Radio';

// ============================================
// RADIO GROUP
// ============================================

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  error,
  hint,
  darkMode = false,
  required = false,
  name,
  options,
  value,
  onChange,
  orientation = 'vertical',
  containerClassName = '',
}) => {
  return (
    <div className={containerClassName}>
      {label && (
        <FormLabel required={required} darkMode={darkMode}>
          {label}
        </FormLabel>
      )}
      
      <div className={`flex gap-4 ${orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap'}`}>
        {options.map((option) => (
          <Radio
            key={option.value}
            id={`${name}-${option.value}`}
            name={name}
            value={option.value}
            label={option.label}
            description={option.description}
            disabled={option.disabled}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            darkMode={darkMode}
          />
        ))}
      </div>
      
      <FormError error={error} darkMode={darkMode} />
      <FormHint hint={hint} darkMode={darkMode} />
    </div>
  );
};

// ============================================
// SWITCH
// ============================================

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      description,
      error,
      hint,
      darkMode = false,
      required = false,
      size = 'md',
      containerClassName = '',
      className = '',
      disabled,
      checked,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: { container: 'w-9 h-5', toggle: 'w-4 h-4', translate: 'translate-x-4' },
      md: { container: 'w-11 h-6', toggle: 'w-5 h-5', translate: 'translate-x-5' },
      lg: { container: 'w-14 h-7', toggle: 'w-6 h-6', translate: 'translate-x-7' },
    };

    const sizes = sizeClasses[size];

    return (
      <div className={containerClassName}>
        <div className="flex items-start gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => {
              const input = document.getElementById(props.id || '') as HTMLInputElement;
              if (input) {
                input.click();
              }
            }}
            className={`
              relative inline-flex ${sizes.container} items-center rounded-full
              transition-colors duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-offset-2
              ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
              ${checked 
                ? darkMode 
                  ? 'bg-teal-500 focus:ring-teal-400' 
                  : 'bg-teal-600 focus:ring-teal-500'
                : darkMode
                  ? 'bg-gray-700 focus:ring-gray-600'
                  : 'bg-gray-200 focus:ring-gray-300'
              }
              ${darkMode && 'focus:ring-offset-gray-900'}
              ${className}
            `}
          >
            <span
              className={`
                ${sizes.toggle} inline-block rounded-full bg-white
                transform transition-transform duration-200 ease-in-out
                ${checked ? sizes.translate : 'translate-x-1'}
              `}
            />
          </button>
          
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          
          {(label || description) && (
            <div className="flex-1">
              {label && (
                <label
                  htmlFor={props.id}
                  className={`block text-sm font-medium cursor-pointer ${
                    darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  {label}
                  {required && <span className="text-red-500 ml-1">*</span>}
                </label>
              )}
              {description && (
                <p className={`text-xs mt-1 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
        
        <FormError error={error} darkMode={darkMode} />
        <FormHint hint={hint} darkMode={darkMode} />
      </div>
    );
  }
);

Switch.displayName = 'Switch';

// ============================================
// EJEMPLO DE USO
// ============================================

export default function FormComponentsExample() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    bio: '',
    country: '',
    newsletter: false,
    plan: 'basic',
    notifications: true,
  });

  return (
    <div className={`min-h-screen p-8 transition-colors ${
      darkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-2xl mx-auto">
        {/* Toggle Dark Mode */}
        <div className="mb-8 flex justify-end">
          <Switch
            id="dark-mode"
            label="Modo Oscuro"
            darkMode={darkMode}
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        </div>

        {/* Form Card */}
        <div className={`rounded-xl shadow-lg p-8 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Componentes de Formulario
          </h2>

          <div className="space-y-6">
            {/* Input */}
            <Input
              id="email"
              label="Correo Electrónico"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              darkMode={darkMode}
              required
              hint="Nunca compartiremos tu email"
            />

            {/* Input con iconos */}
            <Input
              id="password"
              label="Contraseña"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              darkMode={darkMode}
              required
              error={formData.password.length > 0 && formData.password.length < 8 ? 'La contraseña debe tener al menos 8 caracteres' : ''}
            />

            {/* Textarea */}
            <Textarea
              id="bio"
              label="Biografía"
              placeholder="Cuéntanos sobre ti..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              darkMode={darkMode}
              hint="Máximo 500 caracteres"
              rows={4}
            />

            {/* Select */}
            <Select
              id="country"
              label="País"
              placeholder="Selecciona un país"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              darkMode={darkMode}
              required
              options={[
                { value: 'mx', label: 'México' },
                { value: 'us', label: 'Estados Unidos' },
                { value: 'es', label: 'España' },
                { value: 'ar', label: 'Argentina' },
                { value: 'co', label: 'Colombia' },
              ]}
            />

            {/* Checkbox */}
            <Checkbox
              id="newsletter"
              label="Suscribirse al boletín"
              description="Recibe noticias y actualizaciones por correo"
              checked={formData.newsletter}
              onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
              darkMode={darkMode}
            />

            {/* Radio Group */}
            <RadioGroup
              label="Plan de Suscripción"
              name="plan"
              value={formData.plan}
              onChange={(value) => setFormData({ ...formData, plan: value })}
              darkMode={darkMode}
              required
              options={[
                { value: 'basic', label: 'Básico', description: 'Gratis para siempre' },
                { value: 'pro', label: 'Pro', description: '$9.99/mes - Características avanzadas' },
                { value: 'enterprise', label: 'Enterprise', description: 'Contacta ventas' },
              ]}
            />

            {/* Switch */}
            <Switch
              id="notifications"
              label="Notificaciones"
              description="Recibe alertas sobre tu actividad"
              checked={formData.notifications}
              onChange={(e) => setFormData({ ...formData, notifications: e.target.checked })}
              darkMode={darkMode}
              size="md"
            />

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                className={`px-6 py-2.5 rounded-lg font-medium transition-colors ${
                  darkMode
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>

        {/* Sizes Example */}
        <div className={`rounded-xl shadow-lg p-8 mt-6 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className={`text-xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Tamaños
          </h3>
          
          <div className="space-y-4">
            <Input
              placeholder="Small input"
              size="sm"
              darkMode={darkMode}
            />
            <Input
              placeholder="Medium input (default)"
              size="md"
              darkMode={darkMode}
            />
            <Input
              placeholder="Large input"
              size="lg"
              darkMode={darkMode}
            />
            
            <div className="flex gap-4 items-center pt-4">
              <Switch id="switch-sm" size="sm" darkMode={darkMode} label="Small" />
              <Switch id="switch-md" size="md" darkMode={darkMode} label="Medium" />
              <Switch id="switch-lg" size="lg" darkMode={darkMode} label="Large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}