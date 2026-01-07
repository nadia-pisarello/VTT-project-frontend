import { useEffect, useState } from "react";
import { UsuarioService } from "../api/user.service";
import type { CreateUsuarioDTO, UsuarioResponseDTO } from "../dtos/usuario.dto";

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<UsuarioResponseDTO[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const loadUsuarios = async () => {
        try {
            setLoading(true);
            const data = await UsuarioService.getAll();
            setUsuarios(data);
        } catch (e) {
            setError('Error cargando usuarios');
        } finally {
            setLoading(false);
        }
    };
    const crearUsuario = async (data: CreateUsuarioDTO) => {
        await UsuarioService.create(data);
        await loadUsuarios();
    };

    useEffect(() => {
        loadUsuarios();
    }, []);

    return {
        usuarios,
        loading,
        error,
        crearUsuario,
        reload: loadUsuarios
    };
}