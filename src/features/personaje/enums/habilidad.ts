export const HABILIDADES = [
    "FUE",
    "DES",
    "CON",
    "INT",
    "SAB",
    "CAR",
] as const;

export type HabilidadEnum = typeof HABILIDADES[number];

export const HABILIDAD_LABEL: Record<HabilidadEnum, string> = {
    FUE: "Fuerza",
    DES: "Destreza",
    CON: "Constitución",
    INT: "Inteligencia",
    SAB: "Sabiduría",
    CAR: "Carisma",
};