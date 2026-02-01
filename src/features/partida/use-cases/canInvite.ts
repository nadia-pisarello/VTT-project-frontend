import type { PartidaResponseDTO } from "../partida.dto";

export function canInvite(partida: PartidaResponseDTO, userId: number) {
    return partida.narradorId.id === userId;
}