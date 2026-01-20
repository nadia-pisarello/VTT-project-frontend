
import { PersonajeService } from "../services/personaje.service";
import { useAsync } from "./useAsync";

export const usePersonaje = (partidaId: number) => {
    const {
        data: personaje,
        loading,
        error,
        execute: loadPersonajes,
    } = useAsync(() => PersonajeService.getPersonajeDePartida(partidaId), false);

    return {
        personaje: personaje?.[0] ?? null,
        loading,
        error,
        reaload: loadPersonajes,
    };
}