
import { PersonajeService } from "./personaje.service";
import { useAsync } from "../../hooks/useAsync";
import { useCallback } from "react";

export const usePersonaje = (partidaId: number) => {
    const fetchPersonajes = useCallback(
        () => PersonajeService.getPersonajesDePartida(partidaId),
        [partidaId]
    );
    const {
        data: personaje,
        loading,
        error,
        execute,
    } = useAsync(fetchPersonajes);

    return {
        personaje: personaje ?? [],
        loading,
        error,
        reaload: execute,
    };
}