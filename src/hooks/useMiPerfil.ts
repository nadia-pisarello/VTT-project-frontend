
import { UsuarioService } from "../features/usuario/user.service.ts";
import type { UpdateUsuarioDTO } from "../features/usuario/usuario.dto.ts";
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