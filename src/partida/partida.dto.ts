import type { UsuarioResponseDTO } from "../usuario/usuario.dto";

export interface CreatePartidaDTO {
    nombre: string;
}

export interface PartidaResponseDTO {
    id: number;
    nombre: string;
    linkAcceso: string;
    narradorId: UsuarioResponseDTO;
    jugadores: UsuarioResponseDTO[];
}

export interface UpdatePartidaDto {
    nombre?: string;
    rutasMapas?: string[];
}

export interface MisPartidasResponseDTO {
    dm: PartidaResponseDTO[];
    jugador: PartidaResponseDTO[];
}
