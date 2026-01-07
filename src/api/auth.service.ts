import type { LoginDTO, LoginResponseDTO, UsuarioResponseDTO } from "../dtos/usuario.dto";
import { api } from "./axios.instance";


export const AuthService = {
    login: async (data: LoginDTO): Promise<LoginResponseDTO> => {
        const res = await api.post<LoginResponseDTO>('/auth/login', data);
        return res.data;
    },

    getPerfil: async (): Promise<UsuarioResponseDTO> => {
        const res = await api.get<UsuarioResponseDTO>('/auth/perfil');
        return res.data;
    },
};
