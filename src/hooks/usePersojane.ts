import { useEffect, useState } from "react";
import type { Personaje } from "../dtos/personaje.dto";
import { PersonajeService } from "../services/personaje.service";

export const usePersonaje = (partidaId: number) => {
    const [personaje, setPersonaje] = useState<Personaje | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    const loadPersonaje = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await PersonajeService.getPersonajeDePartida(partidaId);
            setPersonaje(data.length > 0 ? data[0] : null);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPersonaje();
    }, [partidaId]);

    return {
        personaje,
        loading,
        error,
        reaload: loadPersonaje,
    };
}