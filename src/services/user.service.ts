import type { CreateUsuarioDTO, UsuarioResponseDTO, UpdateUsuarioDTO } from '../dtos/usuario.dto';
import { api } from './axios.instance';

export const UsuarioService = {
    create: async (data: CreateUsuarioDTO): Promise<UsuarioResponseDTO> => {

        const response = await api.post<UsuarioResponseDTO>('/usuario/crear', data);
        return response.data;
    },

    update: async (data: UpdateUsuarioDTO): Promise<UsuarioResponseDTO> => {
        const response = await api.patch<UsuarioResponseDTO>(`/usuario/editar-perfil`, data);
        return response.data;
    },

    delete: async (): Promise<void> => {
        await api.delete<void>(`/usuario/eliminar-cuenta`);
    },

    getMiPerfil: async (): Promise<UsuarioResponseDTO> => {
        const response = await api.get<UsuarioResponseDTO>('/usuario/mi-perfil');
        return response.data;
    },

    getByEmail: async (email: string): Promise<UsuarioResponseDTO> => {
        const response = await api.get<UsuarioResponseDTO>(`/usuario/email/${email}`);
        return response.data;
    },

    getAll: async (): Promise<UsuarioResponseDTO[]> => {
        const response = await api.get<UsuarioResponseDTO[]>('/usuario');
        return response.data;
    }
};
