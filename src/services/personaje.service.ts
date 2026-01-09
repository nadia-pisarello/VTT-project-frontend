import type { CreatePersonajeDTO, Personaje } from "../dtos/personaje.dto";
import { api } from "./axios.instance";

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
