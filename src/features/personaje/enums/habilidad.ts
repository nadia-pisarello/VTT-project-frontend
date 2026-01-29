export const Habilidad = {
    FUE: 'Fuerza',
    DES: 'Destreza',
    CON: 'Constitución',
    INT: 'Inteligencia',
    SAB: 'Sabiduría',
    CAR: 'Carisma',
} as const;

export type HabilidadEnum = keyof typeof Habilidad;