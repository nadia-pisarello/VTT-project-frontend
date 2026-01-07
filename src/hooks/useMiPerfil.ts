import { useEffect, useState } from "react";
import { UsuarioService } from "../api/user.service";
import type { UpdateUsuarioDTO, UsuarioResponseDTO } from "../dtos/usuario.dto";

export const useMiPerfil = () => {
    const [perfil, setPerfil] = useState<UsuarioResponseDTO | null>(null);
    const [loading, setLoading] = useState(false);

    const loadingPerfil = async () => {
        setLoading(true);
        const data = await UsuarioService.getMiPerfil();
        setPerfil(data);
        setLoading(false);
    };

    const actualizarPerfil = async (data: UpdateUsuarioDTO) => {
        await UsuarioService.update(data);
        await loadingPerfil();
    };

    const borrarPerfil = async () => {
        await UsuarioService.delete();
    }

    useEffect(() => {
        loadingPerfil();
    }, []);

    return {
        perfil,
        loading,
        actualizarPerfil,
        borrarPerfil,
        reload: loadingPerfil
    };
}