import { parseISO, differenceInSeconds, format } from "date-fns";

function formatRelative(dateISO: string): string {
  const date = parseISO(dateISO);
  const now = new Date();

  const diffInSeconds = differenceInSeconds(now, date);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} segundos`;
  }

  const diffInMinutes = Math.round(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes} minutos`;
  }

  const diffInHours = Math.round(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours} horas`;
  }

  const diffInDays = Math.round(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays} dias`;
  }

  const diffInWeeks = Math.round(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks} semanas`;
  }

  const diffInMonths = Math.round(diffInWeeks / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths} meses`;
  }

  return format(date, "dd/mm/yyyy");
}

function formatDefault(dateISO: string): string {
  const date = parseISO(dateISO);
  return format(date, "dd/MM/yyyy");
}

export const dateUtils = {
  formatRelative,
  formatDefault,
};
