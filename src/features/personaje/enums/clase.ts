export const Clase = {
    GUERRERO: 'Guerrero',
    PALADIN: 'Paladín',
    GUARDABOSQUES: 'Guardabosques',
    MAGO: 'Mago',
    MAGO_ESPECIALISTA: 'Mago Especialista',
    BRIBÓN: 'Bribón',
    BARDO: 'Bardo',
    CLERIGO: 'Clérigo',
    DRUIDA: 'Druida'
} as const
export type ClaseEnum = keyof typeof Clase;
