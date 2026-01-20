import { UsuarioService } from "../services/user.service";
import type { UpdateUsuarioDTO } from "../dtos/usuario.dto";
import { useAsync } from "./useAsync.ts";
export const useMiPerfil = () => {
    const {
        data: perfil,
        setData: setPerfil,
        loading,
        error,
        execute: loadingPerfil,
    } = useAsync(() => UsuarioService.getMiPerfil());

    const actualizarPerfil = async (data: UpdateUsuarioDTO) => {
        await UsuarioService.update(data);
        await loadingPerfil();
    };

    const borrarPerfil = async () => {
        await UsuarioService.delete();
        setPerfil(null);
    }
    return {
        perfil,
        loading,
        error,
        actualizarPerfil,
        borrarPerfil,
        reload: loadingPerfil
    };
}