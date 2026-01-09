import { useEffect, useState } from "react";
import { UsuarioService } from "../services/user.service";
import type { UpdateUsuarioDTO, UsuarioResponseDTO } from "../dtos/usuario.dto";

export const useMiPerfil = () => {
    const [perfil, setPerfil] = useState<UsuarioResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const loadingPerfil = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await UsuarioService.getMiPerfil();
            setPerfil(data);
        } catch (e) {
            setError(e as Error);
            setPerfil(null);
        } finally {
            setLoading(false);
        };
    }

    const actualizarPerfil = async (data: UpdateUsuarioDTO) => {
        try {
            setLoading(true);
            setError(null);
            await UsuarioService.update(data);
            await loadingPerfil();
        } catch (e) {
            setError(e as Error);
        } finally {
            setLoading(false);
        }
    };

    const borrarPerfil = async () => {
        try {
            setLoading(true);
            setError(null);
            await UsuarioService.delete();
            setPerfil(null);
        } catch (err) {
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadingPerfil();
    }, []);

    return {
        perfil,
        loading,
        error,
        actualizarPerfil,
        borrarPerfil,
        reload: loadingPerfil
    };
}