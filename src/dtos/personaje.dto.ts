import type { AlineamientoEnum } from "../enums/alineamiento";
import type { ClaseEnum } from "../enums/clase";
import type { HabilidadEnum } from "../enums/habilidad";

export interface Personaje {
    id?: number;
    nombre: string;
    alineamiento: AlineamientoEnum;
    habilidad: { nombre: HabilidadEnum; valor: number }[];
    clase: ClaseEnum;
    raza: string;
    nivel: number;
    experiencia: number;
    puntosVida: number;
    equipo: { nombre: string; cantidad: number }[];
}

export interface CreatePersonajeDTO {
    nombre: string;
    alineamiento: AlineamientoEnum;
    habilidad: { nombre: HabilidadEnum; valor: number }[];
    clase: ClaseEnum;
    raza: string;
    nivel: number;
    experiencia: number;
    puntosVida: number;
    equipo: { nombre: string; cantidad: number }[];
}