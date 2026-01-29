export const Alineamiento = {
    LB: 'Legal Bueno',
    NB: 'Neutral Bueno',
    CB: 'Caótico Bueno',
    LN: 'Legal Neutral',
    NN: 'Neutral',
    CN: 'Caótico Neutral',
    LM: 'Legal Malvado',
    NM: 'Neutral Malvado',
    CM: 'Caótico Malvado',
} as const;
export type AlineamientoEnum = keyof typeof Alineamiento;