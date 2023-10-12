import { format } from 'date-fns';

export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(100, precision || 0);
    return Math.round(value * multiplier);
}

export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    const dtDateOnly = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);
    return format(dtDateOnly, pattern);
}

export const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};