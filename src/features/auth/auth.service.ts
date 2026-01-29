import type { CreateUsuarioDTO, LoginDTO, LoginResponseDTO, UsuarioResponseDTO } from "../usuario/usuario.dto";
import { api } from "../../services/httpClient";


export const AuthService = {
    login: async (data: LoginDTO): Promise<LoginResponseDTO> => {
        const res = await api.post<LoginResponseDTO>('/auth/login', data);
        return res.data;
    },

    getPerfil: async (): Promise<UsuarioResponseDTO> => {
        const res = await api.get<UsuarioResponseDTO>('/auth/perfil');
        return res.data;
    },

    register: async (data: CreateUsuarioDTO): Promise<LoginResponseDTO> => {
        const res = await api.post<LoginResponseDTO>('/auth/registro', data);
        return res.data;
    }
};
