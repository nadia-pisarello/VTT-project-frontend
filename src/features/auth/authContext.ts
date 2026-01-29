import { createContext } from "react";
import type { UsuarioResponseDTO, LoginDTO } from "../usuario/usuario.dto";

export interface AuthContextType {
    usuario: UsuarioResponseDTO | null;
    loading: boolean;
    login: (data: LoginDTO) => Promise<void>;
    logout: () => void;
    isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);