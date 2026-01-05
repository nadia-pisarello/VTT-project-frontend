import type { CreateUsuarioDTO, UsuarioResponseDTO, UpdateUsuarioDTO } from '../dtos/usuario.dto';
import { api } from './axios.instance';

export const UsuarioService = {
    create: async (data: CreateUsuarioDTO): Promise<UsuarioResponseDTO> => {

        const response = await api.post<UsuarioResponseDTO>(
            '/usuarios',
            data)
            .then(r => r.data);
        return response;
    },

    update: async (id: string, data: UpdateUsuarioDTO): Promise<UsuarioResponseDTO> => {
        const response = await api.patch<UsuarioResponseDTO>(`/usuarios/${id}`, data).then(r => r.data);
        return response;
    },

    delete: async (id: string): Promise<void> => {
        await api.delete<void>(`/usuarios/${id}`);
    },

    getById: async (id: string): Promise<UsuarioResponseDTO> => {
        const response = await api.get<UsuarioResponseDTO>(`/usuarios/${id}`).then(r => r.data);
        return response;
    },

    getAll: async (): Promise<UsuarioResponseDTO[]> => {
        const response = await api.get<UsuarioResponseDTO[]>('/usuarios').then(r => r.data);
        return response;
    }
};
