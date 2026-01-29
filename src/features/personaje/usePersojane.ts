
import { PersonajeService } from "./personaje.service";
import { useAsync } from "../hooks/useAsync";

export const usePersonaje = (partidaId: number) => {
    const {
        data: personaje,
        loading,
        error,
        execute: loadingPersonajes,
    } = useAsync(() => PersonajeService.getPersonajeDePartida(partidaId));

    return {
        personaje: personaje ?? [],
        loading,
        error,
        reaload: loadingPersonajes,
    };
}