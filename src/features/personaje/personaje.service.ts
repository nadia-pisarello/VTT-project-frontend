import type { CreatePersonajeDTO, Personaje } from "./personaje.dto";
import { api } from "../../services/httpClient";

export const PersonajeService = {
    async createPersonaje(dto: CreatePersonajeDTO, partidaId: number): Promise<Personaje> {
        const response = await api.post<CreatePersonajeDTO>(`/personaje/partida/${partidaId}`, dto);
        return response.data;
    },
    async getPersonajeDePartida(partidaId: number): Promise<Personaje[]> {
        const response = await api.get<Personaje[]>(`/personaje/partida/${partidaId}/mis-personajes`);
        return response.data;
    },
};
