export function formatDate(dateInput: string | Date, format: string = "DD/MM/YYYY"): string {
  const date = new Date(dateInput);

  if (isNaN(date.getTime())) {
    throw new Error("Fecha inválida");
  }

  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const shortMonths = months.map(m => m.slice(0, 3));
  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const shortDays = days.map(d => d.slice(0, 3));

  const pad = (n: number) => n.toString().padStart(2, "0");

  const replacements: Record<string, string> = {
    "YYYY": date.getFullYear().toString(),
    "YY": date.getFullYear().toString().slice(-2),
    "MMMM": months[date.getMonth()],
    "MMM": shortMonths[date.getMonth()],
    "MM": pad(date.getMonth() + 1),
    "M": (date.getMonth() + 1).toString(),
    "DD": pad(date.getDate()),
    "D": date.getDate().toString(),
    "dddd": days[date.getDay()],
    "ddd": shortDays[date.getDay()],
    "HH": pad(date.getHours()),
    "hh": pad(date.getHours() % 12 || 12),
    "mm": pad(date.getMinutes()),
    "ss": pad(date.getSeconds()),
    "A": date.getHours() >= 12 ? "PM" : "AM",
    "a": date.getHours() >= 12 ? "pm" : "am",
  };

  // Ordenar tokens por longitud descendente (para evitar reemplazos parciales)
  const tokens = Object.keys(replacements).sort((a, b) => b.length - a.length);

  let formatted = format;

  for (const token of tokens) {
    const value = replacements[token];
    formatted = formatted.replace(new RegExp(`\\b${token}\\b`, "g"), value);
  }

  return formatted;
}
