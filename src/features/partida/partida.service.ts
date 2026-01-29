import { api } from "../../services/httpClient";
import type { PartidaResponseDTO, CreatePartidaDTO, UpdatePartidaDto, MisPartidasResponseDTO } from "./partida.dto";

export const PartidaService = {
    create: async (data: CreatePartidaDTO): Promise<PartidaResponseDTO> => {
        const response = await api.post<PartidaResponseDTO>('/partida/nueva-partida', data);
        return response.data;
    },

    update: async (partidaId: number, data: UpdatePartidaDto): Promise<PartidaResponseDTO> => {
        const response = await api.patch<PartidaResponseDTO>(`/partida/${partidaId}/actualizar-partida`, data);
        return response.data;
    },

    getAll: async (): Promise<MisPartidasResponseDTO> => {
        const response = await api.get<MisPartidasResponseDTO>('/partida');
        return response.data;
    },

    getById: async (partidaId: number): Promise<PartidaResponseDTO> => {
        const response = await api.get<PartidaResponseDTO>(`/partida/${partidaId}`);
        return response.data;
    },

    delete: async (partidaId: number): Promise<void> => {
        await api.delete<void>(`/partida/${partidaId}/eliminar-partida`);
    },

    solicitarUnirse: async (linkAcceso: string): Promise<PartidaResponseDTO> => {
        const response = await api.post<PartidaResponseDTO>('/partida/solicitar-unirse', { linkAcceso });
        return response.data;
    },

    aceptarSolicitud: async (partidaId: number, usuarioId: number): Promise<PartidaResponseDTO> => {
        const response = await api.post<PartidaResponseDTO>(`/partida/${partidaId}/solicitud/${usuarioId}/aceptar`);
        return response.data;
    },

    rechazarSolicitud: async (partidaId: number, usuarioId: number): Promise<PartidaResponseDTO> => {
        const response = await api.post<PartidaResponseDTO>(`/partida/${partidaId}/solicitudes/${usuarioId}/rechazar`);
        return response.data;
    }
};