import { useState } from "react"
import { AuthService } from "../services/auth.service"
import type { LoginDTO, UsuarioResponseDTO } from "../dtos/usuario.dto"

export const useAuth = () => {
    const [usuario, setUsuario] = useState<UsuarioResponseDTO | null>(null)
    const [loading, setLoading] = useState(false)
    const login = async (data: LoginDTO) => {
        setLoading(true)
        const { access_token } = await AuthService.login(data)
        localStorage.setItem("token", access_token)
        const perfil = await AuthService.getPerfil()
        setUsuario(perfil)
        setLoading(false)
    };
    const logout = () => {
        localStorage.removeItem("token")
        setUsuario(null)
    };
    return { usuario, login, logout, loading, isAuthenticated: !!usuario };
}